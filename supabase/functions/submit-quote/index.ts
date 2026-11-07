import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.3';
import { z } from 'https://deno.land/x/zod@v3.22.4/mod.ts';
import { Resend } from 'https://esm.sh/resend@4.0.0';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Escape customer-supplied text before putting it in the notification email.
const esc = (v: string | undefined) =>
  (v ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');

// Inbox that receives website leads.
const LEADS_EMAIL = 'info@croydonwaste.co.uk';

// Input validation schema
const quoteSchema = z.object({
  name: z.string().trim().min(1).max(100),
  phone: z.string().trim().min(10).max(20).regex(/^[0-9\s\-\+\(\)]+$/),
  email: z.string().trim().email().max(255),
  postcode: z.string().trim().min(5).max(10).regex(/^[A-Z0-9\s]+$/i),
  preferredDatetime: z.string().optional(),
  accessNotes: z.string().trim().max(500).optional(),
  description: z.string().trim().min(1).max(2000),
  consentGiven: z.boolean().refine(val => val === true, 'Consent must be given'),
});

// Simple rate limiting (in-memory, resets on function restart)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 60000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 3;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }

  if (record.count >= MAX_REQUESTS_PER_WINDOW) {
    return false;
  }

  record.count++;
  return true;
}

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Rate limiting
    const ip = req.headers.get('x-forwarded-for') || 'unknown';
    if (!checkRateLimit(ip)) {
      console.warn(`Rate limit exceeded for IP: ${ip}`);
      return new Response(
        JSON.stringify({ error: 'Too many requests. Please try again later.' }),
        { status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    console.log('Received quote submission request');

    // Parse form data
    const formData = await req.formData();
    
    // Extract text fields
    const rawData = {
      name: formData.get('name') as string,
      phone: formData.get('phone') as string,
      email: formData.get('email') as string,
      postcode: formData.get('postcode') as string,
      preferredDatetime: formData.get('preferredDatetime') as string || undefined,
      accessNotes: formData.get('accessNotes') as string || undefined,
      description: formData.get('description') as string,
      consentGiven: formData.get('consentGiven') === 'true',
    };

    // Validate using Zod schema
    const validationResult = quoteSchema.safeParse(rawData);
    if (!validationResult.success) {
      console.error('Validation failed:', validationResult.error.format());
      return new Response(
        JSON.stringify({ 
          error: 'Invalid input data',
          details: validationResult.error.flatten().fieldErrors
        }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const quoteData = validationResult.data;
    console.log('Quote data validated successfully');

    // Handle file uploads with validation
    const imageUrls: string[] = [];
    const files = formData.getAll('files');
    
    // Limit number of files
    if (files.length > 10) {
      return new Response(
        JSON.stringify({ error: 'Maximum 10 files allowed' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }
    
    console.log(`Processing ${files.length} file(s)`);

    const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
    const ALLOWED_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/heic'];

    for (let i = 0; i < files.length; i++) {
      const file = files[i] as File;
      if (file && file.size > 0) {
        // Validate file size
        if (file.size > MAX_FILE_SIZE) {
          console.error(`File too large: ${file.name}, size: ${file.size}`);
          return new Response(
            JSON.stringify({ error: `File ${file.name} exceeds 10MB limit` }),
            { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
          );
        }

        // Validate file type
        if (!ALLOWED_TYPES.includes(file.type)) {
          console.error(`Invalid file type: ${file.type}`);
          return new Response(
            JSON.stringify({ error: `File ${file.name} has invalid type. Only images allowed.` }),
            { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
          );
        }
        const fileName = `${crypto.randomUUID()}-${file.name}`;
        const filePath = `${Date.now()}/${fileName}`;

        console.log(`Uploading file: ${fileName}, size: ${file.size} bytes`);

        const { data: uploadData, error: uploadError } = await supabase.storage
          .from('quote-images')
          .upload(filePath, file, {
            contentType: file.type,
            upsert: false,
          });

        if (uploadError) {
          console.error('Upload error:', uploadError);
          throw uploadError;
        }

        const { data: { publicUrl } } = supabase.storage
          .from('quote-images')
          .getPublicUrl(filePath);

        imageUrls.push(publicUrl);
        console.log(`File uploaded successfully: ${fileName}`);
      }
    }

    // Insert quote request into database
    const { data: quoteRequest, error: insertError } = await supabase
      .from('quote_requests')
      .insert({
        name: quoteData.name,
        phone: quoteData.phone,
        email: quoteData.email,
        postcode: quoteData.postcode,
        preferred_datetime: quoteData.preferredDatetime || null,
        access_notes: quoteData.accessNotes || null,
        description: quoteData.description,
        image_urls: imageUrls,
        consent_given: quoteData.consentGiven,
        status: 'new',
      })
      .select()
      .single();

    if (insertError) {
      console.error('Database insert error:', insertError);
      throw insertError;
    }

    console.log(`Quote request created successfully: ${quoteRequest.id}`);

    // Send email notification
    console.log('Starting email notification process...');
    try {
      const apiKey = Deno.env.get('RESEND_API_KEY');
      if (!apiKey) {
        console.error('RESEND_API_KEY not found in environment variables');
        throw new Error('RESEND_API_KEY not configured');
      }
      
      console.log('Initializing Resend client...');
      const resend = new Resend(apiKey);
      
      const imageListHtml = imageUrls.length > 0 
        ? `
          <h3>Attached Images:</h3>
          <ul>
            ${imageUrls.map((url, idx) => `<li><a href="${url}" target="_blank">View Image ${idx + 1}</a></li>`).join('')}
          </ul>
        `
        : '<p><em>No images attached</em></p>';

      const emailHtml = `
        <h2>New Quote Request Received</h2>
        <p><strong>Request ID:</strong> ${quoteRequest.id}</p>
        
        <h3>Contact Information:</h3>
        <ul>
          <li><strong>Name:</strong> ${esc(quoteData.name)}</li>
          <li><strong>Phone:</strong> ${esc(quoteData.phone)}</li>
          <li><strong>Email:</strong> ${esc(quoteData.email)}</li>
          <li><strong>Postcode:</strong> ${esc(quoteData.postcode)}</li>
        </ul>

        <h3>Job Details:</h3>
        <p><strong>Description:</strong></p>
        <p style="white-space: pre-wrap">${esc(quoteData.description)}</p>
        
        ${quoteData.preferredDatetime ? `<p><strong>Preferred Date/Time:</strong> ${esc(quoteData.preferredDatetime)}</p>` : ''}
        ${quoteData.accessNotes ? `<p><strong>Access Notes:</strong> ${esc(quoteData.accessNotes)}</p>` : ''}
        
        ${imageListHtml}
        
        <hr>
        <p style="color: #666; font-size: 12px;">This quote request was submitted via guttercleaningsnearme.co.uk</p>
      `;

      console.log(`Sending email to ${LEADS_EMAIL}...`);
      const emailResponse = await resend.emails.send({
        // Sender must stay on a domain verified in Resend (surreysussexwaste.co.uk is the verified one).
        from: 'Gutter Cleanings Near Me <noreply@surreysussexwaste.co.uk>',
        to: [LEADS_EMAIL],
        reply_to: quoteData.email,
        subject: `Gutter cleaning quote request – ${quoteData.name} (${quoteData.postcode})`,
        html: emailHtml,
      });

      console.log('Email notification sent successfully:', emailResponse);
    } catch (emailError) {
      console.error('Failed to send email notification:', emailError);
      console.error('Email error details:', JSON.stringify(emailError));
      // Don't fail the request if email fails - the quote is already saved
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        id: quoteRequest.id,
        message: 'Quote request submitted successfully'
      }),
      { 
        status: 200, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );

  } catch (error) {
    console.error('Error processing quote request:', error);
    return new Response(
      JSON.stringify({ 
        error: error instanceof Error ? error.message : 'An unexpected error occurred' 
      }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );
  }
});

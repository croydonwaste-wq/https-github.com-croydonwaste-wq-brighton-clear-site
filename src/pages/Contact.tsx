import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SEOSchema } from "@/components/SEOSchema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Clock, MessageCircle, Upload, X } from "lucide-react";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import heroSurrey from "@/assets/gutter-cleaner-on-ladder.webp";

const Contact = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files).slice(0, 10 - files.length);
      setFiles([...files, ...newFiles]);
    }
  };

  const removeFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);
      
      // Add files to FormData
      files.forEach((file) => {
        formData.append('files', file);
      });

      // Add consent
      formData.append('consentGiven', 'true');

      const { data, error } = await supabase.functions.invoke('submit-quote', {
        body: formData,
      });

      if (error) throw error;

      toast({
        title: "Message Sent!",
        description: "We'll get back to you within 2 hours. For urgent requests, please call or WhatsApp us.",
      });
      
      setFiles([]);
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error('Error submitting quote:', error);
      toast({
        title: "Error",
        description: "Failed to submit quote request. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <SEOSchema 
        title="Contact Us | Get a Free Gutter Cleaning Quote | Call Today"
        description="Request a free gutter cleaning quote. Call 01273 569347, WhatsApp photos or use our online form. Fast response across Brighton, Sussex & Surrey."
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Contact", url: "/contact" }
        ]}
      />
      <section className="bg-muted/30 py-12">
        <div className="container">
          <Breadcrumbs items={[{ label: "Contact" }]} />
          <h1 className="mb-4">Get a Fast Gutter Cleaning Quote</h1>
          <p className="max-w-3xl text-lg text-muted-foreground">
            Send us photos and details for an accurate, fixed-price quote. We respond within 2 hours during business hours. Serving Brighton, Hove, Crawley, Horsham, Worthing and all surrounding Sussex & Surrey areas.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Info */}
            <div>
              <h2 className="mb-6">Get In Touch</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold">Phone</h3>
                    <a href="tel:01273569347" className="text-lg text-primary hover:underline">
                      01273 569347
                    </a>
                    <p className="text-sm text-muted-foreground">Mon-Sat 7am-7pm, Sun 8am-5pm</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <MessageCircle className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold">WhatsApp</h3>
                    <a
                      href="https://wa.me/441273569347"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg text-primary hover:underline"
                    >
                      Message us on WhatsApp
                    </a>
                    <p className="text-sm text-muted-foreground">Fast response for urgent quotes</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold">Email</h3>
                    <a
                      href="mailto:info@guttercleaningsnearme.co.uk"
                      className="text-lg text-primary hover:underline"
                    >
                      info@guttercleaningsnearme.co.uk
                    </a>
                    <p className="text-sm text-muted-foreground">We'll respond within 2 hours</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold">Coverage Area</h3>
                    <p className="text-muted-foreground">
                      Sussex & Surrey
                      <br />
                      Serving Brighton, Hove, Worthing, Crawley, Horsham & beyond
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold">Opening Hours</h3>
                    <p className="text-muted-foreground">
                      Monday - Saturday: 7am - 7pm
                      <br />
                      Sunday: 8am - 5pm
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-xl border bg-secondary/50 p-6">
                <h3 className="mb-3 font-semibold">For Urgent Requests</h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  Need same-day gutter cleaning? Call or WhatsApp us directly for the fastest response.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button asChild>
                    <a href="tel:01273569347">
                      <Phone className="mr-2 h-4 w-4" />
                      Call Now
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href="https://wa.me/441273569347" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="mb-6">Send Us Your Quote Request</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="name">Name *</Label>
                    <Input id="name" name="name" required placeholder="John Smith" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone *</Label>
                    <Input id="phone" name="phone" type="tel" required placeholder="07123 456789" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" name="email" type="email" required placeholder="john@example.com" />
                </div>

                <div>
                  <Label htmlFor="postcode">Postcode *</Label>
                  <Input id="postcode" name="postcode" required placeholder="BN1 1AA" />
                </div>

                <div>
                  <Label htmlFor="datetime">Preferred Date & Time</Label>
                  <Input id="datetime" name="preferredDatetime" type="datetime-local" />
                </div>

                <div>
                  <Label htmlFor="access">Access Notes</Label>
                  <Input id="access" name="accessNotes" placeholder="e.g., 2nd floor, parking available, gate code" />
                </div>

                <div>
                  <Label htmlFor="description">Details about your gutters *</Label>
                  <Textarea
                    id="description"
                    name="description"
                    required
                    placeholder="Please describe your gutter cleaning needs (property type, gutter length, access notes, etc.)..."
                    rows={4}
                  />
                </div>

                <div>
                  <Label>Upload Photos (up to 10 images)</Label>
                  <div className="mt-2">
                    <label
                      htmlFor="file-upload"
                      className="flex cursor-pointer items-center justify-center rounded-md border-2 border-dashed border-muted-foreground/25 p-6 transition-colors hover:border-muted-foreground/50"
                    >
                      <div className="text-center">
                        <Upload className="mx-auto h-8 w-8 text-muted-foreground" />
                        <p className="mt-2 text-sm text-muted-foreground">
                          Click to upload (JPG, PNG, HEIC)
                        </p>
                        <p className="text-xs text-muted-foreground">Max 10MB per file</p>
                      </div>
                      <input
                        id="file-upload"
                        type="file"
                        className="hidden"
                        multiple
                        accept="image/jpeg,image/png,image/heic"
                        onChange={handleFileChange}
                        disabled={files.length >= 10}
                      />
                    </label>
                    {files.length > 0 && (
                      <div className="mt-3 space-y-2">
                        {files.map((file, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between rounded-md border bg-muted/50 px-3 py-2"
                          >
                            <span className="truncate text-sm">{file.name}</span>
                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              onClick={() => removeFile(index)}
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex items-start space-x-2">
                  <Checkbox id="consent" required />
                  <label
                    htmlFor="consent"
                    className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    I consent to be contacted via phone, email or text regarding my quote request.
                  </label>
                </div>

                <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Quote Request'}
                </Button>

                <p className="text-center text-sm text-muted-foreground">
                  We'll respond within 2 hours during business hours
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary/50 py-16">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="overflow-hidden rounded-lg">
              <img src={heroSurrey} alt="Professional gutter cleaning service covering Sussex and Surrey" className="h-full w-full object-cover" loading="lazy" />
            </div>
            <div>
              <h2 className="mb-4">Serving All of Sussex & Surrey</h2>
              <p className="text-lg text-muted-foreground mb-4">
                From Brighton seafront to the Surrey countryside, we provide fast, professional gutter cleaning across Sussex and Surrey.
              </p>
              <p className="text-muted-foreground">
                Fully insured. Same-day and next-day appointments available, subject to availability.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

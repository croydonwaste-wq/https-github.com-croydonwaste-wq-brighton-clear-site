import { useParams, Link } from "react-router-dom";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SEOSchema } from "@/components/SEOSchema";
import { FAQSection } from "@/components/FAQSection";
import { QuoteDialog } from "@/components/QuoteDialog";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, CheckCircle } from "lucide-react";
import { locationData } from "@/data/locationData";
import teamProfessional from "@/assets/team-professional.jpg";
import houseClearance from "@/assets/house-clearance.jpg";
import gardenClearance from "@/assets/garden-clearance.jpg";
import recyclingCenter from "@/assets/recycling-center.jpg";

const LocationPage = () => {
  const { location } = useParams();
  
  const data = location ? locationData[location] : null;
  const townName = data?.name || "This Area";

  const services = [
    "Residential gutter cleaning (all property types)",
    "Commercial gutter maintenance contracts",
    "Downpipe unblocking and clearing",
    "Gutter repairs and leak fixing",
    "Fascia and soffit cleaning",
    "Emergency same-day service",
    "CCTV gutter inspection",
  ];


  const faqs = [
    {
      question: `Do you offer same-day gutter cleaning in ${townName}?`,
      answer: `Yes! We offer same-day gutter cleaning across ${townName} subject to availability. Contact us before 10am for same-day service in ${townName}. Perfect for emergency situations like overflowing gutters in the ${townName} area.`,
    },
    {
      question: "Can you clean gutters on high buildings?",
      answer: `Absolutely! We handle properties of all heights in ${townName} using professional equipment including ladders, scaffolding towers and safety gear. Fully insured for work at height.`,
    },
    {
      question: "How do you price gutter cleaning?",
      answer: "Our pricing is based on property size, gutter length, height, access difficulty, and level of blockage. Send us photos via WhatsApp or our quote form for the most accurate estimate. We provide fixed quotes with no hidden fees.",
    },
    {
      question: "How often should gutters be cleaned?",
      answer: "We recommend gutter cleaning at least twice a year—typically in autumn after leaves fall and in spring. Properties near trees may need more frequent cleaning to prevent blockages.",
    },
    {
      question: `Are you insured for gutter cleaning work in ${townName}?`,
      answer: "Yes, we carry comprehensive public liability insurance covering all gutter cleaning and repair work. Fully certified for working at height with all necessary safety equipment.",
    },
  ];

  const seoFaqs = faqs.map(f => ({ question: f.question, answer: f.answer }));

  return (
    <div>
      <SEOSchema 
        title={data?.metaTitle || `Gutter Cleaning ${townName} | Professional Gutter Services`}
        description={data?.metaDescription || `Professional gutter cleaning in ${townName}. Same-day service available. Call 01273 569347.`}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Areas We Cover", url: "/areas" },
          { name: townName, url: `/gutter-cleaning/${location}` }
        ]}
        faqs={seoFaqs}
      />
      <section className="bg-muted/30 py-12">
        <div className="container">
          <Breadcrumbs
            items={[
              { label: "Areas We Cover", href: "/areas" },
              { label: townName },
            ]}
          />
          <h1 className="mb-4">Gutter Cleaning in {townName} — Professional, Fast & Reliable</h1>
          <p className="max-w-3xl text-lg text-muted-foreground">
            {data?.localInfo?.landmarks?.[0] 
              ? `From ${data.localInfo.landmarks[0]} to the surrounding residential streets, we help ${townName} homeowners and businesses protect their properties from water damage. Professional gutter cleaning across ${townName}, fully insured service, and same-day appointments available when you need us.`
              : `We help ${townName} homeowners and businesses protect their properties from water damage with professional gutter cleaning. Same-day service available across ${townName}, fully insured, and committed to excellent results.`
            }
          </p>
        </div>
      </section>

      <section className="bg-muted/30 py-16">
        <div className="container">
          <div className="overflow-hidden rounded-lg">
            <img 
              src={teamProfessional} 
              alt={`Professional rubbish clearance team serving ${townName}, Surrey & Sussex`} 
              className="h-64 w-full object-cover md:h-96" 
              loading="lazy" 
            />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6">Gutter Cleaning Services in {townName}</h2>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-success" />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="mb-6">Why Choose Us?</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="mb-2 text-lg font-semibold">Local Crews</h3>
                  <p className="text-muted-foreground">
                    We're based locally and know {townName} well. Fast response times and familiar with the area.
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold">Licensed & Insured</h3>
                  <p className="text-muted-foreground">
                    Fully insured for working at height with comprehensive public liability coverage. All work completed to the highest safety standards.
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold">Photo Quotes</h3>
                  <p className="text-muted-foreground">
                    Send us photos for an accurate fixed-price quote. No site visit needed, responses within 2 hours.
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold">Professional Finish</h3>
                  <p className="text-muted-foreground">
                    We clean gutters thoroughly, clear all debris, and test water flow. Professional service from start to finish.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <h2 className="mb-8 text-center">Our Gutter Services in {townName}</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="overflow-hidden rounded-lg">
              <img 
                src={houseClearance} 
                alt={`Residential gutter cleaning in ${townName}`} 
                className="h-48 w-full object-cover" 
                loading="lazy" 
              />
              <div className="bg-card p-4">
                <h3 className="mb-2 font-semibold">Residential Gutter Cleaning</h3>
                <p className="text-sm text-muted-foreground">
                  Professional gutter cleaning for all property types in {townName}
                </p>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg">
              <img 
                src={gardenClearance} 
                alt={`Commercial gutter maintenance in ${townName}`} 
                className="h-48 w-full object-cover" 
                loading="lazy" 
              />
              <div className="bg-card p-4">
                <h3 className="mb-2 font-semibold">Commercial Contracts</h3>
                <p className="text-sm text-muted-foreground">
                  Regular gutter maintenance contracts for businesses
                </p>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg">
              <img 
                src={recyclingCenter} 
                alt={`Professional gutter repairs in ${townName}`} 
                className="h-48 w-full object-cover" 
                loading="lazy" 
              />
              <div className="bg-card p-4">
                <h3 className="mb-2 font-semibold">Gutter Repairs</h3>
                <p className="text-sm text-muted-foreground">
                  Expert gutter repairs and leak fixing services
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary/50 py-16">
        <div className="container">
          <h2 className="mb-8 text-center">Our Simple Process</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                1
              </div>
              <h3 className="mb-2 text-xl font-semibold">Send Photos</h3>
              <p className="text-muted-foreground">
                Use our quote form or WhatsApp us photos of your gutters in {townName}
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                2
              </div>
              <h3 className="mb-2 text-xl font-semibold">Get a Quote</h3>
              <p className="text-muted-foreground">
                We'll provide a fixed price quote within 2 hours
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                3
              </div>
              <h3 className="mb-2 text-xl font-semibold">We Clean & Test</h3>
              <p className="text-muted-foreground">
                Our crew cleans your gutters thoroughly and tests water flow. Job done!
              </p>
            </div>
          </div>
        </div>
      </section>

      {data?.nearby && data.nearby.length > 0 && (
        <section className="py-16">
          <div className="container">
            <h2 className="mb-6">Nearby Areas We Cover</h2>
            <div className="flex flex-wrap gap-3">
              {data.nearby.map((area) => (
                <Button key={area.slug} variant="outline" asChild>
                  <Link to={`/gutter-cleaning/${area.slug}`}>{area.name}</Link>
                </Button>
              ))}
              <Button variant="outline" asChild>
                <Link to="/areas">View All Areas</Link>
              </Button>
            </div>
          </div>
        </section>
      )}

      <FAQSection faqs={faqs} />

      <section className="bg-gradient-to-br from-primary to-primary/80 py-16 text-primary-foreground">
        <div className="container text-center">
          <h2 className="mb-4 text-white">Ready to Clean Your {townName} Gutters?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-primary-foreground/90">
            Get a fast, free quote. Most quotes sent within 2 hours.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <QuoteDialog />
            <Button size="lg" variant="secondary" asChild>
              <a href="tel:01273569347">
                <Phone className="mr-2 h-5 w-5" />
                Call 01273 569347
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-white bg-white/10 text-white hover:bg-white hover:text-primary" asChild>
              <a href="https://wa.me/441273569347" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LocationPage;

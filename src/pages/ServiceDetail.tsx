import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, MessageCircle, CheckCircle2, MapPin } from "lucide-react";
import { SEOSchema } from "@/components/SEOSchema";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQSection } from "@/components/FAQSection";
import { QuoteDialog } from "@/components/QuoteDialog";
import servicesData from "@/data/servicesData";
import NotFound from "./NotFound";

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = servicesData.find(s => s.slug === slug);

  if (!service) {
    return <NotFound />;
  }

  return (
    <>
      <SEOSchema
        title={service.metaTitle}
        description={service.metaDescription}
        type="LocalBusiness"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: service.title, url: `/services/${service.slug}` }
        ]}
        faqs={service.faqs}
      />

      <div className="container py-12">
        <Breadcrumbs items={[
          { label: "Services", href: "/services" },
          { label: service.title }
        ]} />

        {/* Hero Section */}
        <div className="mb-12">
          <h1 className="mb-6 text-4xl font-bold md:text-5xl">{service.h1}</h1>
          <p className="text-lg text-muted-foreground md:text-xl">{service.intro}</p>
        </div>

        {/* CTA Buttons */}
        <div className="mb-16 flex flex-col gap-4 sm:flex-row">
          <QuoteDialog />
          <Button size="lg" variant="outline" asChild>
            <a href="tel:01273569347">
              <Phone className="mr-2 h-5 w-5" />
              Call 01273 569347
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="https://wa.me/441273569347?text=I%20need%20a%20quote%20for%20gutter%20cleaning" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp Quote
            </a>
          </Button>
        </div>

        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            {/* What's Included */}
            <section className="mb-12">
              <h2 className="mb-6 text-3xl font-bold">What's Included</h2>
              <Card>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    {service.whatIncluded.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </section>

            {/* Process */}
            <section className="mb-12">
              <h2 className="mb-6 text-3xl font-bold">{service.process.title}</h2>
              <div className="space-y-4">
                {service.process.steps.map((step, index) => (
                  <Card key={index}>
                    <CardContent className="flex gap-4 pt-6">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                        {index + 1}
                      </div>
                      <p className="flex-1">{step}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Benefits */}
            <section className="mb-12">
              <h2 className="mb-6 text-3xl font-bold">Benefits of Our Service</h2>
              <Card>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </section>

            {/* FAQs */}
            <section>
              <h2 className="mb-6 text-3xl font-bold">Frequently Asked Questions</h2>
              <FAQSection faqs={service.faqs} title="" />
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Quick Quote Card */}
              <Card className="bg-primary text-primary-foreground">
                <CardContent className="pt-6">
                  <h3 className="mb-4 text-xl font-bold">Get a Free Quote</h3>
                  <p className="mb-6 text-sm opacity-90">
                    WhatsApp us photos of your gutters for a fast quote or call for same-day service.
                  </p>
                  <div className="space-y-3">
                    <Button size="lg" variant="secondary" className="w-full" asChild>
                      <a href="tel:01273569347">
                        <Phone className="mr-2 h-5 w-5" />
                        01273 569347
                      </a>
                    </Button>
                    <Button size="lg" variant="outline" className="w-full border-primary-foreground bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                      <a href="https://wa.me/441273569347?text=I%20need%20a%20quote%20for%20gutter%20cleaning" target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="mr-2 h-5 w-5" />
                        WhatsApp
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Coverage Areas */}
              <Card>
                <CardContent className="pt-6">
                  <h3 className="mb-4 flex items-center gap-2 text-lg font-bold">
                    <MapPin className="h-5 w-5 text-primary" />
                    Areas We Cover
                  </h3>
                  <p className="mb-4 text-sm text-muted-foreground">
                    We provide this service across all our coverage areas:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Brighton", "Hove", "Crawley", "Horsham", "Guildford", "Worthing", "Eastbourne", "Redhill"].map((area) => (
                      <span key={area} className="rounded-full bg-muted px-3 py-1 text-sm">
                        {area}
                      </span>
                    ))}
                  </div>
                  <Button variant="outline" size="sm" className="mt-4 w-full" asChild>
                    <Link to="/areas">View All Areas</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Trust Signals */}
              <Card>
                <CardContent className="pt-6">
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>Fully Insured - £5M Cover</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>Same-Day Service Available</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>Professional Equipment</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>Free Quotes & Advice</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-16 rounded-lg bg-primary/5 p-8 text-center md:p-12">
          <h2 className="mb-4 text-2xl font-bold md:text-3xl">
            Ready to Book This Service?
          </h2>
          <p className="mb-6 text-muted-foreground">
            Call now for same-day service or WhatsApp photos for a fast, free quote.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <QuoteDialog />
            <Button size="lg" variant="outline" asChild>
              <a href="tel:01273569347">
                <Phone className="mr-2 h-5 w-5" />
                Call 01273 569347
              </a>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetail;

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, MessageCircle, Droplets, CheckCircle2, Wrench, Home as HomeIcon, Building2, Calendar, KeyRound, Sun, ShieldCheck, Camera, Leaf, ArrowUpToLine } from "lucide-react";
import { SEOSchema } from "@/components/SEOSchema";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { QuoteDialog } from "@/components/QuoteDialog";
import servicesData from "@/data/servicesData";
import gutterCleaningImage from "@/assets/gutter-cleaning-on-ladder.webp";
import blockedGuttersImage from "@/assets/overflowing-blocked-gutter.webp";
import downpipeImage from "@/assets/leaf-filled-gutter.webp";
import repairsImage from "@/assets/commercial-gutter-cleaning.webp";
import fasciaImage from "@/assets/fascia-soffit-washing.webp";
import maintenanceImage from "@/assets/gutter-cleaning-team.webp";
import scaffoldImage from "@/assets/scaffold-tower-gutter-access.webp";
import equipmentImage from "@/assets/gutter-cleaning-equipment.webp";
import heroLadderImage from "@/assets/gutter-cleaner-on-ladder.webp";

const Services = () => {
  const serviceImages: Record<string, string> = {
    "gutter-cleaning-near-me": gutterCleaningImage,
    "blocked-gutters-gutter-unblocking": blockedGuttersImage,
    "downpipe-unblocking": downpipeImage,
    "gutter-repairs": repairsImage,
    "fascia-soffit-cleaning": fasciaImage,
    "gutter-maintenance-plans": maintenanceImage,
    "commercial-gutter-cleaning": repairsImage,
    "landlord-letting-agent-gutter-cleaning": maintenanceImage,
    "conservatory-gutter-cleaning": fasciaImage,
    "gutter-guard-installation": downpipeImage,
    "gutter-camera-inspection": equipmentImage,
    "roof-moss-removal": heroLadderImage,
    "high-level-gutter-cleaning": scaffoldImage,
  };

  const serviceIcons: Record<string, typeof Droplets> = {
    "gutter-cleaning-near-me": Droplets,
    "blocked-gutters-gutter-unblocking": CheckCircle2,
    "downpipe-unblocking": Wrench,
    "gutter-repairs": HomeIcon,
    "fascia-soffit-cleaning": Building2,
    "gutter-maintenance-plans": Calendar,
    "commercial-gutter-cleaning": Building2,
    "landlord-letting-agent-gutter-cleaning": KeyRound,
    "conservatory-gutter-cleaning": Sun,
    "gutter-guard-installation": ShieldCheck,
    "gutter-camera-inspection": Camera,
    "roof-moss-removal": Leaf,
    "high-level-gutter-cleaning": ArrowUpToLine,
  };

  const groups: Array<{ key: "core" | "specialist" | "customer"; title: string; intro: string }> = [
    { key: "core", title: "Gutter Cleaning, Unblocking & Repairs", intro: "Our everyday gutter services for homes across Sussex and Surrey." },
    { key: "specialist", title: "Specialist Gutter & Roofline Services", intro: "Conservatories, gutter guards, camera inspections, roof moss and high-level access." },
    { key: "customer", title: "Commercial, Landlord & Letting Agent Services", intro: "Gutter maintenance for businesses, managing agents, landlords and letting agents." },
  ];

  return (
    <>
      <SEOSchema
        title="Gutter Cleaning Services | Cleaning, Unblocking & Repairs | Sussex & Surrey"
        description="Gutter cleaning, unblocking, repairs, conservatory gutters, gutter guards, roof moss removal, high-level and commercial gutter cleaning across Brighton, Sussex & Surrey. Free photo quotes."
        type="LocalBusiness"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" }
        ]}
      />

      <div className="container py-12">
        <Breadcrumbs items={[{ label: "Services" }]} />

        <div className="mb-12 text-center">
          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Professional Gutter Cleaning & Maintenance Services
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground md:text-xl">
            Comprehensive gutter cleaning, blocked gutter clearance, and gutter repair services across Brighton, Hove, Sussex and Surrey. 
            Protect your property from water damage, damp and expensive repairs with our fully insured, professional service.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="mb-16 flex flex-col gap-4 sm:flex-row sm:justify-center">
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

        {/* Services, grouped */}
        {groups.map((group) => (
          <section key={group.key} className="mb-16">
            <h2 className="mb-2 text-2xl font-bold md:text-3xl">{group.title}</h2>
            <p className="mb-8 text-muted-foreground">{group.intro}</p>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {servicesData.filter((s) => s.category === group.key).map((service) => {
                const Icon = serviceIcons[service.slug] || Droplets;
                const image = serviceImages[service.slug] || gutterCleaningImage;
                return (
                  <Card key={service.slug} className="group overflow-hidden transition-all duration-300 hover:shadow-lg">
                    <div className="overflow-hidden">
                      <img
                        src={image}
                        alt={service.title}
                        className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        width={1280}
                        height={720}
                        loading="lazy"
                      />
                    </div>
                    <CardHeader>
                      <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-semibold leading-none tracking-tight">{service.title}</h3>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4 text-sm text-muted-foreground line-clamp-3">
                        {service.shortDescription || service.intro}
                      </p>
                      <Button variant="outline" size="sm" asChild className="w-full group-hover:bg-primary group-hover:text-primary-foreground">
                        <Link to={`/services/${service.slug}`}>
                          View {service.title} →
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </section>
        ))}

        {/* Why Choose Our Services */}
        <section className="mt-20">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Why Choose Our Gutter Services?
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Professional gutter cleaning and maintenance you can trust across Brighton, Hove, Sussex and Surrey.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Fully Insured",
                description: "£5 million public liability insurance for your peace of mind."
              },
              {
                title: "Professional Equipment",
                description: "Industry-leading SkyVac gutter vacuum systems for safe, thorough cleaning."
              },
              {
                title: "Experienced Team",
                description: "Trained operatives with years of experience in gutter cleaning and repairs."
              },
              {
                title: "Same-Day Service",
                description: "Emergency call-outs available 7 days a week across all our coverage areas."
              },
              {
                title: "Free Quotes",
                description: "No-obligation quotes provided. WhatsApp photos for instant estimates."
              },
              {
                title: "Before & After Photos",
                description: "Photographic evidence of work completed provided on request."
              },
              {
                title: "Quality Workmanship",
                description: "All repairs and maintenance guaranteed. Professional service every time."
              },
              {
                title: "Local Service",
                description: "Fast response times across Brighton, Hove, Sussex and Surrey."
              }
            ].map((item, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Coverage Areas */}
        <section className="mt-20">
          <div className="mb-8 text-center">
            <h2 className="mb-4 text-3xl font-bold">Areas We Cover</h2>
            <p className="text-lg text-muted-foreground">
              Professional gutter services across Sussex and Surrey
            </p>
          </div>

          <Card>
            <CardContent className="pt-6">
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
                {[
                  "Brighton", "Hove", "Crawley", "Horsham",
                  "Guildford", "Worthing", "Eastbourne", "Woking",
                  "Redhill", "Reigate", "Epsom", "Leatherhead",
                  "Dorking", "Croydon", "Portslade", "Peacehaven"
                ].map((area) => (
                  <div key={area} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span className="text-sm">{area}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center">
                <Button variant="outline" asChild>
                  <Link to="/areas">View All Coverage Areas →</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Final CTA */}
        <div className="mt-16 rounded-lg bg-primary py-12 text-center text-primary-foreground md:py-16">
          <div className="mx-auto max-w-2xl px-6">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Ready to Book Your Gutter Service?
            </h2>
            <p className="mb-8 text-lg opacity-90">
              Get a free quote today. Same-day service available across Brighton, Hove, Sussex and Surrey.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">Get Free Quote</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <a href="tel:01273569347">
                  <Phone className="mr-2 h-5 w-5" />
                  Call 01273 569347
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;

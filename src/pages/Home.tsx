import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, MessageCircle, Shield, Clock, Award, Users, CheckCircle2, Star, Droplets, Home as HomeIcon, Building2, Wrench } from "lucide-react";
import { SEOSchema } from "@/components/SEOSchema";
import { QuoteDialog } from "@/components/QuoteDialog";
import { FAQSection } from "@/components/FAQSection";
import heroImage from "@/assets/gutter-cleaner-on-ladder.webp";
import teamImage from "@/assets/gutter-cleaning-team.webp";
import gutterCleaningImage from "@/assets/gutter-cleaning-on-ladder.webp";
import blockedGuttersImage from "@/assets/overflowing-blocked-gutter.webp";
import repairsImage from "@/assets/leaf-filled-gutter.webp";

const Home = () => {
  const services = [
    {
      icon: Droplets,
      title: "Gutter Cleaning & Clearance",
      description: "Professional gutter vacuum cleaning to remove leaves, moss and debris. Prevent damp, leaks and water damage to your property.",
      image: gutterCleaningImage,
      link: "/services/gutter-cleaning-near-me"
    },
    {
      icon: CheckCircle2,
      title: "Blocked Gutters & Unblocking",
      description: "Emergency blocked gutter clearance service. Fast response to overflowing gutters across Brighton, Hove, Sussex and Surrey.",
      image: blockedGuttersImage,
      link: "/services/blocked-gutters-gutter-unblocking"
    },
    {
      icon: Wrench,
      title: "Gutter Repairs & Maintenance",
      description: "Fix leaking gutters, sagging sections and damaged downpipes. Annual maintenance plans available for peace of mind.",
      image: repairsImage,
      link: "/services/gutter-repairs"
    },
  ];

  const whyChooseUs = [
    {
      icon: Shield,
      title: "Fully Insured",
      description: "£5 million public liability insurance. All operatives trained in safe working practices."
    },
    {
      icon: Clock,
      title: "Same-Day Service",
      description: "Emergency call-outs available 7 days a week. Fast response across Brighton, Hove, Sussex and Surrey."
    },
    {
      icon: Award,
      title: "Professional Equipment",
      description: "Industry-leading SkyVac gutter vacuum systems. Safe, thorough cleaning without ladders."
    },
    {
      icon: Star,
      title: "5★ Rated Service",
      description: "Trusted by hundreds of homeowners and businesses. Before and after photos provided."
    },
  ];

  const topAreas = [
    { name: "Brighton", slug: "brighton", description: "Professional gutter cleaning in Brighton and Kemptown. Same-day service available." },
    { name: "Hove", slug: "hove", description: "Expert gutter clearance in Hove. Specialist service for period properties." },
    { name: "Crawley", slug: "crawley", description: "Gutter cleaning across all Crawley areas. Residential and commercial service." },
    { name: "Horsham", slug: "horsham", description: "Blocked gutter specialists serving Horsham and surrounding villages." },
    { name: "Guildford", slug: "guildford", description: "Surrey gutter cleaning service. Fast, reliable and fully insured." },
    { name: "Worthing", slug: "worthing", description: "Coastal property gutter specialists. Prevent water damage and damp." },
  ];

  const faqs = [
    {
      question: "How much does gutter cleaning cost?",
      answer: "Gutter cleaning starts from £80 for a small terraced house or flat, from £120 for a typical semi-detached and from £180 for a large detached property. The final price depends on gutter length, height, access and how blocked the gutters are. Send photos for a free fixed-price quote, or call 01273 569347."
    },
    {
      question: "How often should I get my gutters cleaned?",
      answer: "We recommend having your gutters cleaned at least twice a year—once in late autumn after leaves have fallen, and again in spring. Properties surrounded by trees may need more frequent cleaning every 3-4 months to prevent blockages."
    },
    {
      question: "Do you use ladders to clean gutters?",
      answer: "We primarily use professional SkyVac gutter vacuum systems that allow us to clean gutters safely from ground level. This is safer, faster, and causes less disruption. For particularly stubborn blockages or repairs, we may use ladders where necessary."
    },
    {
      question: "Can you clean gutters above conservatories?",
      answer: "Yes, our gutter vacuum equipment is ideal for cleaning gutters above conservatories, extensions and other hard-to-reach areas without the risk of damaging fragile roofs."
    },
    {
      question: "Are you insured?",
      answer: "Yes, we are fully insured with £5 million public liability insurance. All our operatives are trained and experienced in safe gutter cleaning practices."
    },
    {
      question: "What areas do you cover?",
      answer: "We cover Brighton, Hove, Portslade, Peacehaven, Worthing, Crawley, Horsham, Eastbourne, Guildford, Woking, Redhill, Reigate, Epsom, Leatherhead, Dorking, Croydon and surrounding areas across Sussex and Surrey."
    },
  ];

  return (
    <>
      <SEOSchema
        title="Gutter Cleaning Near Me | Brighton, Sussex & Surrey Gutter Cleaners"
        description="Professional gutter cleaning near you across Brighton, Sussex & Surrey. Blocked gutters cleared fast. Fully insured. Free quotes – call today."
        type="LocalBusiness"
        breadcrumbs={[
          { name: "Home", url: "/" }
        ]}
        faqs={faqs}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background py-20 md:py-32">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col justify-center">
              <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                Gutter Cleaning Near Me <br />
                <span className="text-primary">in Brighton, Sussex & Surrey</span>
              </h1>
              <p className="mb-8 text-lg text-muted-foreground md:text-xl">
                Professional gutter cleaning and blocked gutter clearance across Brighton, Hove, Sussex and Surrey. 
                Prevent water damage, damp and leaks with our fully insured, same-day service.
              </p>
              
              {/* Trust Signals */}
              <div className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-4">
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">Fully Insured</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">Same-Day Service</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">5★ Rated</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">Local Team</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col gap-4 sm:flex-row">
                <QuoteDialog />
                <Button variant="outline" size="lg" asChild>
                  <a href="tel:01273569347">
                    <Phone className="mr-2 h-5 w-5" />
                    Call 01273 569347
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="https://wa.me/441273569347?text=I%20need%20a%20quote%20for%20gutter%20cleaning" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    WhatsApp Quote
                  </a>
                </Button>
              </div>
            </div>

            <div className="relative">
              <img
                src={heroImage}
                alt="Gutter cleaner clearing a house gutter in Sussex"
                className="rounded-lg shadow-2xl"
                width={1280}
                height={720}
                loading="eager"
                {...{ fetchpriority: "high" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Professional Gutter Cleaning & Clearance Services
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Blocked or overflowing gutters cause serious water damage to your property. Our gutter cleaning service protects your home from damp, leaks and expensive repairs.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Card key={service.title} className="group overflow-hidden transition-all duration-300 hover:shadow-lg">
                <div className="overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <CardHeader>
                  <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4 text-base">{service.description}</CardDescription>
                  <Button variant="outline" size="sm" asChild className="group-hover:bg-primary group-hover:text-primary-foreground">
                    <Link to={service.link}>
                      Learn More →
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" asChild>
              <Link to="/services">View All Services</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/pricing">See Gutter Cleaning Prices</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Why Choose Gutter Cleanings Near Me?
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Professional gutter cleaning you can trust. Fully insured, experienced operatives, and same-day service across Brighton, Hove, Sussex and Surrey.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((item) => (
              <Card key={item.title}>
                <CardHeader>
                  <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Image Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <img
                src={teamImage}
                alt="Two gutter cleaners inspecting and clearing a house gutter"
                width={1280}
                height={725}
                className="rounded-lg shadow-xl"
                loading="lazy"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                Professional Equipment & Expert Service
              </h2>
              <p className="mb-6 text-lg text-muted-foreground">
                We use industry-leading SkyVac gutter vacuum systems that allow us to clean gutters safely from ground level, reaching up to three storeys without ladders. This means:
              </p>
              <ul className="space-y-3">
                {[
                  "Safer for our operatives and your property",
                  "No damage to gardens or flower beds",
                  "No need to access neighbouring properties",
                  "Faster, more thorough cleaning",
                  "Perfect for conservatories and extensions",
                  "Before and after photos provided"
                ].map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Areas We Cover */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Gutter Cleaning Across Sussex & Surrey
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Local gutter cleaning service across Brighton, Hove and surrounding areas. Fast response times and same-day service available.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {topAreas.map((area) => (
              <Card key={area.slug} className="group transition-all duration-300 hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <HomeIcon className="h-5 w-5 text-primary" />
                    Gutter Cleaning {area.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-sm text-muted-foreground">{area.description}</p>
                  <Button variant="outline" size="sm" asChild className="w-full group-hover:bg-primary group-hover:text-primary-foreground">
                    <Link to={`/gutter-cleaning/${area.slug}`}>
                      View {area.name} Service →
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="mb-4 text-muted-foreground">
              We also cover: Portslade, Peacehaven, Eastbourne, Woking, Redhill, Reigate, Epsom, Leatherhead, Dorking, Croydon and more
            </p>
            <Button size="lg" asChild>
              <Link to="/areas">View All Coverage Areas</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection faqs={faqs} />

      {/* Final CTA */}
      <section className="bg-primary py-16 text-primary-foreground md:py-20">
        <div className="container text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Get Your Free Gutter Cleaning Quote Today
          </h2>
          <p className="mb-8 text-lg opacity-90 md:text-xl">
            WhatsApp us photos of your gutters for a fast quote, or call for same-day service across Brighton, Hove, Sussex and Surrey.
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
            <Button size="lg" variant="outline" className="border-primary-foreground bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <a href="https://wa.me/441273569347?text=I%20need%20a%20quote%20for%20gutter%20cleaning" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp Us
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

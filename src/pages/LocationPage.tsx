import { useParams, Link } from "react-router-dom";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SEOSchema } from "@/components/SEOSchema";
import { FAQSection } from "@/components/FAQSection";
import { QuoteDialog } from "@/components/QuoteDialog";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, CheckCircle, MapPin, ArrowRight } from "lucide-react";
import { locationData } from "@/data/locationData";
import servicesData from "@/data/servicesData";
import { brandData } from "@/data/brandData";
import { groupForSlug } from "@/data/areaGroups";
import NotFound from "./NotFound";
import gutterTeam from "@/assets/gutter-cleaning-team.webp";
import ladderClean from "@/assets/gutter-cleaning-on-ladder.webp";
import commercialGutters from "@/assets/commercial-gutter-cleaning.webp";
import leafFilledGutter from "@/assets/leaf-filled-gutter.webp";

const listToText = (items: string[]) =>
  items.length <= 1 ? items.join("") : `${items.slice(0, -1).join(", ")} and ${items[items.length - 1]}`;

const LocationPage = () => {
  const { location } = useParams();
  const data = location ? locationData[location] : undefined;

  // Unknown towns must not render as indexable "This Area" pages.
  if (!data || !location) {
    return <NotFound />;
  }

  const townName = data.name;
  const landmarks = data.localInfo.landmarks;
  const roads = data.localInfo.roads;
  const nearby = data.nearby.filter((n) => locationData[n.slug]);
  const group = groupForSlug(location);
  const groupTowns = (group?.areas || []).filter(
    (a) => a.slug !== location && locationData[a.slug] && !nearby.some((n) => n.slug === a.slug),
  );

  const services = [
    { label: "Residential gutter cleaning (all property types)", href: "/services/gutter-cleaning-near-me" },
    { label: "Blocked gutter clearance", href: "/services/blocked-gutters-gutter-unblocking" },
    { label: "Downpipe unblocking and flushing", href: "/services/downpipe-unblocking" },
    { label: "Gutter repairs and leak fixing", href: "/services/gutter-repairs" },
    { label: "Fascia and soffit cleaning", href: "/services/fascia-soffit-cleaning" },
    { label: "Conservatory gutter & roof cleaning", href: "/services/conservatory-gutter-cleaning" },
    { label: "Gutter guard installation", href: "/services/gutter-guard-installation" },
    { label: "Roof moss removal", href: "/services/roof-moss-removal" },
    { label: "Gutter camera inspections", href: "/services/gutter-camera-inspection" },
    { label: "High-level gutter cleaning (cherry picker)", href: "/services/high-level-gutter-cleaning" },
    { label: "Commercial gutter cleaning", href: "/services/commercial-gutter-cleaning" },
    { label: "Landlord & letting agent gutter cleaning", href: "/services/landlord-letting-agent-gutter-cleaning" },
    { label: "Twice-yearly maintenance plans", href: "/services/gutter-maintenance-plans" },
  ];

  const faqs = [
    {
      question: `Do you offer same-day gutter cleaning in ${townName}?`,
      answer: `Same-day and next-day appointments are available in ${townName}, subject to availability and weather. Call ${brandData.phone} or WhatsApp photos of your gutters and we'll confirm the earliest slot.`,
    },
    {
      question: `How much does gutter cleaning cost in ${townName}?`,
      answer: `Gutter cleaning starts from £${brandData.priceFrom} for a small property. The price depends on property size, gutter length, height, access and how blocked the gutters are. Send photos for a fixed-price quote – see our pricing page for typical prices.`,
    },
    {
      question: "Can you clean gutters on taller buildings?",
      answer: `Our gutter vacuum system cleans from the ground up to three storeys, so most ${townName} houses need no ladders. For taller buildings and deep box gutters we arrange cherry picker access – send photos and we'll confirm the right method.`,
    },
    {
      question: "How often should gutters be cleaned?",
      answer: "At least twice a year – typically in late autumn after the leaves have fallen and again in spring. Properties near trees may need cleaning every 3–4 months.",
    },
    {
      question: `Are you insured for gutter cleaning work in ${townName}?`,
      answer: "Yes. We carry public liability insurance covering all gutter cleaning and repair work, and certificates are available on request.",
    },
  ];

  return (
    <div>
      <SEOSchema
        title={data.metaTitle}
        description={data.metaDescription}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Areas We Cover", url: "/areas" },
          { name: townName, url: `/gutter-cleaning/${location}` },
        ]}
        faqs={faqs}
        faqSchema={false}
        service={{
          name: `Gutter cleaning in ${townName}`,
          serviceType: "Gutter cleaning",
          description: data.metaDescription,
          areaName: townName,
        }}
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
            From {landmarks[0]} to the residential streets around it, we help {townName} homeowners, landlords and businesses
            protect their properties from overflowing gutters, damp and water damage. Gutter cleaning in {townName} starts
            from £{brandData.priceFrom}, we're fully insured, and same-day appointments are available when you need us.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <QuoteDialog />
            <Button size="lg" variant="outline" asChild>
              <a href={brandData.phoneLink}>
                <Phone className="mr-2 h-5 w-5" />
                Call {brandData.phone}
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6">Gutter Services in {townName}</h2>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.href} className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-success" />
                    <Link to={service.href} className="hover:text-primary hover:underline">
                      {service.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-muted-foreground">
                Not sure what you need? See our{" "}
                <Link to="/pricing" className="font-medium text-primary hover:underline">gutter cleaning prices</Link>{" "}
                or browse <Link to="/services" className="font-medium text-primary hover:underline">all services</Link>.
              </p>
            </div>

            <div>
              <h2 className="mb-6">Why {townName} Customers Choose Us</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="mb-2 text-lg font-semibold">Covering All of {townName}</h3>
                  <p className="text-muted-foreground">
                    We cover the whole of {townName} and nearby {listToText(nearby.map((n) => n.name))}. Same-day and
                    next-day slots are available for urgent overflowing gutters, subject to availability.
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold">Fully Insured</h3>
                  <p className="text-muted-foreground">
                    Public liability insurance covers all gutter cleaning and repair work. Certificates available on request.
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold">Photo Quotes</h3>
                  <p className="text-muted-foreground">
                    Send us photos for a fixed-price quote – no site visit needed in most cases.
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold">Cleaned, Flushed & Tested</h3>
                  <p className="text-muted-foreground">
                    We clear the gutters, flush the downpipes, test the water flow and send before-and-after photos on request.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/30 py-16">
        <div className="container">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="overflow-hidden rounded-lg">
              <img
                src={gutterTeam}
                alt={`Gutter cleaning team at work on a house in ${townName}`}
                className="h-64 w-full object-cover md:h-80"
                width={1280}
                height={720}
                loading="lazy"
              />
            </div>
            <div>
              <h2 className="mb-4">Areas of {townName} We Cover</h2>
              <p className="mb-4 text-muted-foreground">
                We clean gutters on homes and businesses throughout {townName}, including properties around{" "}
                {listToText(landmarks)}.
              </p>
              <p className="mb-6 text-muted-foreground">
                That includes homes on and around {listToText(roads)}, plus the surrounding residential roads and outlying
                villages. If you're unsure whether we reach you, send your postcode and we'll confirm.
              </p>
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                <span>Also serving nearby {listToText(nearby.map((n) => n.name))}.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <h2 className="mb-8 text-center">Popular Gutter Services in {townName}</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { img: ladderClean, alt: `Residential gutter cleaning in ${townName}`, title: "Residential Gutter Cleaning", text: `Gutter vacuum cleaning for houses, bungalows and flats in ${townName}.`, href: "/services/gutter-cleaning-near-me" },
              { img: leafFilledGutter, alt: `Blocked gutter full of leaves in ${townName}`, title: "Blocked Gutter Clearance", text: "Fast clearance of gutters overflowing with leaves, moss and silt.", href: "/services/blocked-gutters-gutter-unblocking" },
              { img: commercialGutters, alt: `Commercial gutter cleaning in ${townName}`, title: "Commercial Gutter Cleaning", text: `Offices, shops, schools and blocks of flats in ${townName}, with photo reports.`, href: "/services/commercial-gutter-cleaning" },
            ].map((card) => (
              <Link key={card.href} to={card.href} className="group overflow-hidden rounded-lg border bg-card transition-shadow hover:shadow-lg">
                <img src={card.img} alt={card.alt} className="h-48 w-full object-cover" width={1280} height={720} loading="lazy" />
                <div className="p-4">
                  <h3 className="mb-2 text-lg font-semibold group-hover:text-primary">{card.title}</h3>
                  <p className="text-sm text-muted-foreground">{card.text}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/50 py-16">
        <div className="container">
          <h2 className="mb-8 text-center">How to Book in {townName}</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { n: 1, title: "Send Photos", text: `Use our quote form or WhatsApp photos of your gutters in ${townName}.` },
              { n: 2, title: "Get a Fixed Quote", text: "We reply with a fixed price, usually within 2 hours during opening hours." },
              { n: 3, title: "We Clean & Test", text: "We clear the gutters, flush the downpipes and test the water flow." },
            ].map((step) => (
              <div key={step.n} className="text-center">
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                  {step.n}
                </div>
                <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
                <p className="text-muted-foreground">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {nearby.length > 0 && (
        <section className="py-16">
          <div className="container">
            <h2 className="mb-6">Gutter Cleaning Near {townName}</h2>
            <div className="flex flex-wrap gap-3">
              {nearby.map((area) => (
                <Button key={area.slug} variant="outline" asChild>
                  <Link to={`/gutter-cleaning/${area.slug}`}>Gutter cleaning {area.name}</Link>
                </Button>
              ))}
              <Button variant="outline" asChild>
                <Link to="/areas">
                  All areas we cover <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      )}

      {group && groupTowns.length > 0 && (
        <section className="pb-4">
          <div className="container">
            <h2 className="mb-4 text-2xl">Other Towns We Cover: {group.title}</h2>
            <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
              {groupTowns.map((a) => (
                <li key={a.slug}>
                  <Link to={`/gutter-cleaning/${a.slug}`} className="text-primary hover:underline">
                    {a.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <FAQSection faqs={faqs} title={`Gutter Cleaning in ${townName}: FAQs`} />

      <section className="bg-gradient-to-br from-primary to-primary/80 py-16 text-primary-foreground">
        <div className="container text-center">
          <h2 className="mb-4 text-white">Ready to Clean Your {townName} Gutters?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-primary-foreground/90">
            Get a fast, free quote. Most quotes are sent within 2 hours during opening hours.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <QuoteDialog />
            <Button size="lg" variant="secondary" asChild>
              <a href={brandData.phoneLink}>
                <Phone className="mr-2 h-5 w-5" />
                Call {brandData.phone}
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-white bg-white/10 text-white hover:bg-white hover:text-primary" asChild>
              <a href={brandData.whatsappQuoteLink} target="_blank" rel="noopener noreferrer">
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

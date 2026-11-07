import { Link } from "react-router-dom";
import { SEOSchema } from "@/components/SEOSchema";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FileText, MapPin, Wrench, FileCheck } from "lucide-react";
import { locationData } from "@/data/locationData";

const Sitemap = () => {
  const sections = [
    {
      title: "Main Pages",
      icon: FileText,
      links: [
        { name: "Home", href: "/" },
        { name: "Services", href: "/services" },
        { name: "Pricing", href: "/pricing" },
        { name: "Areas We Cover", href: "/areas" },
        { name: "FAQ", href: "/faq" },
        { name: "About Us", href: "/about" },
        { name: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Services",
      icon: Wrench,
      links: [
        { name: "Gutter Cleaning Near Me", href: "/services/gutter-cleaning-near-me" },
        { name: "Blocked Gutters & Unblocking", href: "/services/blocked-gutters-gutter-unblocking" },
        { name: "Downpipe Unblocking", href: "/services/downpipe-unblocking" },
        { name: "Gutter Repairs", href: "/services/gutter-repairs" },
        { name: "Fascia & Soffit Cleaning", href: "/services/fascia-soffit-cleaning" },
        { name: "Gutter Maintenance Plans", href: "/services/gutter-maintenance-plans" },
      ],
    },
    {
      title: "Legal",
      icon: FileCheck,
      links: [
        { name: "Terms & Conditions", href: "/terms" },
        { name: "Privacy Policy", href: "/privacy" },
      ],
    },
    {
      title: "Service Areas",
      icon: MapPin,
      links: Object.entries(locationData)
        .map(([slug, l]) => ({ name: l.name, href: `/gutter-cleaning/${slug}` }))
        .sort((a, b) => a.name.localeCompare(b.name)),
    },
  ];

  return (
    <>
      <SEOSchema
        title="Sitemap | Gutter Cleanings Near Me | All Pages"
        description="Browse our complete sitemap to find gutter cleaning services, pricing information, and areas we cover across Brighton, Sussex & Surrey."
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Sitemap", url: "/sitemap" }
        ]}
      />

      <div className="container py-8">
        <Breadcrumbs items={[{ label: "Sitemap" }]} />

        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">Sitemap</h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Find all pages and services across our website
          </p>
        </div>

        <div className="mx-auto max-w-5xl space-y-8">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <div key={section.title} className="rounded-lg border bg-card p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-semibold">{section.title}</h2>
                </div>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {section.links.map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      className="rounded-md border bg-background p-3 text-sm transition-colors hover:border-primary hover:bg-primary/5"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 rounded-lg border bg-muted/30 p-6 text-center">
          <h3 className="mb-2 text-lg font-semibold">XML Sitemap</h3>
          <p className="mb-4 text-sm text-muted-foreground">
            For search engines, our XML sitemap is available at:
          </p>
          <a
            href="/sitemap.xml"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FileText className="h-4 w-4" />
            guttercleaningsnearme.co.uk/sitemap.xml
          </a>
        </div>
      </div>
    </>
  );
};

export default Sitemap;

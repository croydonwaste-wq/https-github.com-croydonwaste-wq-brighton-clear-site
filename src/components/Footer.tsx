import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const Footer = () => {
  const serviceLinks = [
    { name: "Gutter Cleaning Near Me", href: "/services/gutter-cleaning-near-me" },
    { name: "Blocked Gutters", href: "/services/blocked-gutters-gutter-unblocking" },
    { name: "Downpipe Unblocking", href: "/services/downpipe-unblocking" },
    { name: "Gutter Repairs", href: "/services/gutter-repairs" },
    { name: "Fascia & Soffit Cleaning", href: "/services/fascia-soffit-cleaning" },
    { name: "Maintenance Plans", href: "/services/gutter-maintenance-plans" },
  ];

  const areaLinks = [
    { name: "Brighton", href: "/gutter-cleaning/brighton" },
    { name: "Hove", href: "/gutter-cleaning/hove" },
    { name: "Crawley", href: "/gutter-cleaning/crawley" },
    { name: "Horsham", href: "/gutter-cleaning/horsham" },
    { name: "Guildford", href: "/gutter-cleaning/guildford" },
    { name: "Worthing", href: "/gutter-cleaning/worthing" },
    { name: "Eastbourne", href: "/gutter-cleaning/eastbourne" },
    { name: "View All Areas", href: "/areas" },
  ];

  const quickLinks = [
    { name: "Gutter Cleaning Prices", href: "/pricing" },
    { name: "About Us", href: "/about" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
    { name: "Terms & Conditions", href: "/terms" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Sitemap", href: "/sitemap" },
  ];

  return (
    <footer className="border-t bg-muted/30">
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <div className="mb-4 flex items-center space-x-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <span className="text-xs font-bold tracking-tight text-primary-foreground">GCNM</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold leading-tight">Gutter Cleanings Near Me</span>
                <span className="text-xs text-muted-foreground">Sussex & Surrey</span>
              </div>
            </div>
            <p className="mb-4 text-sm text-muted-foreground">
              Professional gutter cleaning and blocked gutter clearance across Brighton, Hove, Sussex and Surrey. Fast, reliable service.
            </p>
            <div className="space-y-2 text-sm">
              <a href="tel:01273569347" className="flex items-center gap-2 text-foreground hover:text-primary">
                <Phone className="h-4 w-4" />
                01273 569347
              </a>
              <a href="mailto:info@guttercleaningsnearme.co.uk" className="flex items-center gap-2 text-foreground hover:text-primary">
                <Mail className="h-4 w-4" />
                info@guttercleaningsnearme.co.uk
              </a>
              <div className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0" />
                <span>Serving Brighton, Hove, Sussex & Surrey</span>
              </div>
              <div className="flex items-start gap-2 text-muted-foreground">
                <Clock className="mt-0.5 h-4 w-4 flex-shrink-0" />
                <span>7 Days a Week</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Our Services</h3>
            <ul className="space-y-2 text-sm">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-muted-foreground hover:text-primary">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Areas We Cover</h3>
            <ul className="space-y-2 text-sm">
              {areaLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-muted-foreground hover:text-primary">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-muted-foreground hover:text-primary">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Gutter Cleanings Near Me. All rights reserved.</p>
          <p className="mt-2">Fully Insured | £5M Public Liability Insurance</p>
          <div className="h-16 md:hidden" aria-hidden="true" />
        </div>
      </div>
    </footer>
  );
};

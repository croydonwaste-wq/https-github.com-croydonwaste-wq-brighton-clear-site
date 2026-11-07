import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X, MessageCircle } from "lucide-react";
import { QuoteDialog } from "@/components/QuoteDialog";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Prices", href: "/pricing" },
    { name: "Areas We Cover", href: "/areas" },
    { name: "FAQ", href: "/faq" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2" aria-label="Gutter Cleanings Near Me – home">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
            <span className="text-sm font-bold tracking-tight text-primary-foreground">GCNM</span>
          </div>
          <div className="hidden flex-col md:flex">
            <span className="text-lg font-bold leading-tight">Gutter Cleanings Near Me</span>
            <span className="text-sm text-muted-foreground">Sussex & Surrey</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-5 lg:gap-6 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive(item.href) ? "text-primary" : "text-foreground/80"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden items-center gap-3 md:flex">
          <Button variant="outline" size="sm" asChild>
            <a href="tel:01273569347">
              <Phone className="mr-2 h-4 w-4" />
              01273 569347
            </a>
          </Button>
          <QuoteDialog />
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t bg-background md:hidden">
          <nav className="container flex flex-col space-y-4 py-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-base font-medium transition-colors ${
                  isActive(item.href) ? "text-primary" : "text-foreground/80"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex flex-col gap-3 pt-4">
              <Button variant="outline" asChild>
                <a href="tel:01273569347">
                  <Phone className="mr-2 h-4 w-4" />
                  Call 01273 569347
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://wa.me/441273569347" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  WhatsApp Us
                </a>
              </Button>
              <QuoteDialog />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

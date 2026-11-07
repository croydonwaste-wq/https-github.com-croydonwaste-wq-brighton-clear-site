import { Phone, MessageCircle, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { brandData } from "@/data/brandData";

/** Always-visible contact bar on small screens: call, WhatsApp, quote. */
export const MobileContactBar = () => (
  <nav
    aria-label="Quick contact"
    className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t bg-background/95 shadow-[0_-4px_12px_rgba(0,0,0,0.08)] backdrop-blur md:hidden"
  >
    <a href={brandData.phoneLink} className="flex flex-col items-center gap-1 py-2.5 text-xs font-semibold text-primary">
      <Phone className="h-5 w-5" aria-hidden="true" />
      Call
    </a>
    <a
      href={brandData.whatsappQuoteLink}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center gap-1 border-x py-2.5 text-xs font-semibold text-primary"
    >
      <MessageCircle className="h-5 w-5" aria-hidden="true" />
      WhatsApp
    </a>
    <Link to="/contact" className="flex flex-col items-center gap-1 bg-primary py-2.5 text-xs font-semibold text-primary-foreground">
      <FileText className="h-5 w-5" aria-hidden="true" />
      Free Quote
    </Link>
  </nav>
);

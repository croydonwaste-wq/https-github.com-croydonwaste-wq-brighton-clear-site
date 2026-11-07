import { useEffect } from "react";
import { trackEvent } from "@/lib/track";

/** Records clicks on phone and WhatsApp links anywhere on the site. */
export const ConversionTracking = () => {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!a) return;
      const href = a.getAttribute("href") || "";
      if (href.startsWith("tel:")) trackEvent("phone_click", { link_text: a.innerText.trim().slice(0, 40) });
      else if (href.includes("wa.me/")) trackEvent("whatsapp_click", { link_text: a.innerText.trim().slice(0, 40) });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
  return null;
};

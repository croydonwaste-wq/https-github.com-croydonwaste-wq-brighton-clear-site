/**
 * Single source of truth for business / entity details.
 * Anything marked VERIFY must be confirmed by the business owner.
 */

// Canonical host. The live site currently only serves the bare domain; www has no
// SSL certificate on the host. Keep this in sync with the primary domain set in hosting.
export const SITE_URL = "https://www.guttercleaningsnearme.co.uk";

export const brandData = {
  name: "Gutter Cleanings Near Me",
  domain: SITE_URL,
  phone: "01273 569347",
  phoneFormatted: "01273 569347",
  phoneE164: "+441273569347",
  phoneLink: "tel:+441273569347",
  whatsapp: "01273569347",
  whatsappLink: "https://wa.me/441273569347",
  whatsappQuoteLink: "https://wa.me/441273569347?text=I%20need%20a%20quote%20for%20gutter%20cleaning",
  email: "info@guttercleaningsnearme.co.uk",
  emailLink: "mailto:info@guttercleaningsnearme.co.uk",
  googleReviewsLink: "https://share.google/QI23nOKZGrHSjaTpu",
  ogImage:
    "https://storage.googleapis.com/gpt-engineer-file-uploads/02K1SV6yrkeP1fLtZSfXeSjHy1r1/social-images/social-1764346554978-7EF509AE-A6F6-4422-9153-557BA55FAB72.png",

  // VERIFY: hours as published on the Contact page.
  openingHours: [
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "07:00", closes: "19:00" },
    { days: ["Sunday"], opens: "08:00", closes: "17:00" },
  ],

  // VERIFY: lowest published price (Pricing page + Terms minimum charge).
  priceFrom: 80,

  serviceAreas: [
    "Brighton", "Hove", "Portslade", "Peacehaven", "Worthing",
    "Crawley", "Horsham", "Eastbourne", "Guildford", "Woking",
    "Redhill", "Reigate", "Epsom", "Leatherhead", "Dorking", "Croydon"
  ],

  tagline: "Professional Gutter Cleaning Near You",
  description: "Professional gutter cleaning and blocked gutter clearance across Brighton, Hove, Sussex and Surrey. Fast, reliable service with fully insured operatives."
};

export default brandData;

import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import { brandData, SITE_URL } from "@/data/brandData";
import { locationData } from "@/data/locationData";

interface SEOSchemaProps {
  title: string;
  description: string;
  type?: "LocalBusiness" | "FAQPage" | "WebPage";
  breadcrumbs?: Array<{ name: string; url: string }>;
  faqs?: Array<{ question: string; answer: string }>;
  /** Emit FAQPage markup for `faqs`. Disable for templated FAQs repeated across many pages. */
  faqSchema?: boolean;
  /** Describe the page's main service with Service markup. */
  service?: { name: string; description: string; serviceType?: string; areaName?: string };
  noindex?: boolean;
}

const businessId = `${SITE_URL}/#business`;

const normalisePath = (pathname: string) =>
  pathname !== "/" && pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;

export const SEOSchema = ({
  title,
  description,
  breadcrumbs,
  faqs,
  faqSchema = true,
  service,
  noindex = false,
}: SEOSchemaProps) => {
  const { pathname } = useLocation();
  const url = `${SITE_URL}${normalisePath(pathname)}`;

  const business = {
    "@type": "HomeAndConstructionBusiness",
    "@id": businessId,
    name: brandData.name,
    url: SITE_URL,
    telephone: brandData.phoneE164,
    email: brandData.email,
    image: brandData.ogImage,
    description: brandData.description,
    priceRange: `From £${brandData.priceFrom}`,
    areaServed: [
      ...Object.values(locationData).map((l) => ({ "@type": "Place", name: l.name })),
      { "@type": "AdministrativeArea", name: "East Sussex" },
      { "@type": "AdministrativeArea", name: "West Sussex" },
      { "@type": "AdministrativeArea", name: "Surrey" },
    ],
    openingHoursSpecification: brandData.openingHours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    })),
    sameAs: [brandData.googleReviewsLink],
  };

  const graph: Record<string, unknown>[] = [
    business,
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: brandData.name,
      publisher: { "@id": businessId },
      inLanguage: "en-GB",
    },
    {
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      url,
      name: title,
      description,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": businessId },
      inLanguage: "en-GB",
    },
  ];

  if (service) {
    graph.push({
      "@type": "Service",
      "@id": `${url}#service`,
      name: service.name,
      serviceType: service.serviceType || service.name,
      description: service.description,
      provider: { "@id": businessId },
      areaServed: service.areaName
        ? { "@type": "Place", name: service.areaName }
        : [
            { "@type": "AdministrativeArea", name: "East Sussex" },
            { "@type": "AdministrativeArea", name: "West Sussex" },
            { "@type": "AdministrativeArea", name: "Surrey" },
          ],
      url,
    });
  }

  if (breadcrumbs && breadcrumbs.length > 1) {
    graph.push({
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbs.map((crumb, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: crumb.name,
        item: `${SITE_URL}${crumb.url === "/" ? "/" : normalisePath(crumb.url)}`,
      })),
    });
  }

  if (faqs && faqs.length > 0 && faqSchema) {
    graph.push({
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    });
  }

  const jsonLd = noindex ? null : { "@context": "https://schema.org", "@graph": graph };

  return (
    <Helmet>
      <html lang="en-GB" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={noindex ? "noindex, follow" : "index, follow, max-image-preview:large"} />
      {!noindex && <link rel="canonical" href={url} />}
      <meta property="og:site_name" content={brandData.name} />
      <meta property="og:locale" content="en_GB" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={brandData.ogImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={brandData.ogImage} />
      {jsonLd && <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>}
    </Helmet>
  );
};

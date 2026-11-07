import { Helmet } from "react-helmet";

interface SEOSchemaProps {
  title: string;
  description: string;
  type?: "LocalBusiness" | "FAQPage" | "WebPage";
  breadcrumbs?: Array<{ name: string; url: string }>;
  faqs?: Array<{ question: string; answer: string }>;
}

export const SEOSchema = ({ title, description, type = "WebPage", breadcrumbs, faqs }: SEOSchemaProps) => {
  const baseUrl = "https://www.guttercleaningsnearme.co.uk";
  
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `${baseUrl}/#business`,
        "name": "Gutter Cleanings Near Me",
        "url": baseUrl,
        "telephone": "+441273569347",
        "email": "info@guttercleaningsnearme.co.uk",
        "description": "Professional gutter cleaning, blocked gutter clearance, and gutter repairs across Brighton, Hove, Sussex and Surrey. Fast, reliable service with fully insured operatives.",
        "areaServed": [
          { "@type": "City", "name": "Brighton" },
          { "@type": "City", "name": "Hove" },
          { "@type": "City", "name": "Portslade" },
          { "@type": "City", "name": "Peacehaven" },
          { "@type": "City", "name": "Worthing" },
          { "@type": "City", "name": "Crawley" },
          { "@type": "City", "name": "Horsham" },
          { "@type": "City", "name": "Eastbourne" },
          { "@type": "City", "name": "Guildford" },
          { "@type": "City", "name": "Woking" },
          { "@type": "City", "name": "Redhill" },
          { "@type": "City", "name": "Reigate" },
          { "@type": "City", "name": "Epsom" },
          { "@type": "City", "name": "Leatherhead" },
          { "@type": "City", "name": "Dorking" },
          { "@type": "City", "name": "Croydon" },
          { "@type": "State", "name": "Sussex" },
          { "@type": "State", "name": "Surrey" }
        ],
        "sameAs": [],
        "priceRange": "££",
        "image": `${baseUrl}/hero-brighton.jpg`,
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            "opens": "07:00",
            "closes": "20:00"
          }
        ]
      },
      {
        "@type": "WebSite",
        "@id": `${baseUrl}/#website`,
        "url": baseUrl,
        "name": "Gutter Cleanings Near Me",
        "description": "Find professional gutter cleaning services near you in Brighton, Hove, Sussex and Surrey. Blocked gutters cleared fast.",
        "potentialAction": {
          "@type": "SearchAction",
          "target": `${baseUrl}/?s={search_term_string}`,
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "Organization",
        "name": "Gutter Cleanings Near Me",
        "url": baseUrl,
        "logo": `${baseUrl}/logo.png`,
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer support",
          "telephone": "+441273569347",
          "email": "info@guttercleaningsnearme.co.uk",
          "availableLanguage": "English"
        }
      }
    ]
  };

  const breadcrumbSchema = breadcrumbs ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": `${baseUrl}${crumb.url}`
    }))
  } : null;

  const faqSchema = faqs ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : null;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={`${baseUrl}${typeof window !== 'undefined' ? window.location.pathname : ''}`} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${baseUrl}${typeof window !== 'undefined' ? window.location.pathname : ''}`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
      
      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}
      
      {faqSchema && (
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      )}
    </Helmet>
  );
};

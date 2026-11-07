import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { Helmet } from "react-helmet";
import { AppShell } from "./App";
import { locationData } from "./data/locationData";
import servicesData from "./data/servicesData";

export const staticRoutes = [
  "/", "/services", "/pricing", "/areas", "/faq", "/about", "/contact", "/sitemap", "/privacy", "/terms",
];

export const routes = [
  ...staticRoutes,
  ...servicesData.map((s) => `/services/${s.slug}`),
  ...Object.keys(locationData).map((slug) => `/gutter-cleaning/${slug}`),
];

export function render(url: string) {
  const html = renderToString(
    <StaticRouter location={url}>
      <AppShell />
    </StaticRouter>,
  );
  const helmet = Helmet.renderStatic();
  const head = [helmet.title, helmet.meta, helmet.link, helmet.script].map((h) => h.toString()).join("\n    ");
  const htmlAttributes = helmet.htmlAttributes.toString();
  return { html, head, htmlAttributes };
}

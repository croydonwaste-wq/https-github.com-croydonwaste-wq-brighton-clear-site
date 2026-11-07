/**
 * Build-time prerender: writes a fully rendered HTML file for every known route so
 * crawlers that do not execute JavaScript (most AI search crawlers, link previews,
 * some Bing passes) see real content, titles, canonicals and JSON-LD.
 *
 * Output uses flat files (dist/about.html, dist/gutter-cleaning/brighton.html) so
 * static hosts serve /about without adding a trailing slash.
 *
 * Fail-safe: any error leaves the normal SPA build in place and exits 0.
 */
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const root = process.cwd();
const dist = path.join(root, "dist");
const ssrEntry = path.join(root, "dist-ssr", "entry-server.js");

// Browser globals touched at import time by client-only modules (e.g. the Supabase client).
const memoryStorage = () => {
  const m = new Map();
  return {
    getItem: (k) => (m.has(k) ? m.get(k) : null),
    setItem: (k, v) => m.set(k, String(v)),
    removeItem: (k) => m.delete(k),
    clear: () => m.clear(),
    key: (i) => [...m.keys()][i] ?? null,
    get length() { return m.size; },
  };
};
for (const name of ["localStorage", "sessionStorage"]) {
  try { if (!globalThis[name]) throw 0; globalThis[name].getItem("x"); }
  catch { Object.defineProperty(globalThis, name, { value: memoryStorage(), configurable: true }); }
}

const outFile = (route) => (route === "/" ? path.join(dist, "index.html") : path.join(dist, `${route.slice(1)}.html`));

async function main() {
  if (!fs.existsSync(ssrEntry)) throw new Error(`missing ${ssrEntry} (run vite build --ssr first)`);
  const template = fs.readFileSync(path.join(dist, "index.html"), "utf8");
  if (!template.includes("<!--prerender-body-->")) throw new Error("index.html is missing the prerender markers");

  // Default tags are replaced by each page's own Helmet output.
  const baseTemplate = template.replace(/\s*<(title|meta)[^>]*data-react-helmet="true"[^>]*>(?:[^<]*<\/title>)?/g, "");

  const { render, routes } = await import(pathToFileURL(ssrEntry).href);
  let count = 0;
  for (const route of routes) {
    const { html, head, htmlAttributes } = render(route);
    const page = baseTemplate
      .replace(/<html[^>]*>/, `<html ${htmlAttributes || 'lang="en-GB"'}>`)
      .replace("<!--prerender-head-->", head)
      .replace("<!--prerender-body-->", html);
    const file = outFile(route);
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, page);
    count++;
  }

  // Real 404 page (noindex). Hosts that support 404.html return a 404 status for unknown URLs.
  {
    const { html, head, htmlAttributes } = render("/__not-found__");
    fs.writeFileSync(
      path.join(dist, "404.html"),
      baseTemplate
        .replace(/<html[^>]*>/, `<html ${htmlAttributes || 'lang="en-GB"'}>`)
        .replace("<!--prerender-head-->", head)
        .replace("<!--prerender-body-->", html),
    );
  }

  // Sitemap generated from the same route list, so it can never drift from the app.
  const siteUrl = (render("/").head.match(/rel="canonical" href="([^"]+?)\/?"/) || [])[1];
  if (siteUrl) {
    const today = new Date().toISOString().slice(0, 10);
    const priority = (r) => (r === "/" ? "1.0" : r.startsWith("/services") || r === "/areas" || r === "/pricing" ? "0.9" : r.startsWith("/gutter-cleaning/") ? "0.8" : "0.5");
    const urls = routes
      .map((r) => `  <url>\n    <loc>${siteUrl}${r === "/" ? "/" : r}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>${priority(r)}</priority>\n  </url>`)
      .join("\n");
    fs.writeFileSync(
      path.join(dist, "sitemap.xml"),
      `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
    );
  }
  console.log(`prerender: wrote ${count} pages${siteUrl ? " + sitemap.xml" : ""}`);
}

main()
  .catch((err) => {
    console.warn("prerender: skipped, SPA build left unchanged ->", err && err.message ? err.message : err);
  })
  .finally(() => {
    fs.rmSync(path.join(root, "dist-ssr"), { recursive: true, force: true });
  });

# SEO, Local SEO, AI Search & Lead Generation Audit
**Website:** https://guttercleaningsnearme.co.uk (Gutter Cleanings Near Me)
**Industry:** Domestic & commercial gutter cleaning, unblocking, repairs, fascia/soffit cleaning
**Primary area:** Brighton & Hove · **Secondary:** East Sussex, West Sussex, Surrey (57 town pages)
**Contact on site:** 01273 569347 · info@guttercleaningsnearme.co.uk · WhatsApp 01273 569347
**Audit date:** 7 November 2026 · **Code audited:** Lovable project "Brighton Waste Whiz (86)", commit `35302abe` (the commit served on the live domain)

---

## 1. Executive summary

The site has a sensible structure (home → 6 services → areas hub → 55 town pages) and good contact pathways, but several **verified technical faults were preventing it from being indexed and trusted properly**:

| # | Finding | Severity | Status |
|---|---|---|---|
| 1 | **`www.guttercleaningsnearme.co.uk` fails SSL** (DNS points to the host, but no certificate is issued for `www`). Every canonical tag, the sitemap, robots.txt and schema point to the `www` address — so Google is told the "real" version of every page is on a host that does not load. | ★★★★★ | **HUMAN ACTION REQUIRED** (hosting setting, 2 min – see §8) |
| 2 | Site is a client-side SPA: every URL returns an empty `<div id="root">`. Google renders JS, but most AI search crawlers (ChatGPT, Perplexity, Claude) and link previews do not, so they saw an empty page with the homepage title on all 73 URLs. | ★★★★★ | **Fixed in code** – build-time prerendering |
| 3 | Quote-form leads are emailed to **info@surreysussexwaste.co.uk** with "Surrey Sussex Waste" branding (Supabase function `submit-quote`). | ★★★★★ | **HUMAN APPROVAL REQUIRED** (may be intentional) |
| 4 | 11 town URLs (incl. **Portslade and Croydon, which were in the sitemap**) rendered indexable "Gutter Cleaning in **This Area**" pages; 9 "nearby area" links pointed to them. | ★★★★★ | **Fixed** |
| 5 | Privacy page named a different company ("Mr Gutter Cleaning", info@mrguttercleaning.co.uk); meta author was "Brighton & Hove Waste Clearance"; twitter:site was `@lovable_dev`. | ★★★★ | **Fixed** |
| 6 | Two `<meta name="description">` tags on every page. | ★★★★ | **Fixed** |
| 7 | /pricing (a key commercial page) was linked only from /sitemap. | ★★★★ | **Fixed** |
| 8 | Contradictory prices (£60–£150 in FAQs vs "from £80" on Pricing and the £80 minimum in Terms) and opening hours (schema 7am–8pm daily vs Contact page Mon–Sat 7–7, Sun 8–5). | ★★★★ | **Fixed to match Pricing/Contact** – owner to verify |
| 9 | Location pages ~320 words, ~95 % templated, false "we're based locally" claim on 55 towns, identical FAQPage markup ×55. | ★★★★ | **Improved** (unique local section, claims corrected) |
| 10 | Testimonials on /about (Sarah M., James T., Emma L., David R.) and "5★ Rated / trusted by hundreds" claims cannot be verified. | ★★★★ | **HUMAN APPROVAL REQUIRED** (legal risk if not genuine) |

**Important deployment note:** this GitHub repo is **not connected to Lovable**. The fixes are committed here, built and tested, but **they are not live yet**. See §8 for how to deploy.

---

## 2. Baseline performance
**VERIFICATION REQUIRED – no data sources connected.** No Google Search Console, GA4, GTM or Google Business Profile access was available, so clicks, impressions, CTR, positions, indexed-page counts, conversions and Core Web Vitals field data are unknown. A web search for the domain returned no indexed results, which is consistent with finding #1 but is not proof of non-indexation.

The only analytics on the site is Lovable's built-in script (`/~flock.js`). There is **no GA4, no GTM, and no tracking of phone, WhatsApp or form conversions**.

---

## 3. URL inventory (73 indexable URLs, all HTTP 200, measured on the live site)

| Group | URLs | Primary cluster / intent | Title pattern (live) | Words (live) | Inbound internal links (live) |
|---|---|---|---|---|---|
| Home | `/` | gutter cleaning near me / gutter cleaning Brighton – local transactional | Gutter Cleaning Near Me \| Brighton, Sussex & Surrey Gutter Cleaners | 518 | site-wide |
| Services hub | `/services` | gutter cleaning services – commercial investigation | Gutter Cleaning Services \| Brighton… | 642 | site-wide |
| Pricing | `/pricing` | gutter cleaning cost/prices – commercial investigation | Gutter Cleaning Prices \| Transparent Rates… | 410 | **1** (sitemap only) |
| Areas hub | `/areas` | gutter cleaning [county] – navigational/local | Areas We Cover \| … (meta claimed "79 locations"; there were 55) | 642 | site-wide |
| FAQ | `/faq` | informational | Gutter Cleaning FAQ \| … | 264 visible (25 Q&As collapsed) | site-wide |
| About / Contact | `/about`, `/contact` | trust / navigational | | 577 / 215 | site-wide |
| Legal & HTML sitemap | `/privacy`, `/terms`, `/sitemap` | — | | | site-wide |
| Services (6) | `/services/gutter-cleaning-near-me`, `/blocked-gutters-gutter-unblocking`, `/downpipe-unblocking`, `/gutter-repairs`, `/fascia-soffit-cleaning`, `/gutter-maintenance-plans` | transactional (one each) | unique, mostly good | 365–413 | site-wide (footer) |
| Towns (55 + 2) | `/gutter-cleaning/{town}` | gutter cleaning {town} – local transactional | Gutter Cleaning {Town} \| Local Gutter Cleaners Near You | ~320 | Brighton/Hove/Crawley/Horsham/Guildford: site-wide; most others **1–6**; Charlwood, Ashtead, Farnham, Edenbridge: **1**; Portslade: **0** |

Every page had: correct H1 (one per page), canonical to `www`, `index, follow`, LocalBusiness+WebSite+Organization+BreadcrumbList JSON-LD (+FAQPage on home, FAQ, services and towns). The soft-404 route `/anything` returned HTTP 200 with `noindex` (acceptable for an SPA).

Full per-URL data from the crawl (title, description, canonical, H1/H2s, words, links, schema) was captured during the audit; the new build is checked by the QA script described in §7.

---

## 4. Technical SEO findings

| Area | Finding | Action |
|---|---|---|
| Host / canonical | `www` → TLS handshake failure; apex works (HTTP/2 200 via Cloudflare). DNS: `www` CNAME → apex → 185.158.133.1. | **Owner:** add `www` in Lovable → Project → Settings → Domains (set apex or www as primary, other redirects). If you choose the **apex** as primary, change `SITE_URL` in `src/data/brandData.ts` (one line) and `public/robots.txt`. |
| Rendering | Empty HTML shell on all URLs. | Prerender at build (`scripts/prerender.mjs`): 73 static HTML files + `404.html` + generated `sitemap.xml`. Fails safe (falls back to SPA). |
| Meta duplication | 2× description, 2× og:* on every page. | Static tags marked `data-react-helmet` so they are replaced. Verified: 1 per page. |
| Soft pages | Unknown towns → "This Area", indexable, with FAQ schema. | Now render the 404 component (`noindex`). |
| Broken internal links | 9 nearby links to non-existent towns (Merstham, Pound Hill, Weybridge, Camberley, Aldershot, Midhurst, Petersfield, Crowborough, Woldingham). | Replaced with the nearest existing town pages; render-time filter prevents recurrence. **0 broken links** in QA. |
| Sitemap | Hand-written; listed Portslade/Croydon (no content); lastmod Jan 2026. | Generated from the route list at build; Portslade and Croydon now have pages. |
| robots.txt | Fine (allow all). `Crawl-delay` is ignored by Google; harmless. | No change. |
| Schema | Fake `SearchAction` (no site search), `logo.png` and `hero-brighton.jpg` 404, hours contradicted visible content, FAQPage duplicated ×55. | Rebuilt as one `@graph`: HomeAndConstructionBusiness, WebSite, WebPage, Service (service + town pages), BreadcrumbList, FAQPage only where FAQs are unique. Validated (JSON parses on all 73 pages). |
| Images | 9 AI-generated 1920×1080 JPEGs (1.8 MB) with waste-clearance file names (`overflowing-bins.jpg`, `recycling-center.jpg`…), no dimensions. | 1280px WebP (615 KB total), descriptive names, accurate alt text, width/height on key images, `fetchpriority=high` on hero. |
| JS bundle | 800 KB (225 KB gzip) single chunk. | Not changed (prerendering removes the SEO impact). Wave 4: code-split. |
| Accessibility | Menu button had no label; logo text overflowed its box ("GCNI"). | Fixed. |
| HTML validity | `<button>` wrapping `<a>` in two final CTAs. | Fixed. |

---

## 5. Keyword research, intent & keyword-to-URL map
No search-volume tool was connected, so **no volumes are quoted**. Evidence comes from live SERP checks (7 Nov 2026) and the UK cost guides they surfaced.

**SERP landscape (UK):** results for "gutter cleaning Brighton / Crawley / Horsham / Worthing / Hove" are dominated by directories (Checkatrade, MyBuilder, Bark, TrustATrader) plus a few local operators. Searches for "gutter cleaning Brighton" are also polluted by US/Australian Brightons, so the Brighton & Hove / East Sussex qualifiers matter on-page. Cost queries are answered by price guides (Checkatrade, MyBuilder, Fantastic Services, Less.co.uk), so a clear, answer-first pricing page is a real opportunity.

| Cluster | Example queries | Intent | Owner URL |
|---|---|---|---|
| Core near-me | gutter cleaning near me, gutter cleaners near me, gutter clearance | local transactional | `/` |
| Brand-service detail | gutter vacuum cleaning, gutter cleaning service, what does gutter cleaning include | transactional | `/services/gutter-cleaning-near-me` (title de-duplicated from home) |
| Blocked / urgent | blocked gutters, overflowing gutter, gutter unblocking, emergency gutter clearance | urgent transactional | `/services/blocked-gutters-gutter-unblocking` |
| Downpipe | blocked downpipe, downpipe unblocking | transactional | `/services/downpipe-unblocking` |
| Repairs | leaking gutter repair, sagging gutter, gutter joint repair | transactional | `/services/gutter-repairs` |
| Roofline | fascia and soffit cleaning, uPVC fascia cleaning | transactional | `/services/fascia-soffit-cleaning` |
| Recurring / landlord | gutter maintenance contract, landlord gutter cleaning | commercial | `/services/gutter-maintenance-plans` |
| Price | gutter cleaning cost, how much is gutter cleaning, gutter cleaning prices semi-detached | commercial investigation | `/pricing` |
| Town | gutter cleaning {town}, gutter cleaners {town} | local transactional | `/gutter-cleaning/{town}` |
| Questions | how often clean gutters, do I need to be home, conservatory gutters | informational / AI answers | `/faq` + service FAQs |

**Cannibalisation:** `/` and `/services/gutter-cleaning-near-me` had near-identical titles ("Gutter Cleaning Near Me | Brighton, Sussex & Surrey…"). The service page is now "Gutter Cleaning Service | Gutter Vacuum Clearance | Sussex & Surrey" with an "inclusions" angle; the URL is unchanged.

**Gaps (Wave 4, need business input):** commercial/landlord/managing-agent page (only if the business wants that work), conservatory gutter cleaning, gutter guard installation (only if offered), seasonal autumn content.

---

## 6. Competitors (genuine local operators found in SERPs; directories excluded)
Research limitation: one round of searches, no ranking tool. Ratings below are what the directory listings showed, not verified.

| Competitor | Area | Observed positioning |
|---|---|---|
| Brighton Gutter Cleaning (brightonguttercleaning.co.uk) | Brighton / Sussex | Exact-match domain; advertises "from £50"; Trustpilot profile |
| GutterPRO Brighton & Crawley | Brighton, Crawley | Checkatrade 9.74/10; conservatory + gutter cleaning |
| I K Gutter Vacuuming | Crawley | Checkatrade member since 2015; gutter vac + jet washing |
| Gutter Genies | Worthing | Checkatrade 9.87/10; £1,000 guarantee |
| DrainBoss | Brighton, Hove, Worthing | Family-run, "no call-out charge", drainage + gutters |
| LRB Cleaning Services Ltd | Worthing / West Sussex | Exterior cleaning incl. gutter, fascia & soffit |

**What they have that this site lacks:** verifiable third-party reviews (Checkatrade, Trustpilot or Google), real job photos, named people, and a clear guarantee. **Where this site is stronger:** service and town coverage depth, a published price ladder, photo quotes, and WhatsApp.

UK price context (2026 guides): semi-detached about £65–£120 (Less.co.uk survey average £80; BestBuilders £70–£120; Checkatrade £100–£150). The site's "from £80 / £120 / £180" sits in the market range.

---

## 7. Implemented changes (commit `8761002`) and verification

**Implemented:**
- Prerendering + generated sitemap + noindex 404 (`scripts/prerender.mjs`, `src/entry-server.tsx`, `npm run build`)
- `SEOSchema` rewrite: route-based canonical, single meta set, en-GB, accurate @graph, `noindex` support
- Location template: unknown towns → 404; unique "Areas of {town} we cover" section (landmarks, roads, nearby towns); links to all six services and pricing; FAQ answers made consistent; Service schema per town; false "based locally" and "licensed" claims removed
- Portslade and Croydon pages added (already listed as service areas in five places on the site)
- 9 broken nearby links fixed; Areas hub count made dynamic (meta said 79)
- Entity fixes: Privacy page, meta author, twitter:site
- Pricing in the nav, footer, home, service sidebars and town pages; price and hours consistency
- Titles: service page de-cannibalised; blocked gutters, maintenance plans and pricing titles localised/answer-led; pricing meta answers "how much"
- Mobile sticky Call / WhatsApp / Free Quote bar; scroll reset on navigation; logo fix; aria labels; invalid nesting fixed
- Images converted to WebP and renamed; alt text corrected (one alt said "rubbish clearance team")

**Verified (tests actually run on the production build, served locally):**
- `npm run build` ✔ (73 pages + 404 prerendered, sitemap generated); `tsc` ✔; ESLint ✔ (1 pre-existing shadcn warning)
- Playwright across all 73 routes + 3 bad URLs: 1 title & 1 description per page ✔, 1 H1 per page ✔, canonical = own URL ✔, JSON-LD parses ✔, `lang=en-GB` ✔, **0 broken internal links** ✔, 0 images without alt ✔, no "This Area" text ✔, bad URLs `noindex` ✔, no JS errors (only the existing intentional 404 console log) ✔
- No-JS check: `/gutter-cleaning/brighton` now has about 600 words, its own title and canonical, and JSON-LD in raw HTML ✔
- Mobile (iPhone 13): contact bar visible, no horizontal scroll ✔; quote dialog opens ✔; client-side navigation updates title/canonical and resets scroll ✔
- **Not tested:** quote form submission (would send a real lead into your Supabase project and inbox), the live deployment, and whether your host serves `/page` from `page.html` (standard on Cloudflare Pages and Netlify; not confirmed for Lovable hosting).

---

## 8. Items requiring your action / approval

| Item | Why | What to do |
|---|---|---|
| **Fix `www` SSL** ★★★★★ | All canonicals/sitemap point to a host that fails | Lovable → project → Settings → Domains → add `www.guttercleaningsnearme.co.uk` (redirect to primary). Then confirm `https://www.guttercleaningsnearme.co.uk` loads. |
| **Deploy these changes** ★★★★★ | Repo isn't linked to Lovable | Option A: in Lovable, connect GitHub and move this code into the Lovable-linked repo. Option B: deploy `dist/` from this repo to Cloudflare Pages/Netlify and point DNS there. Option C: ask me to send the key edits to the Lovable agent (uses Lovable credits; the prerender step may not run on Lovable's build). |
| **Quote email routing** ★★★★★ — HUMAN APPROVAL REQUIRED | Leads go to info@surreysussexwaste.co.uk as "Surrey Sussex Waste" | Confirm whether that is intended. If not, change `to`/`from` in `supabase/functions/submit-quote/index.ts` and redeploy the function from Lovable/Supabase. |
| **Testimonials & ratings** — HUMAN APPROVAL REQUIRED | Named reviews on /about, "5★ Rated", "trusted by hundreds" can't be verified. Fake or unverifiable reviews breach the CMA's DMCC Act 2024 rules. | If they are real Google reviews, keep them and link each one. If not, remove them. Better: embed or link the real Google Business Profile reviews. |
| **Claims to verify** — VERIFICATION REQUIRED | £5M public liability, SkyVac equipment, same-day / 7-day service, 2-hour quote replies, hours, £80/£120/£180 prices, minor repairs included in plans | Confirm or correct; all live in `src/data/*` and page files. |
| **Images** | All AI-generated; several show people standing on roofs/ladders, contradicting the "ground-level, no ladders" message, and US-style houses | Replace with real job photos (before/after, van, team) – the biggest E-E-A-T upgrade available. |
| **Coverage** | 57 towns from Croydon to Eastbourne to Haslemere | Confirm you genuinely serve all of them; prune any you don't. |
| **Business address / company info** | No company number, address or named owner anywhere; service-area business is fine, but some trust signal is needed | Add a company or trading name, company number if a Ltd, and an "About the owner" paragraph. |

---

## 9. Local SEO, GBP, AI search, E-E-A-T
- **Google Business Profile:** not accessible. The About page links `share.google/QI23nOKZGrHSjaTpu`, which is now in schema `sameAs`. Make sure the GBP name is exactly "Gutter Cleanings Near Me", the website is the canonical host, the primary category is "Gutter cleaning service", the service areas match the site, and the phone is 01273 569347. Don't add an address you don't trade from.
- **Citations:** Checkatrade, MyBuilder, Bark, TrustATrader and Yell dominate the SERPs. A consistent profile (same name, phone and URL) on 2–3 of them adds both citations and verifiable reviews.
- **AI search (AI Overviews / AI Mode / ChatGPT / Perplexity / Copilot):** the site was invisible to non-JS crawlers; prerendering fixes that. The content is now answer-first on pricing, and the entity data (name, phone, area, prices, hours) is consistent across content and schema. No citations or placements are guaranteed.
- **E-E-A-T:** the largest remaining gap is genuine evidence: real photos, real reviews, a named owner or team, an insurance certificate, and a written guarantee.

---

## 10. Analytics & tracking
Nothing is in place beyond Lovable's own analytics. Recommended (respecting UK GDPR/PECR — consent banner before non-essential cookies):
1. Verify the domain in **Google Search Console** (DNS TXT at GoDaddy) and submit `/sitemap.xml`. Do the same in **Bing Webmaster Tools** (it can import from GSC).
2. Add **GA4** via consent mode, with events for `tel:` clicks, WhatsApp clicks and successful quote submissions (fire only after the Supabase function returns success). Treat clicks as intent; confirmed leads are form successes plus calls answered.
3. Add a "How did you hear about us?" field, or UTM-tag the GBP website link, for lead source attribution.

---

## 11. Prioritised roadmap
**Wave 1 – critical (this week):** fix `www` SSL → deploy this build → decide on quote-email routing → resolve testimonials → GSC + Bing verification and sitemap submission.
**Wave 2 – high value:** replace images with real job photos; add verifiable reviews (GBP embed/link, Checkatrade); confirm all claims; add a company/owner trust block to /about and the footer.
**Wave 3 – content & linking:** enrich the top 8 town pages (Brighton, Hove, Worthing, Crawley, Horsham, Lewes, Eastbourne, Guildford) with genuine local job notes and photos; add internal links between town pages within each county group; expand the pricing page with a per-service price table (downpipe, fascia, repairs) once confirmed.
**Wave 4 – growth:** GA4 conversion tracking; a landlord/managing-agent page if that work is wanted; seasonal autumn content; route-level code splitting.

**30 / 60 / 90 days**
- **0–30:** confirm the live build serves prerendered HTML (`curl -s https://guttercleaningsnearme.co.uk/gutter-cleaning/brighton | grep "<h1"`); check GSC Page indexing and canonical choice; test the quote form, WhatsApp and phone; fix crawl errors.
- **31–60:** review GSC queries per town/service page, improve the titles of pages with impressions but low CTR, add real photos/reviews, and strengthen internal links to pages getting impressions.
- **61–90:** compare leads by source, review competitors' review counts, decide which towns deserve deeper content and which should be pruned, and plan seasonal refreshes. Don't attribute changes to single edits without GSC evidence.

---

## 12. Unresolved issues
- Live deployment and www SSL (owner action).
- Quote form email routing; possible HTML injection in the notification email body (form values inserted unescaped) – low risk, fix when the function is next edited.
- File-size limit mismatch: the quote dialog says 20 MB, the server rejects files over 10 MB.
- Testimonials and unverifiable claims.
- No baseline metrics (no GSC/GA4 access).

## 13. Final self-verification
1. Inspected the actual website – **yes** (live crawl of 73 URLs + 11 bad URLs; source code at the deployed commit).
2. Identified established URLs – **yes**, all preserved; no URL changed or removed.
3. Verified services and locations – **partly**: taken from the site itself; the owner must confirm coverage.
4. Technical SEO – **yes**. 5. Search intent – **yes**. 6. Keyword opportunities – **yes** (no volumes; no tool access). 7. Cannibalisation – **yes** (home vs gutter-cleaning-near-me fixed).
8. Competitors – **yes**, light (one research round). 9. Local SEO – **yes**; GBP not accessible. 10. AI search readiness – **yes**.
11. Content quality – **yes**. 12. Internal linking – **yes** (pricing orphan, broken nearby links, service ↔ town links).
13. Structured data – **yes**, rebuilt and parse-checked (not run through Google's Rich Results Test, which needs a public URL).
14. Conversion pathways – **yes** (mobile bar; form not submitted).
15. SEO equity protected – **yes** (no URL changes, content added rather than removed, content kept apart from unverifiable claims).
16. Safe improvements implemented – **yes**. 17. Verified – **yes**, on the local production build; **not** on the live site.
18. Limitations and blockers reported – **yes** (§8, §12).

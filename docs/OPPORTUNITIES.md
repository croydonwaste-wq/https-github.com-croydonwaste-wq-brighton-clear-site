# Missing Services, Locations & Local Search Opportunities
**Website:** https://guttercleaningsnearme.co.uk · **Business:** Gutter Cleanings Near Me (gutter cleaning, Sussex & Surrey) · **Date:** 7 November 2026
Follows `docs/SEO-AUDIT.md`. Services and towns below were **confirmed by the business owner on 7 Nov 2026**; nothing unconfirmed was published.

---

## 1. Existing service inventory (before this work)
| Service | URL | Type |
|---|---|---|
| Gutter cleaning | `/services/gutter-cleaning-near-me` | core, residential |
| Blocked gutters / unblocking | `/services/blocked-gutters-gutter-unblocking` | core, urgent |
| Downpipe unblocking | `/services/downpipe-unblocking` | core |
| Gutter repairs | `/services/gutter-repairs` | core |
| Fascia & soffit cleaning | `/services/fascia-soffit-cleaning` | core / roofline |
| Maintenance plans | `/services/gutter-maintenance-plans` | recurring |

**Claimed in passing with no page of its own:** commercial gutter cleaning (FAQ), conservatory gutters (FAQ), CCTV/camera inspection (old town-page list), landlords (maintenance plan copy).

## 2. Market service discovery (UK / Sussex & Surrey competitors)
Competitors seen in live searches advertise: conservatory cleaning (Southern Gutter Solutions, Peake Exterior, LRB, Highbridge 360, GutterPRO), roof cleaning / moss (Peake, Clean Easy), camera-checked gutters (GutterPRO, SkyVac Services), gutter guard fitting (SkyVac Services), cherry picker access (ILiftU, Superguttervac, Clearview, Blocked Gutters Ltd), and commercial work (most of the above).

| Service | Status |
|---|---|
| Commercial gutter cleaning | **CONFIRMED → page built** |
| Landlord / letting agent gutter cleaning | **CONFIRMED → page built** |
| Conservatory gutter & roof cleaning | **CONFIRMED → page built** |
| Gutter guard installation | **CONFIRMED → page built** |
| Gutter camera inspection | **CONFIRMED → page built** |
| Roof moss removal | **CONFIRMED → page built** |
| High-level / cherry picker gutter cleaning | **CONFIRMED → page built** |
| Solar panel cleaning, window cleaning, conservatory valeting (interior) | POTENTIAL – CONFIRM WITH BUSINESS (adjacent; not built) |
| Gutter replacement / new guttering installation | POTENTIAL – CONFIRM WITH BUSINESS (repairs page covers sections only) |
| Drain jetting / CCTV drain surveys | NOT SUITABLE as a page – site says it "can arrange" surveys; that's a referral, not a service |
| Roof repairs, pressure washing driveways | NOT SUITABLE (outside core offer; nothing on site supports it) |

## 3. Location inventory & gaps
- **Before:** 57 town pages in 6 hub groups (after the earlier audit added Portslade and Croydon).
- **Owner confirmed** all 57 are served, and asked to add more. **Added 8 towns** that fill gaps between existing pages:

| New town | Gap filled | Linked from |
|---|---|---|
| Hailsham, Polegate | Between Eastbourne, Lewes and Uckfield | Areas hub, Eastbourne, Seaford, each other |
| Crowborough | North of Uckfield (was a broken "nearby" link) | Areas hub, Uckfield |
| Merstham | North of Redhill (was a broken "nearby" link) | Areas hub, Redhill |
| Purley, Coulsdon | Between Croydon, Caterham and Banstead | Areas hub, Croydon, Chipstead |
| Chichester, Bognor Regis | West of Arundel/Littlehampton | Areas hub, Arundel, Littlehampton |

**Not added (no confirmation; listed for your decision):** Weybridge, Camberley, Aldershot, Midhurst, Petersfield, Woldingham, Bexhill, Haywards Heath villages (Cuckfield, Lindfield), Sutton, Burgess Hill villages. These were former broken links or obvious neighbours. **BUSINESS CONFIRMATION REQUIRED.**

## 4. Service × location matrix (decision rules)
| Combination | Decision | Reason |
|---|---|---|
| Gutter cleaning × 65 towns | EXISTING – ADEQUATE (town pages own "gutter cleaning {town}") | Town pages now have unique landmark/road sections |
| Every other service × each town (e.g. "conservatory gutter cleaning Hove") | **COVER WITH EXISTING PAGE** – each town page links to all 13 services; each service page is region-wide | 13 services × 65 towns = 845 near-identical pages = doorway risk; no evidence of separate demand |
| Commercial gutter cleaning × major commercial towns (Brighton, Crawley, Guildford, Croydon) | DO NOT CREATE yet | Revisit only if Search Console shows "commercial gutter cleaning {town}" impressions |
| Emergency/blocked gutters × town | COVER WITH EXISTING PAGE | Blocked-gutter page + town FAQ "same-day in {town}" |
| Regional hubs (East Sussex / West Sussex / Surrey URLs) | COVER WITH REGIONAL HUB (`/areas` sections) | `/areas` already groups towns; new hub URLs would duplicate it |

## 5. Keyword clusters → owner URL (no volumes – no keyword tool access)
| Cluster | Intent | URL |
|---|---|---|
| commercial gutter cleaning, office/school/warehouse gutter cleaning, block of flats gutters, box gutter cleaning | commercial transactional | `/services/commercial-gutter-cleaning` |
| landlord gutter cleaning, letting agent gutter maintenance, rental property gutters, damp from gutters (landlord) | commercial | `/services/landlord-letting-agent-gutter-cleaning` |
| conservatory gutter cleaning, conservatory roof cleaning, gutters above conservatory | transactional | `/services/conservatory-gutter-cleaning` |
| gutter guards, gutter brush, leaf guard installation, are gutter guards worth it | transactional + investigation | `/services/gutter-guard-installation` |
| gutter camera inspection, gutter survey, check gutters without ladder | transactional | `/services/gutter-camera-inspection` |
| roof moss removal, moss on roof tiles, moss blocking gutters | transactional | `/services/roof-moss-removal` |
| high level gutter cleaning, cherry picker gutter cleaning, 4-storey gutters | transactional | `/services/high-level-gutter-cleaning` |
| gutter cleaning cost, minimum charge, is downpipe included, cancellation | commercial investigation / AI answers | `/pricing` (new FAQ block + FAQPage schema) |

**Cannibalisation checks:** commercial vs maintenance plans (plans = recurring schedule for any customer; commercial = building type) – distinct titles/H1s; landlord vs maintenance plans – distinct audience; conservatory vs fascia/soffit – distinct object; high-level vs commercial – access method vs customer type, cross-referenced in FAQs. QA confirmed no duplicate titles or H1s across 88 pages.

## 6. Long-tail, customer questions & AI search
Added as FAQs on the relevant pages (answers use only facts already on the site): "do gutter guards mean no more cleaning", "brush vs mesh", "do tenants need to be home", "can you send reports to the agent", "do you need a parking permit for a cherry picker", "will gutters need cleaning after moss removal", "is downpipe clearing included", "minimum charge", "cancellation notice". Each service page carries Service + FAQPage + BreadcrumbList schema and is prerendered for non-JS AI crawlers.

## 7. Internal linking implemented
- **Services hub:** regrouped into Core / Specialist / Commercial & Landlord sections (all 13).
- **Home:** "Specialist & Commercial Services" link row (7 new pages).
- **Footer:** +5 service links (site-wide).
- **Every town page:** the services list now links all 13 services; the "Popular services" card links Commercial.
- **Service sidebars:** "Related services" sorted by same category (max 8).
- **Towns:** 8 new towns are in `/areas`, the HTML sitemap, and reciprocal "nearby" links from 8 existing towns.
- QA inbound links: new services 71–90 internal links each; new towns 3–4 each.

## 8. Implemented & verified
- 7 service pages via `src/data/additionalServicesData.ts` (no prices invented: "priced from photos").
- 8 town pages in `src/data/locationData.ts` (real landmarks/roads, unique meta descriptions).
- Pricing FAQ block, services hub regrouping, cross-links.
- **Verified on the production build:** `tsc` ✔, build ✔ (88 pages prerendered + sitemap), Playwright on all 88 routes plus 2 bad URLs: 1 title / description / H1 per page, canonical = own URL, valid JSON-LD, 0 broken internal links, bad URLs noindex, mobile bar and no horizontal scroll ✔. Quote form not submitted (would create a real lead).

## 9. Approval / confirmation needed
- **Method details** to check on the new pages: moss treatment after removal; conservatory roof material handling; RAMS on request; whether you fit both brush **and** mesh guards; that you arrange cherry pickers (own or hired – the copy says "arrange"). **BUSINESS CONFIRMATION REQUIRED.**
- Extra towns listed in §3.
- Prices for the new services, if you want guide prices published (currently quote-only).
- Real photos for each new service (currently reusing AI images).

## 10. Do-not-create list
- Service × town pages (845 combinations) – doorway risk.
- Separate pages for synonyms (gutter clearing / gutter clearance / gutter vacuuming) – owned by `/services/gutter-cleaning-near-me`.
- Postcode pages (BN1, RH10…) – no distinct intent beyond town pages.
- "Near me" variants per service – handled by the location-agnostic service pages + town pages.
- AI-keyword pages ("best gutter cleaner according to ChatGPT").
- Separate East/West Sussex/Surrey hub URLs – `/areas` covers this.

## 11. Next expansion priorities
1. Deploy this build (repo still not linked to Lovable).
2. Add real job photos and 1–2 genuine examples to Commercial, Conservatory and Gutter Guards (highest commercial value).
3. Verify in Search Console; after 60–90 days, review queries for "{service} {town}" impressions before considering any service × town page.
4. Confirm and add the §3 candidate towns if served.
5. Publish guide prices for gutter guards and moss removal once confirmed (pricing queries are well served by competitors' cost guides).

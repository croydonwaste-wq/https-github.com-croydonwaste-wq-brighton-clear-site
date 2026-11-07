import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SEOSchema } from "@/components/SEOSchema";
import { AreaCard } from "@/components/AreaCard";
import { areaGroups } from "@/data/areaGroups";
import { MapPin } from "lucide-react";
import heroSurrey from "@/assets/gutter-cleaner-on-ladder.webp";

const AreasHub = () => {






  const [coreAreas, midSurreyAreas, coastalAreas, eastSussexAreas, northSurreyAreas, otherAreas] = areaGroups.map((g) => g.areas);
  const allAreas = areaGroups.flatMap((g) => g.areas);

  return (
    <div>
      <SEOSchema 
        title="Areas We Cover | Gutter Cleaning Across Sussex & Surrey"
        description={`Gutter cleaning in ${allAreas.length} towns across East Sussex, West Sussex & Surrey – from Brighton and Worthing to Crawley, Guildford and Croydon. Find your local page.`}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Areas We Cover", url: "/areas" }
        ]}
      />
      <section className="bg-muted/30 py-12">
        <div className="container">
          <Breadcrumbs items={[{ label: "Areas We Cover" }]} />
          <h1 className="mb-4">Areas We Cover — Sussex, Surrey & Beyond</h1>
          <p className="max-w-3xl text-lg text-muted-foreground">
            Professional, fully insured gutter cleaning across Sussex & Surrey. Covering Brighton, Hove, Worthing, Crawley, Horsham, Guildford and all surrounding areas. Same-day service available, subject to availability.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="mb-12 flex items-center justify-center gap-3 text-center">
            <MapPin className="h-8 w-8 text-primary" />
            <p className="text-lg font-medium">
              Covering {allAreas.length} locations across Surrey & Sussex
            </p>
          </div>
          
          {/* Core Service Areas */}
          <div className="mb-16">
            <h2 className="mb-6 text-2xl font-bold">Crawley, Gatwick & Mid Sussex</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {coreAreas.map((area) => (
                <AreaCard key={area.slug} {...area} />
              ))}
            </div>
          </div>

          {/* Mid-Surrey Towns */}
          <div className="mb-16">
            <h2 className="mb-6 text-2xl font-bold">Mid-Surrey Towns</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {midSurreyAreas.map((area) => (
                <AreaCard key={area.slug} {...area} />
              ))}
            </div>
          </div>

          {/* West Sussex Coastal Belt */}
          <div className="mb-16">
            <h2 className="mb-6 text-2xl font-bold">West Sussex Coastal Belt</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {coastalAreas.map((area) => (
                <AreaCard key={area.slug} {...area} />
              ))}
            </div>
          </div>

          {/* East Sussex Corridor */}
          <div className="mb-16">
            <h2 className="mb-6 text-2xl font-bold">East Sussex Corridor</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {eastSussexAreas.map((area) => (
                <AreaCard key={area.slug} {...area} />
              ))}
            </div>
          </div>

          {/* North Surrey / Border Catchment */}
          <div className="mb-16">
            <h2 className="mb-6 text-2xl font-bold">North Surrey / Border Catchment</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {northSurreyAreas.map((area) => (
                <AreaCard key={area.slug} {...area} />
              ))}
            </div>
          </div>

          {/* Other Areas */}
          <div className="mb-16">
            <h2 className="mb-6 text-2xl font-bold">Additional Areas</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {otherAreas.map((area) => (
                <AreaCard key={area.slug} {...area} />
              ))}
            </div>
          </div>

          <div className="mt-12 rounded-xl border bg-card p-8 text-center">
            <h2 className="mb-4 text-2xl">Don't See Your Town Listed?</h2>
            <p className="mx-auto mb-6 max-w-2xl text-muted-foreground">
              We cover a wide area across Sussex & Surrey. If your town, village or postcode isn't listed above, we may still serve your area. Call or WhatsApp for a fast answer—we're here to help.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="tel:01273569347"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground hover:bg-primary/90"
              >
                Call 01273 569347
              </a>
              <span className="text-muted-foreground">or</span>
              <a
                href="https://wa.me/441273569347"
                className="inline-flex items-center gap-2 rounded-lg border-2 border-primary px-6 py-3 font-semibold text-primary hover:bg-primary/10"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="overflow-hidden rounded-lg">
              <img src={heroSurrey} alt="Sussex and Surrey gutter cleaning coverage area" className="h-full w-full object-cover" loading="lazy" />
            </div>
            <div>
              <h2 className="mb-4">Serving Beautiful Sussex & Surrey</h2>
              <p className="text-lg text-muted-foreground mb-4">
                From the Sussex coast to picturesque Surrey villages, we provide comprehensive gutter cleaning services across the region.
              </p>
              <p className="text-muted-foreground">
                Sussex & Surrey coverage • Fully insured • Same-day available
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/30 py-12">
        <div className="container text-center">
          <h2 className="mb-4">Same-Day Gutter Cleaning Available</h2>
          <p className="mx-auto mb-6 max-w-2xl text-muted-foreground">
            Whether you need residential gutter cleaning in Brighton, commercial gutter maintenance in Crawley, or emergency downpipe unblocking in Horsham—we offer fast, same-day slots subject to availability. Send photos for an instant quote.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AreasHub;

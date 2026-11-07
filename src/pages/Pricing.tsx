import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SEOSchema } from "@/components/SEOSchema";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { QuoteDialog } from "@/components/QuoteDialog";
import { Home, MapPin, Ruler, Wrench } from "lucide-react";
import { Link } from "react-router-dom";
import teamProfessional from "@/assets/team-professional.jpg";

const Pricing = () => {
  const examples = [
    {
      size: "Small Property",
      description: "Terraced house or small flat",
      examples: "2-3 bedroom terraced house, small flat, standard guttering",
      price: "From £80",
    },
    {
      size: "Medium Property",
      description: "Semi-detached or mid-size house",
      examples: "3-4 bedroom semi, detached bungalow, standard height",
      price: "From £120",
    },
    {
      size: "Large Property",
      description: "Large detached or multi-story",
      examples: "4+ bedroom detached, two-story property, extended guttering",
      price: "From £180",
    },
  ];

  return (
    <div>
      <SEOSchema 
        title="Gutter Cleaning Prices | Transparent Rates | Free Quotes"
        description="Clear gutter cleaning prices from £80. No hidden fees, free photo quotes. Serving Brighton, Sussex & Surrey. Call for a fast quote."
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Pricing", url: "/pricing" }
        ]}
      />
      <section className="bg-muted/30 py-12">
        <div className="container">
          <Breadcrumbs items={[{ label: "Pricing" }]} />
          <h1 className="mb-4">Gutter Cleaning Pricing — Simple & Transparent</h1>
          <p className="max-w-3xl text-lg text-muted-foreground">
            Gutter cleaning starts from just £80 for small properties. Honest pricing with zero hidden fees across Brighton & Hove. Send photos for an instant, accurate quote—the price we quote is the price you pay. No surprises.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <h2 className="mb-8 text-center">What Affects the Price?</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader>
                <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Home className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">Property Size</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Size and height of your property. Larger properties with more guttering require more time and effort.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <MapPin className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">Access & Location</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Difficult access, parking restrictions or three-story properties may require additional equipment and time.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Ruler className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">Level of Blockage</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Heavily blocked gutters with compacted debris take longer to clear than regular maintenance cleaning.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Wrench className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">Repairs Needed</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  If repairs are needed during cleaning, we'll provide a separate quote before proceeding with any work.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-muted/30 py-16">
        <div className="container">
          <h2 className="mb-8 text-center">Example Pricing</h2>
          <p className="mx-auto mb-10 max-w-2xl text-center text-muted-foreground">
            These are guide prices to give you an idea. Every property is different, so send us photos for an accurate quote.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {examples.map((example, index) => (
              <Card key={index} className="relative overflow-hidden">
                <CardHeader>
                  <div className="mb-2 text-4xl font-bold text-primary">{example.price}</div>
                  <CardTitle className="text-2xl">{example.size}</CardTitle>
                  <CardDescription className="text-base">{example.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    <strong>Typical properties:</strong> {example.examples}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-10 mx-auto max-w-3xl">
            <Card className="bg-amber-50 border-amber-200 dark:bg-amber-950/20 dark:border-amber-900">
              <CardHeader>
                <CardTitle className="text-lg">What's Included</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <p className="text-muted-foreground">
                  ✓ <strong>Complete gutter cleaning</strong> removing all leaves, moss and debris
                </p>
                <p className="text-muted-foreground">
                  ✓ <strong>Downpipe clearing</strong> to ensure proper water flow
                </p>
                <p className="text-muted-foreground">
                  ✓ <strong>Gutter inspection</strong> for damage or issues
                </p>
                <p className="text-muted-foreground">
                  ✓ <strong>Debris disposal</strong> - we take everything away
                </p>
                <p className="text-muted-foreground">
                  ✓ <strong>Photos of completed work</strong> for your records
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-secondary/50 py-16">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="overflow-hidden rounded-lg">
              <img src={teamProfessional} alt="Professional gutter cleaning team in Brighton" className="h-full w-full object-cover" loading="lazy" />
            </div>
            <div>
              <h2 className="mb-4">Professional, Transparent Service</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Our experienced team provides clear, fixed-price quotes with no hidden fees. What we quote is what you pay. Professional equipment and fully insured.
              </p>
              <p className="text-muted-foreground">
                Protecting Brighton properties from water damage with honest, reliable service.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6">Why Photo Quotes Work Best</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Photos help us see your property layout, gutter length, height, and level of blockage. This means:
              </p>
              <ul className="ml-6 space-y-2 list-disc">
                <li>More accurate quotes with no surprises on the day</li>
                <li>Faster response time - we can quote without a site visit</li>
                <li>You get a fixed price, not an estimate</li>
                <li>We can plan the right equipment and team size</li>
              </ul>
              <p className="pt-4">
                Simply use our quote form or WhatsApp us photos from different angles, and we'll get back to you within 2 hours with a fixed price.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/30 py-12">
        <div className="container">
          <h2 className="mb-6 text-center">Available Across All Our Service Areas</h2>
          <p className="mx-auto max-w-3xl text-center text-muted-foreground">
            Same transparent pricing whether you're in <Link to="/gutter-cleaning/brighton" className="text-primary hover:underline font-medium">Brighton</Link>, <Link to="/gutter-cleaning/hove" className="text-primary hover:underline font-medium">Hove</Link>, <Link to="/gutter-cleaning/worthing" className="text-primary hover:underline font-medium">Worthing</Link>, <Link to="/gutter-cleaning/haywards-heath" className="text-primary hover:underline font-medium">Haywards Heath</Link>, <Link to="/gutter-cleaning/lewes" className="text-primary hover:underline font-medium">Lewes</Link> or any surrounding area.
          </p>
        </div>
      </section>

      <section className="bg-gradient-to-br from-primary to-primary/80 py-16 text-primary-foreground">
        <div className="container text-center">
          <h2 className="mb-4 text-white">Get Your Free Photo Quote Now</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-primary-foreground/90">
            No obligation. No site visit needed. Just honest pricing within 2 hours—from residential gutter cleaning to commercial maintenance across Brighton & Hove.
          </p>
          <QuoteDialog />
        </div>
      </section>
    </div>
  );
};

export default Pricing;

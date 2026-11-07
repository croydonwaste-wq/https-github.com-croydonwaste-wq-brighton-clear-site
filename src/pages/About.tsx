import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SEOSchema } from "@/components/SEOSchema";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Award, Users, Star, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import teamProfessional from "@/assets/gutter-cleaning-team.webp";
import recyclingCenter from "@/assets/gutter-cleaning-equipment.webp";
import officeClearance from "@/assets/scaffold-tower-gutter-access.webp";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Fully Insured",
      description: "Comprehensive public liability insurance for all gutter cleaning work. Certificates available on request for your complete peace of mind.",
    },
    {
      icon: CheckCircle,
      title: "Professional Service",
      description: "Trained team, professional equipment, and commitment to excellence. We treat every property with care and respect.",
    },
    {
      icon: Award,
      title: "Expert Knowledge",
      description: "Years of experience in gutter cleaning, repairs and maintenance. We know how to protect your property from water damage.",
    },
    {
      icon: Users,
      title: "Local Team",
      description: "Based in Brighton with local knowledge. Fast response times and genuine understanding of the area and typical property types.",
    },
  ];

  const googleReviewsLink = "https://share.google/QI23nOKZGrHSjaTpu";

  return (
    <div>
      <SEOSchema 
        title="About Us | Professional Gutter Cleaners | Brighton, Sussex & Surrey"
        description="Local gutter cleaning experts serving Brighton, Sussex & Surrey. Fully insured, professional equipment & dedicated to protecting your property."
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "About", url: "/about" }
        ]}
      />
      <section className="bg-muted/30 py-12">
        <div className="container">
          <Breadcrumbs items={[{ label: "About Us" }]} />
          <h1 className="mb-4">About Gutter Cleanings Near Me</h1>
          <p className="max-w-3xl text-lg text-muted-foreground">
            Your local professional gutter cleaning experts. Fully insured and committed to protecting your property from water damage across Brighton, Hove and surrounding areas.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6">Who We Are</h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                We're a local, professional gutter cleaning business serving Brighton, Hove, Worthing, Haywards Heath and all surrounding areas. With years of hands-on experience protecting properties from water damage, we've built a reputation for fast, reliable and completely professional gutter cleaning services.
              </p>
              <p>
                Whether you're a homeowner dealing with blocked gutters in <Link to="/gutter-cleaning/brighton" className="text-primary hover:underline font-medium">Brighton</Link>, a landlord needing regular maintenance in <Link to="/gutter-cleaning/hove" className="text-primary hover:underline font-medium">Hove</Link>, or a business requiring commercial gutter cleaning in <Link to="/gutter-cleaning/worthing" className="text-primary hover:underline font-medium">Worthing</Link>—we're here to help with same-day service when you need it.
              </p>
              <p>
                Our team is fully insured with comprehensive public liability coverage and equipped with professional safety gear and specialized gutter cleaning equipment. We believe in doing the job right—safely, efficiently, and with minimal disruption to your day.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="overflow-hidden rounded-lg">
              <img src={teamProfessional} alt="Professional gutter cleaning team in Brighton with equipment" className="h-full w-full object-cover" loading="lazy" />
            </div>
            <div>
              <h2 className="mb-4">Experienced, Professional Team</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Our trained team is fully insured and committed to providing exceptional service. We handle every job with care and professionalism, from single gutter cleans to complete commercial maintenance contracts.
              </p>
              <p className="text-muted-foreground">
                Fast, efficient, and always respectful of your property.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/30 py-16">
        <div className="container">
          <h2 className="mb-12 text-center">Our Commitments</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <value.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="order-2 md:order-1">
              <h2 className="mb-4">Professional Equipment & Safety</h2>
              <p className="text-lg text-muted-foreground mb-4">
                We use professional-grade equipment including safety harnesses, ladders, and specialized gutter cleaning tools. All work carried out safely to the highest standards.
              </p>
              <p className="text-muted-foreground">
                Your safety and property protection is our top priority on every job.
              </p>
            </div>
            <div className="overflow-hidden rounded-lg order-1 md:order-2">
              <img src={recyclingCenter} alt="Professional gutter cleaning equipment in Brighton" className="h-full w-full object-cover" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/30 py-16">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="overflow-hidden rounded-lg">
              <img src={officeClearance} alt="Commercial gutter cleaning services in Brighton" className="h-full w-full object-cover" loading="lazy" />
            </div>
            <div>
              <h2 className="mb-4">Commercial & Residential Services</h2>
              <p className="text-lg text-muted-foreground mb-4">
                From home gutter cleaning to commercial maintenance contracts, we serve both residential and commercial clients across Brighton & Hove. Flexible scheduling and minimal disruption guaranteed.
              </p>
              <p className="text-muted-foreground">
                Same professional service whether you need a single property cleaned or ongoing commercial maintenance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <h2 className="mb-4 text-center">Customer Reviews</h2>
          <p className="mx-auto mb-6 max-w-2xl text-center text-muted-foreground">
            Read what customers say about us on Google, or leave a review after your job.
          </p>
          <div className="text-center">
            <a 
              href={googleReviewsLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:underline"
            >
              <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
              <span className="font-semibold">Read All Reviews on Google</span>
            </a>
          </div>
        </div>
      </section>

      <section className="bg-secondary/50 py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6">Why Regular Gutter Cleaning Matters</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Regular gutter cleaning is essential for protecting your property. When gutters become blocked, water can:
              </p>
              <ul className="ml-6 space-y-2 list-disc">
                <li>Overflow causing damage to walls, windows and doors</li>
                <li>Pool around foundations leading to structural problems</li>
                <li>Damage fascias, soffits and roof timbers with damp</li>
                <li>Create ideal conditions for moss and algae growth</li>
                <li>Attract pests and insects to blocked, stagnant water</li>
              </ul>
              <p className="pt-4">
                When you choose Gutter Cleanings Near Me, you're choosing professional protection for one of your most valuable assets—your property.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6">Insurance & Professional Standards</h2>
            <p className="mb-6 text-lg text-muted-foreground">
              We hold all necessary insurance and operate to professional standards:
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardContent className="pt-6">
                  <Shield className="mx-auto mb-3 h-10 w-10 text-primary" />
                  <h3 className="mb-2 text-lg font-semibold">Public Liability Insurance</h3>
                  <p className="text-sm text-muted-foreground">
                    Comprehensive public liability insurance covering all gutter cleaning work. Certificates available on request.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <Shield className="mx-auto mb-3 h-10 w-10 text-primary" />
                  <h3 className="mb-2 text-lg font-semibold">Professional Equipment</h3>
                  <p className="text-sm text-muted-foreground">
                    All safety equipment maintained to professional standards. Regular safety training for all team members.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

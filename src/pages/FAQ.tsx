import { SEOSchema } from "@/components/SEOSchema";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQSection } from "@/components/FAQSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone, MessageCircle } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "How often should I get my gutters cleaned?",
      answer: "We recommend having your gutters cleaned at least twice a year—typically in late autumn after leaves have fallen, and again in spring. Properties surrounded by trees may need more frequent cleaning every 3-4 months to prevent blockages. Regular cleaning prevents expensive water damage and extends the life of your gutter system."
    },
    {
      question: "What are the signs that my gutters are blocked?",
      answer: "Common signs include: water overflowing from gutters during rain, sagging gutters, visible plant growth in gutters, water stains on exterior walls, damp patches inside your home, standing water near foundations, or birds nesting in your gutters. If you notice any of these signs, it's time for professional gutter cleaning."
    },
    {
      question: "How much does gutter cleaning cost in Brighton, Hove and Sussex?",
      answer: "Typical gutter cleaning costs range from £60-£150 depending on property size, gutter length, accessibility and condition. Factors affecting cost include: property height, gutter type, level of blockage, and whether downpipes need clearing. We provide free, no-obligation quotes. WhatsApp us photos or call 01273 569347 for an instant estimate."
    },
    {
      question: "Do you use ladders or gutter vacuum systems?",
      answer: "We primarily use professional SkyVac gutter vacuum systems that allow us to clean gutters safely from ground level, reaching up to three storeys. This is safer for our operatives, causes no damage to gardens or property, and doesn't require accessing neighbouring properties. For particularly stubborn blockages, gutter repairs or inspections, we may use ladders where necessary."
    },
    {
      question: "Can you clean gutters above conservatories and extensions?",
      answer: "Yes, our gutter vacuum equipment is perfect for cleaning gutters above conservatories, extensions, garages and other hard-to-reach areas. We can clean them safely without the risk of damaging fragile roofs or needing to access the roof structure."
    },
    {
      question: "Are you insured and what does your insurance cover?",
      answer: "Yes, we are fully insured with £5 million public liability insurance. This covers accidental damage to your property, injury to third parties, and damage caused during our work. All our operatives are trained in safe working practices and comply with UK health and safety regulations. We can provide proof of insurance on request."
    },
    {
      question: "Do I need to be home during the gutter cleaning?",
      answer: "No, you don't need to be home as long as we have access to the outside of your property and any locked side gates. We work from ground level using our vacuum equipment, so we don't need internal access. We can send you before and after photos once the work is complete."
    },
    {
      question: "Do you take before and after photos?",
      answer: "Yes, we can provide before and after photos of your gutters at no extra cost. This allows you to see the condition of your gutters before cleaning, the debris removed, and the final clean result. Photos are particularly useful if you're not home during the work or for landlords managing rental properties."
    },
    {
      question: "What causes gutters to become blocked?",
      answer: "The most common causes are: fallen leaves (especially in autumn), moss and lichen growth from nearby trees or roofs, bird nests and debris, silt and soil buildup, wind-blown debris, and broken roof tiles or shingles. Properties near trees are particularly prone to blockages and may need more frequent cleaning."
    },
    {
      question: "Can blocked gutters cause damp inside my home?",
      answer: "Yes, absolutely. When gutters overflow, water runs down external walls and can penetrate through brickwork and mortar joints. This causes damp patches on interior walls, mould growth, rotting window frames, and can even damage foundations if left untreated. Regular gutter cleaning prevents these expensive problems."
    },
    {
      question: "Do you fix minor gutter repairs while cleaning?",
      answer: "Yes, we can fix minor gutter repairs during our visit, such as re-securing loose brackets, resealing small leaks, and clearing blocked downpipes. For more extensive repairs like replacing sections, realigning gutters, or fascia repairs, we'll provide a separate quote. We'll always advise you of any issues we find during cleaning."
    },
    {
      question: "How quickly can you attend for emergency gutter cleaning in Brighton and Hove?",
      answer: "For emergency situations where gutters are overflowing and causing immediate water damage, we aim to attend the same day or within 24 hours depending on your location across Brighton, Hove, Sussex and Surrey. Call us on 01273 569347 and we'll prioritise your job. We work 7 days a week including weekends and bank holidays."
    },
    {
      question: "Do you provide commercial gutter cleaning services?",
      answer: "Yes, we provide gutter cleaning for commercial buildings, offices, retail units, warehouses, schools, and industrial properties across Brighton, Hove, Sussex and Surrey. We can work outside business hours if required and provide compliance documentation and risk assessments for your records. Contact us for a commercial quote."
    },
    {
      question: "Can you work in all weathers?",
      answer: "We can work in light rain and overcast conditions. However, we won't work in heavy rain, high winds, ice, or snow as it's unsafe for our operatives and the gutter vacuum equipment doesn't work effectively in heavy rain. We'll reschedule if weather conditions are unsuitable on the day."
    },
    {
      question: "What areas of Brighton, Hove, Sussex and Surrey do you cover?",
      answer: "We cover Brighton, Hove, Portslade, Peacehaven, Worthing, Crawley, Horsham, Eastbourne, Guildford, Woking, Redhill, Reigate, Epsom, Leatherhead, Dorking, Croydon and all surrounding towns and villages across Sussex and Surrey. If you're unsure whether we cover your area, call 01273 569347 or check our Areas We Cover page."
    },
    {
      question: "Do you clean fascias and soffits as well as gutters?",
      answer: "Yes, we offer fascia and soffit cleaning using specialist soft washing techniques that safely remove algae, moss, dirt and grime without damaging uPVC or paintwork. This can be done at the same time as gutter cleaning for a complete roofline refresh. Ask for a combined quote."
    },
    {
      question: "Can you unblock downpipes and underground drains?",
      answer: "Yes, we can unblock downpipes using high-pressure flushing equipment to remove compacted leaves, moss, and debris. We can also clear blockages in underground drains and gullies connected to your downpipes. For complex drainage issues, we can arrange CCTV drain surveys to identify the exact problem."
    },
    {
      question: "Do you offer annual gutter maintenance plans?",
      answer: "Yes, we offer annual gutter maintenance plans with scheduled cleaning visits (typically twice a year). Benefits include: discounted rates compared to one-off cleans, priority service, free minor repairs up to an agreed value, reminder service before each visit, and peace of mind that your gutters are maintained year-round. Perfect for homeowners and landlords."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept cash, bank transfer, and card payments. Payment is due on completion of the work. For commercial clients and maintenance plans, we can provide invoices with payment terms if required."
    },
    {
      question: "Do you guarantee your work?",
      answer: "Yes, we guarantee all our workmanship. If you're not satisfied with the gutter cleaning, contact us within 7 days and we'll return to resolve any issues at no extra cost. For gutter repairs, we provide guarantees on materials and workmanship—the specific guarantee period depends on the type of repair and will be confirmed in your quote."
    },
    {
      question: "What types of gutters can you clean?",
      answer: "We clean all types of gutters including: uPVC, cast iron, aluminium, steel, copper, box gutters, valley gutters, and Ogee profile gutters. Our gutter vacuum equipment and techniques are suitable for residential, commercial, and industrial properties of all types."
    },
    {
      question: "How long does gutter cleaning take?",
      answer: "A typical residential property takes 1-2 hours depending on property size, gutter length, and level of blockage. Larger properties or heavily blocked gutters may take longer. We'll give you an estimated timeframe when providing your quote."
    },
    {
      question: "Will you clean up after the gutter cleaning?",
      answer: "Yes, absolutely. We clear away all debris removed from your gutters and leave your property clean and tidy. We bag up the waste and dispose of it responsibly. Any mess is our responsibility, not yours."
    },
    {
      question: "Can you clean gutters on period properties and listed buildings in Brighton and Hove?",
      answer: "Yes, we have extensive experience working on period properties, Victorian and Edwardian terraces, and listed buildings across Brighton and Hove. Our ground-level gutter vacuum equipment is ideal for these properties as it avoids the need for ladders against period facades and doesn't risk damage to historic features."
    },
    {
      question: "Do you work on weekends and bank holidays?",
      answer: "Yes, we work 7 days a week including weekends and bank holidays to fit around your schedule. Weekend and evening appointments are available for homeowners who work during the week. There's no extra charge for weekend work (excluding emergency call-outs which may carry a premium)."
    }
  ];

  return (
    <>
      <SEOSchema
        title="Gutter Cleaning FAQ | Your Questions Answered | Sussex & Surrey"
        description="Common gutter cleaning questions answered. Prices, services, insurance & more. Serving Brighton, Sussex & Surrey. Call 01273 569347."
        type="FAQPage"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "FAQ", url: "/faq" }
        ]}
        faqs={faqs}
      />

      <div className="container py-12">
        <Breadcrumbs items={[{ label: "FAQ" }]} />

        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Everything you need to know about our gutter cleaning services in Brighton, Hove, Sussex and Surrey. 
            Can't find your answer? Call us on 01273 569347.
          </p>
        </div>

        <FAQSection faqs={faqs} title="" />

        {/* CTA Section */}
        <div className="mt-16 rounded-lg bg-primary/5 p-8 text-center md:p-12">
          <h2 className="mb-4 text-2xl font-bold md:text-3xl">
            Still Have Questions?
          </h2>
          <p className="mb-6 text-muted-foreground">
            Call us for expert advice or WhatsApp photos of your gutters for a fast, free quote.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" asChild>
              <a href="tel:01273569347">
                <Phone className="mr-2 h-5 w-5" />
                Call 01273 569347
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="https://wa.me/441273569347?text=I%20have%20a%20question%20about%20gutter%20cleaning" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp Us
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/contact">Get Free Quote</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;

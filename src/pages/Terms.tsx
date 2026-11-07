import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SEOSchema } from "@/components/SEOSchema";

const Terms = () => {
  return (
    <div>
      <SEOSchema 
        title="Terms & Conditions | Gutter Cleanings Near Me | Service Terms"
        description="Terms and conditions for our gutter cleaning services. Transparent pricing, cancellation policy & service guarantees."
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Terms & Conditions", url: "/terms" }
        ]}
      />
      
      <section className="bg-muted/30 py-12">
        <div className="container">
          <Breadcrumbs items={[{ label: "Terms & Conditions" }]} />
          <h1 className="mb-4">Terms & Conditions</h1>
          <p className="text-muted-foreground">
            Gutter Cleanings Near Me is a professional gutter cleaning service. Fully insured for domestic and commercial gutter cleaning across Brighton, Hove & Sussex.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-4xl">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            
            <h2>Estimates</h2>
            <p>
              Price estimates are given in good faith. All prices that are given before work is conducted are estimates and not quotations unless specifically stated in writing. Final size, weight and onsite location are the determinant of final prices.
            </p>

            <h2>Prices</h2>
            <p>
              Our gutter cleaning prices are calculated based on property type, gutter length, height, accessibility, and condition. Our minimum charge is £80. Prices charged for work completed are a combination of property size, gutter length, number of storeys, and complexity of access required.
            </p>
            <p>
              Final pricing may vary from estimates if the actual condition of gutters differs significantly from what was described or shown in photos. Additional charges may apply for severely blocked gutters requiring extra time, repairs needed during cleaning, or difficult access situations requiring specialist equipment. We will always inform you of any additional charges before proceeding with extra work.
            </p>

            <h2>Payment</h2>
            <p>
              Payment shall be made at time of service completion unless specifically agreed in writing or you are an account holder with Gutter Cleanings Near Me.
            </p>
            <p>
              If payments are not made on time by account holders, we reserve the right to charge £50 administration fee per week in addition to an overall 7% surcharge.
            </p>
            <p>
              In the circumstances that you do not pay Gutter Cleanings Near Me, we reserve the right to pursue payment through legal channels and may report non-payment to credit reference agencies.
            </p>
            <p>
              If you have a credit account with Gutter Cleanings Near Me, invoices must be paid within the period time agreed. If you do not have a credit account, invoices must be paid immediately. If you do not make the sufficient payment, any other services scheduled shall be cancelled until you make payment. This does not limit any other remedies and rights we may have.
            </p>
            <p>
              Any client with a credit account may be subject to a credit check. The amount of credit is reflected by the health of your credit profile as we see it. If your credit profile changes and we feel we need to reduce the amount of credit we can offer you, we will then issue a request for any amount over this figure as it will become due.
            </p>
            <p>
              We reserve the right to cancel your account without notice for any reason including but not limited to if we suspect you have been involved in any corruption, bribery, malpractices, illegal activities, offering employment to our staff, trying to influence decisions of our staff, conduct threatening behaviour, or cause avoidable difficulties towards our staff members. If your account is closed, all outstanding invoices are due immediately.
            </p>

            <h2>Privacy and Data Protection</h2>
            <p>
              We will only use your information to complete our service to you and will also use your data to notify you of similar services we offer unless you tell us otherwise. We may also pass your information to credit reference agencies if you are applying for an account with us. In compliance with the Data Protection Act, we may transfer your information and data as a data controller to any relevant party.
            </p>
            <p>
              Please see our <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a> for full details on how we handle your personal data.
            </p>

            <h2>Force Majeure</h2>
            <p>
              We are not liable for not completing, fulfilling, or delays in our service due to any Force Majeure. Force Majeure includes but is not limited to any accidents, epidemic, riots, terrorism, civil unrest, war, threat of war, weather including rain, flooding, wind, storms, earthquakes, subsidence, natural disasters. Issues with transport including vehicles, trains, ports, highways, telephone networks.
            </p>
            <p>
              If a Force Majeure event is taking place and we cannot conduct our service, we reserve the right to cancel a service, or delay it at a time that it is suitable, or extend the time taken to complete it. We will take reasonable measures to try and work around the Force Majeure event, but we cannot guarantee or imply this.
            </p>

            <h2>Service Availability</h2>
            <p>
              Gutter Cleanings Near Me operates year-round to serve our customers across Brighton, Hove, and the surrounding Sussex area. We offer flexible scheduling with same-day and next-day gutter cleaning services subject to availability and weather conditions.
            </p>

            <h2>Cancellations</h2>
            <p>
              Cancellations must be made at least 24 hours before the scheduled appointment time. Cancellations made with less than 24 hours notice may be subject to a cancellation fee of up to 50% of the quoted price.
            </p>

            <h2>Insurance and Liability</h2>
            <p>
              Gutter Cleanings Near Me carries full public liability insurance for all domestic and commercial gutter cleaning work. We take every precaution to protect your property during our work. Any damage caused by our team will be reported immediately and resolved through our insurance provider.
            </p>

            <h2>Contact Information</h2>
            <p>
              For any questions regarding these terms and conditions, please contact us:
            </p>
            <ul>
              <li>Phone: 01273 569347</li>
              <li>Email: info@guttercleaningsnearme.co.uk</li>
              <li>WhatsApp: 01273 569347</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;

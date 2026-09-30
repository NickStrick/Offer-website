import type { Metadata } from "next";
import Link from "next/link";

import LegalLayout from "../components/LegalLayout";
import { CONTACT_EMAIL } from "../offers/copy";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms that apply when you use strickerdigital.com or purchase Stricker Digital programs and services.",
};

// Review with the business owner whenever an offer, price, or guarantee changes.
const LAST_UPDATED = "September 30, 2026";
// Legal name of the sole proprietor operating under the "Stricker Digital" name.
const OWNER_LEGAL_NAME = "Nickolas Stricker";

export default function TermsPage() {
  const email = <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>;

  return (
    <LegalLayout
      title="Terms of Service"
      lastUpdated={LAST_UPDATED}
      intro={
        <p>
          These terms apply when you use strickerdigital.com or buy any Stricker Digital program or service. By using
          the site or making a purchase, you agree to them.
        </p>
      }
    >
      <h2>1. Who we are</h2>
      <p>
        Stricker Digital is operated by {OWNER_LEGAL_NAME}, a sole proprietor based in Chicago, Illinois
        (&quot;Stricker Digital,&quot; &quot;we,&quot; or &quot;us&quot;). You can reach us at {email}.
      </p>

      <h2>2. What we offer</h2>
      <ul>
        <li>
          <strong>Free resources</strong>, such as the 2026 Enterprise Infrastructure Checklist.
        </li>
        <li>
          <strong>Digital programs</strong>, such as The Boardroom Communication &amp; Iteration System, delivered
          online for self-paced study.
        </li>
        <li>
          <strong>Live cohorts</strong>, such as The 5-Day Boardroom Gravity &amp; SE Transition Accelerator, delivered
          live online on scheduled dates.
        </li>
        <li>
          <strong>Consulting services</strong>, including the 48-Hour Enterprise Audit and Enterprise Implementation
          retainers.
        </li>
      </ul>
      <p>
        Offer details, prices, and availability are described on our <Link href="/offers">offers page</Link> and may
        change. The price and description shown when you purchase are the ones that apply to your purchase.
      </p>

      <h2>3. Payment</h2>
      <p>
        Prices are in US dollars. Digital programs, cohort seats, and audits are paid in full before access or work
        begins, unless we agree otherwise in writing. Payments are processed by our payment provider (such as Stripe);
        we do not store your full card details. Implementation retainers follow the payment schedule in the signed
        engagement agreement.
      </p>

      <h2>4. Refunds and guarantees</h2>
      <p>
        Refunds and guarantees are covered by our <Link href="/refund-policy">Refund Policy</Link>, which is part of
        these terms.
      </p>

      <h2>5. Digital programs</h2>
      <p>
        When you purchase a digital program, you receive a personal, non-transferable license to access and use the
        materials for your own learning and work. You may not share your login, resell, republish, or distribute the
        materials, including videos, templates, playbooks, and blueprints.
      </p>

      <h2>6. Live cohorts</h2>
      <p>
        Cohort dates and session times are shared before the cohort begins. Seats are limited and reserved in the
        order applications are accepted. We may decline an application if the cohort isn&apos;t a good fit. If we
        need to reschedule a session, we will give as much notice as possible and offer a make-up session or
        recording. Please treat other participants with respect; we may remove anyone who disrupts a session.
      </p>

      <h2>7. Audits and consulting</h2>
      <ul>
        <li>
          <strong>Your cooperation.</strong> Timelines, including 48-hour delivery, start once we have the access,
          information, and kickoff call agreed for the engagement.
        </li>
        <li>
          <strong>Recommendations.</strong> Audit deliverables are expert recommendations. Your team is responsible
          for deciding which to implement and for implementing them, unless we are engaged under a separate
          implementation agreement.
        </li>
        <li>
          <strong>No guaranteed business results.</strong> We don&apos;t guarantee specific revenue, conversion,
          performance, or cost outcomes. The only guarantees are those described in our Refund Policy.
        </li>
        <li>
          <strong>Access and security.</strong> Please give us the minimum access needed, such as read-only or staging
          access. We use access only for the engagement and ask you to revoke it when the work is complete.
        </li>
      </ul>
      <p>
        Larger engagements, including Enterprise Implementation retainers, are governed by a separate signed
        agreement. If that agreement conflicts with these terms, the signed agreement applies.
      </p>

      <h2>8. Confidentiality</h2>
      <p>
        We keep the non-public information you share with us confidential and use it only to deliver our services. We
        won&apos;t name you as a client or publish results about your business without your permission.
      </p>

      <h2>9. Intellectual property</h2>
      <p>
        We keep ownership of our pre-existing materials, frameworks, templates, and know-how. Once paid in full, you
        may use the deliverables created for you (such as your audit blueprint and spec sheet) inside your business.
        Everything on this site, including text, images, and course materials, belongs to Stricker Digital unless
        stated otherwise.
      </p>

      <h2>10. Your information</h2>
      <p>
        When you submit a form, we collect the details you provide (such as your name, email, company, and message) to
        respond to you and deliver what you asked for. We do not sell your personal information, and you can ask us to
        stop contacting you or delete your details at any time by emailing {email}.
      </p>

      <h2>11. Disclaimers</h2>
      <p>
        Free resources, site content, and course materials are for general educational purposes and are provided
        &quot;as is.&quot; They are not legal, financial, or employment advice, and we don&apos;t guarantee any
        particular career outcome, such as a job offer or salary.
      </p>

      <h2>12. Limitation of liability</h2>
      <p>
        To the fullest extent allowed by law, Stricker Digital is not liable for indirect, incidental, or
        consequential damages, including lost profits, revenue, or data. Our total liability for any claim related to
        a purchase is limited to the amount you paid for that purchase.
      </p>

      <h2>13. Governing law</h2>
      <p>
        These terms are governed by the laws of the State of Illinois. Any dispute will be handled in the state or
        federal courts located in Cook County, Illinois, unless we agree otherwise in writing.
      </p>

      <h2>14. Changes to these terms</h2>
      <p>
        We may update these terms from time to time. The date at the top of this page shows the latest version. The
        terms in effect when you make a purchase apply to that purchase.
      </p>

      <h2>15. Contact</h2>
      <p>Questions about these terms? Email {email}.</p>
    </LegalLayout>
  );
}

import type { Metadata } from "next";
import Link from "next/link";

import LegalLayout from "../components/LegalLayout";
import { CONTACT_EMAIL } from "../offers/copy";

export const metadata: Metadata = {
  title: "Refund Policy",
  description: "Refund terms and guarantees for Stricker Digital programs and services.",
};

// Review with the business owner whenever an offer, price, or guarantee changes.
const LAST_UPDATED = "September 30, 2026";

export default function RefundPolicyPage() {
  const email = <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>;

  return (
    <LegalLayout
      title="Refund Policy"
      lastUpdated={LAST_UPDATED}
      intro={
        <p>
          We want every client to feel their money was well spent. This policy explains the guarantees attached to
          each offer and how to request a refund. It is part of our <Link href="/terms">Terms of Service</Link>.
        </p>
      }
    >
      <h2>How to request a refund</h2>
      <p>
        Email {email} from the address you used to purchase, with the offer name and a short note. You don&apos;t need
        to justify a request covered by a guarantee below. Approved refunds are returned to your original payment
        method, usually within 5 to 10 business days depending on your bank.
      </p>

      <h2>Free resources</h2>
      <p>
        The 2026 Enterprise Infrastructure Checklist, the weekly notes, videos, and class waitlists cost nothing, so
        there is nothing to refund.
      </p>

      <h2>Revenue Leak Audit ($800)</h2>
      <h3>Clear Answers, or Your Money Back</h3>
      <p>
        Look over your map and ranked fix list. If your store&apos;s or app&apos;s problems aren&apos;t crystal clear
        within 24 hours of delivery, tell us and we will issue a prompt, 100% refund, no questions asked.
      </p>
      <h3>Cancelling before kickoff</h3>
      <p>
        If you cancel before the audit kickoff, you receive a full refund. Once the 24-hour window after delivery has
        passed, the audit fee is non-refundable.
      </p>

      <h2>Done-for-you fixes</h2>
      <p>
        Fix projects are priced with a written, fixed quote. Payment, cancellation, and refund terms are included in
        that quote, and the quote applies if anything in it differs from this page.
      </p>

      <h2>Chargebacks</h2>
      <p>
        Please contact us before disputing a charge with your bank. We honor every guarantee on this page, and
        reaching out first is the fastest way to get your money back.
      </p>

      <h2>Contact</h2>
      <p>Questions about this policy? Email {email}.</p>
    </LegalLayout>
  );
}

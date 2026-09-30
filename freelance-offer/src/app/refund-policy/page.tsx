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
        The 2026 Enterprise Infrastructure Checklist and other free resources cost nothing, so there is nothing to
        refund.
      </p>

      <h2>The Boardroom Communication &amp; Iteration System ($500)</h2>
      <p>
        If the Masterclass isn&apos;t right for you, email us within <strong>7 days of purchase</strong> for a full
        refund. After 7 days, purchases are final. Access to the course materials ends when a refund is issued.
      </p>

      <h2>The 5-Day Boardroom Gravity &amp; SE Transition Accelerator ($2,500 per seat)</h2>
      <h3>100% Day-2 Money-Back Guarantee</h3>
      <p>
        If you don&apos;t feel your presentation skills have leveled up by the end of day 2 of your cohort, tell us
        before day 3 begins and we will refund your seat in full, on the spot.
      </p>
      <h3>Cancelling before your cohort starts</h3>
      <ul>
        <li>
          <strong>7 or more days before the start date:</strong> full refund, or a free transfer to a later cohort.
        </li>
        <li>
          <strong>Less than 7 days before the start date:</strong> a free transfer to the next available cohort.
        </li>
      </ul>
      <p>After day 2 of the cohort, seats are non-refundable.</p>

      <h2>The 48-Hour Enterprise System Latency &amp; Conversion Vault ($5,000)</h2>
      <h3>24-Hour Total Clarity Guarantee</h3>
      <p>
        Review your Excalidraw system topology and refactoring spec sheet. If within 24 hours of delivery you
        don&apos;t feel you received total clarity on your application&apos;s bottlenecks, let us know and we will
        issue a prompt, 100% refund, no questions asked.
      </p>
      <h3>Cancelling before kickoff</h3>
      <p>
        If you cancel before the audit kickoff call, you receive a full refund. Once the 24-hour window after delivery
        has passed, the audit fee is non-refundable.
      </p>

      <h2>Enterprise AI Agent &amp; Digital Vault Implementation ($50,000)</h2>
      <p>
        Implementation retainers are governed by the signed engagement agreement for that project, including its
        payment schedule, cancellation terms, and any refund terms. If anything in that agreement differs from this
        page, the signed agreement applies.
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

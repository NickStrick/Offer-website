import type { Metadata } from "next";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck, faCircleCheck, faEnvelope } from "@fortawesome/free-solid-svg-icons";

import Headline from "../../../components/Headline";
import Footer from "../../../components/Footer";
import BookCallButton from "../../../components/BookCallModal";
import { getStripe } from "../../../lib/stripe";
import { CONTACT_EMAIL } from "../../../offers/copy";
import { getStripeProduct } from "../../../offers/products";

export const metadata: Metadata = {
  title: "Thank you!",
  robots: { index: false, follow: false },
};

// Reads the session from Stripe on every visit.
export const dynamic = "force-dynamic";

type Props = {
  params: Promise<{ product: string }>;
  searchParams: Promise<{ session_id?: string }>;
};

export default async function CheckoutSuccessPage({ params, searchParams }: Props) {
  const product = getStripeProduct((await params).product);
  if (!product) notFound();

  const { session_id } = await searchParams;
  const stripe = getStripe();
  const session = stripe && session_id ? await stripe.checkout.sessions.retrieve(session_id).catch(() => null) : null;

  // Landed here without finishing payment: send them back to the form.
  if (!session || session.status !== "complete" || session.metadata?.productId !== product.id) {
    redirect(`/checkout/${product.id}`);
  }

  const name = session.customer_details?.name ?? undefined;
  const email = session.customer_details?.email ?? undefined;

  return (
    <main className="min-h-screen bg-page text-white">
      <Headline eyebrow={product.name} headlineText={product.success.title} subheadlineText={product.success.subtitle} />

      <section className="bg-page px-6 pb-28">
        <div className="mx-auto max-w-3xl">
          <div className="surface-card p-7 md:p-10">
            <h2 className="text-2xl font-semibold md:text-3xl">What happens next</h2>
            <ol className="mt-6 space-y-4">
              {product.success.steps.map((step) => (
                <li key={step} className="flex gap-3 text-base leading-relaxed text-zinc-200">
                  <FontAwesomeIcon icon={faCircleCheck} className="mt-1 w-5 shrink-0 text-green-400" aria-hidden />
                  <span>{step}</span>
                </li>
              ))}
            </ol>
            {email ? (
              <p className="mt-6 text-sm text-ink-subtle">Your receipt is on its way to {email}.</p>
            ) : null}
          </div>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <BookCallButton className="btn-gradient gap-2" prefill={{ name, email }}>
              <FontAwesomeIcon icon={faCalendarCheck} aria-hidden />
              Book your kickoff call
            </BookCallButton>
            <a href={`mailto:${CONTACT_EMAIL}`} className="btn-inverted gap-2">
              <FontAwesomeIcon icon={faEnvelope} aria-hidden />
              Questions? {CONTACT_EMAIL}
            </a>
          </div>
          <p className="mt-6 text-center text-sm text-ink-subtle">
            <Link href="/" className="underline-offset-4 hover:underline">Back to home</Link>
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}

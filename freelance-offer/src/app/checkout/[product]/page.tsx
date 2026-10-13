import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faLock, faShieldHalved } from "@fortawesome/free-solid-svg-icons";

import Footer from "../../components/Footer";
import { contactHref } from "../../offers/copy";
import { getStripeProduct, stripeProducts } from "../../offers/products";
import EmbeddedCheckoutPanel from "./EmbeddedCheckoutPanel";

type Params = { product: string };

export function generateStaticParams(): Params[] {
  return stripeProducts.map((p) => ({ product: p.id }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const product = getStripeProduct((await params).product);
  return {
    title: product ? `Checkout: ${product.name}` : "Checkout",
    robots: { index: false, follow: false },
  };
}

export default async function CheckoutPage({ params }: { params: Promise<Params> }) {
  const product = getStripeProduct((await params).product);
  if (!product) notFound();

  return (
    <main className="min-h-screen bg-page text-white">
      <section className="px-6 pb-24 pt-28 md:pt-32">
        <div className="mx-auto grid max-w-6xl items-start gap-10 md:grid-cols-[1fr_1.25fr]">
          <div>
            <div className="eyebrow">Checkout</div>
            <h1 className="mt-4 text-3xl font-semibold md:text-4xl" style={{ letterSpacing: "-0.03em" }}>
              {product.name}
            </h1>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">{product.description}</p>
            <div className="mt-6 text-5xl font-semibold" style={{ letterSpacing: "-0.04em" }}>
              {product.price}
            </div>

            <ul className="mt-8 space-y-3 border-t border-white/[0.06] pt-6">
              {product.includes.map((item) => (
                <li key={item} className="flex gap-3 text-[15px] leading-relaxed text-zinc-200">
                  <FontAwesomeIcon icon={faCircleCheck} className="mt-1 w-4 shrink-0 text-green-400" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {product.guarantee ? (
              <div className="mt-8 flex gap-3 rounded-xl border border-green-500/25 bg-green-500/[0.07] p-4">
                <FontAwesomeIcon icon={faShieldHalved} className="mt-0.5 shrink-0 text-green-400" aria-hidden />
                <div>
                  <div className="text-sm font-semibold">{product.guarantee.title}</div>
                  <p className="mt-1 text-[13px] leading-relaxed text-ink-muted">{product.guarantee.body}</p>
                </div>
              </div>
            ) : null}

            <p className="mt-8 flex items-center gap-2 text-sm text-ink-subtle">
              <FontAwesomeIcon icon={faLock} aria-hidden />
              Secure payment by Stripe. Your card details never touch my servers.
            </p>
            <p className="mt-3 text-sm text-ink-subtle">
              Questions first?{" "}
              <a href={contactHref.audit} className="text-green-400 underline-offset-4 hover:underline">
                Send me a message
              </a>
              . By paying you agree to the{" "}
              <a href="/terms" className="underline-offset-4 hover:underline">terms</a> and{" "}
              <a href="/refund-policy" className="underline-offset-4 hover:underline">refund policy</a>.
            </p>
          </div>

          <EmbeddedCheckoutPanel productId={product.id} />
        </div>
      </section>

      <Footer />
    </main>
  );
}

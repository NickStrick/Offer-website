import { AUDIT_PRICE, auditOffer, welcomePages } from "./copy";

/**
 * Everything the site sells. Add a product here and its checkout works:
 * - "stripe" products get an on-site checkout page at /checkout/<id> (services like the audit).
 * - "lemonsqueezy" products link to their Lemon Squeezy checkout (digital downloads like PDFs).
 */
type BaseProduct = {
  id: string;
  name: string;
  /** Shown as a one-line summary on the checkout page and on the Stripe receipt. */
  description: string;
  /** Display price, e.g. "$400". */
  price: string;
};

export type StripeProduct = BaseProduct & {
  provider: "stripe";
  /** Short list shown beside the payment form. */
  includes: readonly string[];
  guarantee?: { title: string; body: string };
  /** Shown on /checkout/<id>/success once payment goes through. */
  success: { title: string; subtitle: string; steps: readonly string[] };
};

export type LemonSqueezyProduct = BaseProduct & {
  provider: "lemonsqueezy";
  /** The product's checkout link from the Lemon Squeezy dashboard ("Share" → checkout URL). */
  checkoutUrl: string;
};

export type Product = StripeProduct | LemonSqueezyProduct;

export const products = {
  audit: {
    id: "audit",
    provider: "stripe",
    name: "Revenue Leak Audit",
    description: "Find out exactly why visitors leave without buying. Delivered within 48 hours of kickoff.",
    price: AUDIT_PRICE,
    includes: auditOffer.features.map((f) => `${f.title}, ${f.text}`),
    guarantee: auditOffer.guarantee,
    success: {
      title: "You're in! Let's book your kickoff.",
      subtitle: "Payment received. Pick a time for your kickoff call, and your audit starts there.",
      steps: [
        "Book your kickoff call below. It takes 30 seconds.",
        ...welcomePages["architecture-audit"].steps.filter((step) => !/^Watch\b/.test(step)),
      ],
    },
  },
} satisfies Record<string, Product>;

export type ProductId = keyof typeof products;

export const stripeProducts = (Object.values(products) as Product[]).filter(
  (p): p is StripeProduct => p.provider === "stripe",
);

export function getStripeProduct(id: string): StripeProduct | undefined {
  return stripeProducts.find((p) => p.id === id);
}

/** Where a "Buy" button should go for a product. */
export function checkoutHref(product: Product): string {
  return product.provider === "stripe" ? `/checkout/${product.id}` : product.checkoutUrl;
}

/** "$400" → 40000 (Stripe wants whole cents). */
export function priceInCents(price: string): number {
  const dollars = Number(price.replace(/[^0-9.]/g, ""));
  if (!Number.isFinite(dollars) || dollars <= 0) throw new Error(`Bad price: ${price}`);
  return Math.round(dollars * 100);
}

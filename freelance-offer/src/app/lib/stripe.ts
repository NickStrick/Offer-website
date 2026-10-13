import Stripe from "stripe";

let client: Stripe | null = null;

/** Server-side Stripe client, or null until STRIPE_SECRET_KEY is set (checkout then shows a friendly fallback). */
export function getStripe(): Stripe | null {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) return null;
  // The Checkout form (ui_mode "form") is a Stripe beta and needs this API version + preview flag.
  // The SDK's types only list its own default version, hence the cast.
  client ??= new Stripe(key, {
    apiVersion: "2026-03-25.dahlia; custom_checkout_payment_form_preview=v1" as Stripe.LatestApiVersion,
  });
  return client;
}

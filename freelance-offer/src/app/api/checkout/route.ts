import { NextResponse, type NextRequest } from "next/server";

import { getStripe } from "../../lib/stripe";
import { getStripeProduct, priceInCents } from "../../offers/products";

/**
 * Starts an on-site (embedded) Stripe Checkout for a product in offers/products.ts and returns the
 * client secret the checkout page needs. Prices come from our product list, never from the browser.
 */
export async function POST(req: NextRequest) {
  const stripe = getStripe();
  if (!stripe) {
    return NextResponse.json({ error: "Checkout isn't set up yet." }, { status: 503 });
  }

  const body = (await req.json().catch(() => null)) as { productId?: unknown } | null;
  const product = typeof body?.productId === "string" ? getStripeProduct(body.productId) : undefined;
  if (!product) {
    return NextResponse.json({ error: "Unknown product." }, { status: 400 });
  }

  try {
    const session = await stripe.checkout.sessions.create({
      // Settings from Stripe Checkout Studio
      ui_mode: "form",
      billing_address_collection: "auto",
      phone_number_collection: { enabled: false },
      automatic_tax: { enabled: false },
      submit_type: "auto",
      integration_identifier: "custom_embedded_web_0001",
      mode: "payment",
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: "usd",
            unit_amount: priceInCents(product.price),
            product_data: { name: product.name, description: product.description },
          },
        },
      ],
      metadata: { productId: product.id },
      return_url: `${req.nextUrl.origin}/checkout/${product.id}/success?session_id={CHECKOUT_SESSION_ID}`,
    });

    return NextResponse.json({ client_secret: session.client_secret });
  } catch (error) {
    console.error("Stripe checkout session failed", error);
    return NextResponse.json({ error: "Couldn't start checkout." }, { status: 502 });
  }
}

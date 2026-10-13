# Stripe integration TODO

Single source of truth for finishing the Stripe Checkout setup (Checkout Studio "Embedded form", `ui_mode: "form"`).

## Values to Replace

No placeholders were added. This site already created Checkout Sessions (Scenario A), so the existing real values were kept:

**Files containing these values:**
- [src/app/api/checkout/route.ts](src/app/api/checkout/route.ts)
- [src/app/offers/products.ts](src/app/offers/products.ts)

| Field | Current Value | Notes |
|-------|--------------|-------|
| mode | `payment` | Correct for one-time purchases like the audit. Use `subscription` only for recurring billing. |
| line_items | Built from the product list (`price_data`, USD, price from `AUDIT_PRICE` in `src/app/offers/copy.ts`) | No Stripe Price IDs needed. To change a price, edit the product list, not the Stripe Dashboard. |

## Configured Parameters

These parameters were configured in Checkout Studio and are already set correctly.

**Files containing these parameters:**
- [src/app/api/checkout/route.ts](src/app/api/checkout/route.ts) (session parameters)
- [src/app/lib/stripe.ts](src/app/lib/stripe.ts) (API version)
- [src/app/checkout/[product]/EmbeddedCheckoutPanel.tsx](src/app/checkout/%5Bproduct%5D/EmbeddedCheckoutPanel.tsx) (Stripe.js, beta flag, appearance)

| Parameter | Value |
|-----------|-------|
| ui_mode | `form` (installed `stripe` SDK is 23.0.0, so `form` rather than `custom`) |
| billing_address_collection | `auto` |
| phone_number_collection | `{ enabled: false }` |
| automatic_tax | `{ enabled: false }` |
| submit_type | `auto` |
| integration_identifier | `custom_embedded_web_0001` |
| payment_method_collection | Not set (only used in `subscription` mode) |
| API version | `2026-03-25.dahlia; custom_checkout_payment_form_preview=v1` |
| Stripe.js | `https://js.stripe.com/dahlia/stripe.js`, initialized with `betas: ['custom_checkout_payment_form_1']` |
| Appearance | Checkout Studio values (`night` theme, `#0f110f` background, `#0570de` primary), except `colorText`, changed from `#30313d` to `#e4e4e7` so text is readable on the dark background |

Kept on purpose, although they aren't in the Checkout Studio list:
- `return_url` sends buyers to `/checkout/<product>/success` after paying.
- `metadata.productId` lets the success page confirm the payment was for that product.

Removed: the "Your store or app's website" custom field. Ask for the site on the kickoff call instead.

## Setup

1. **Environment variables.** Add these to `.env.local` for local dev and to your host's environment variables (Vercel → Project → Settings → Environment Variables) for production. Get them from https://dashboard.stripe.com/test/apikeys.
   ```
   STRIPE_SECRET_KEY=sk_test_your_real_key
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_real_key
   ```
   - The names must match exactly. This is a Next.js site, so the browser key needs the `NEXT_PUBLIC_` prefix and the secret key must not have it.
   - Paste the full key from the dashboard, not the `sk_test_...` placeholder.
   - Restart `npm run dev` after editing `.env.local`.
2. **Beta access.** The Checkout form is a Stripe beta. If the form never appears, or the console shows a beta or `ui_mode` error, ask Stripe support (https://support.stripe.com) to enable the Checkout form beta on your account.
3. **Dependencies.** `stripe` (server) and `@stripe/stripe-js` (TypeScript types only; Stripe.js itself loads from js.stripe.com) are installed. Nothing else is needed.

## Project structure

| File | Purpose |
|------|---------|
| [src/app/offers/products.ts](src/app/offers/products.ts) | Product list. Add a product here to sell it (Stripe or Lemon Squeezy). |
| [src/app/lib/stripe.ts](src/app/lib/stripe.ts) | Server-side Stripe client, with the beta API version. |
| [src/app/api/checkout/route.ts](src/app/api/checkout/route.ts) | `POST /api/checkout` creates a Checkout Session and returns `{ client_secret }`. |
| [src/app/checkout/[product]/page.tsx](src/app/checkout/%5Bproduct%5D/page.tsx) | Checkout page: product summary plus the payment form. |
| [src/app/checkout/[product]/EmbeddedCheckoutPanel.tsx](src/app/checkout/%5Bproduct%5D/EmbeddedCheckoutPanel.tsx) | Loads Stripe.js, mounts the Checkout form, and handles confirm. |
| [src/app/checkout/[product]/success/page.tsx](src/app/checkout/%5Bproduct%5D/success/page.tsx) | Thank-you page. Checks the session is paid, then shows next steps and Calendly. |

## How it works

1. A "Get your audit" button goes to `/checkout/audit`.
2. The page loads Stripe.js (dahlia) and calls `POST /api/checkout` with the product id.
3. The server creates a Checkout Session (`ui_mode: "form"`) from the product list and returns its `client_secret`.
4. The browser calls `stripe.initCheckoutFormSdk(...)`, mounts the form in `#checkout-form`, and on `confirm` calls `actions.confirm({ formConfirmEvent })`.
5. Stripe charges the card and redirects to the session's `return_url`.
6. The success page fetches the session from Stripe. If it's `complete`, the buyer sees next steps and can book the kickoff call. If not, they're sent back to checkout.

## Testing

Use test mode keys, then pay at `http://localhost:3000/checkout/audit`:

| Card | Result |
|------|--------|
| `4242 4242 4242 4242` | Payment succeeds |
| `4000 0025 0000 3155` | Asks for 3D Secure authentication |
| `4000 0000 0000 9995` | Declined (insufficient funds) |

Use any future expiry date, any CVC, and any ZIP. Test payments show up at https://dashboard.stripe.com/test/payments.

## Next steps

- **Go live:** finish Stripe account activation, add the live keys (`sk_live_` and `pk_live_`) to your host, and redeploy.
- **Receipts and alerts:** Dashboard → Settings → Emails. Turn on receipts for successful payments, and make sure you get an email for each payment.
- **Fulfillment:** right now you hear about orders from Stripe's email and dashboard. If you later need automatic fulfillment (for example, emailing a download), add a webhook for `checkout.session.completed`.
- **New products:** add an entry to `products` in `src/app/offers/products.ts`. Digital products like the PDF will use Lemon Squeezy (`provider: "lemonsqueezy"` with its checkout URL).
- **Founding price:** when you go back to $800, change `AUDIT_PRICE` in `src/app/offers/copy.ts` and checkout follows.

## Resources

- https://support.stripe.com
- https://docs.stripe.com/mcp

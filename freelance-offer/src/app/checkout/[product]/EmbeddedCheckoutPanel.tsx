"use client";
import { useEffect, useRef, useState } from "react";
import type { Appearance } from "@stripe/stripe-js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import { CONTACT_EMAIL, contactHref } from "../../offers/copy";

const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;

// The Checkout form beta needs the "dahlia" build of Stripe.js, loaded straight from Stripe (never bundled, for PCI).
const STRIPE_JS_URL = "https://js.stripe.com/dahlia/stripe.js";

/** Appearance from Stripe Checkout Studio (text color lightened so it reads on the dark background). */
const appearance: Omit<Appearance, "rules"> = {
  theme: "night",
  labels: "auto",
  inputs: "spaced",
  variables: {
    borderRadius: "4px",
    colorBackground: "#0f110f",
    colorDanger: "#df1b41",
    colorPrimary: "#0570de",
    colorSuccess: "#00c853",
    colorText: "#e4e4e7",
    fontSizeBase: "16px",
    spacingUnit: "4px",
  },
};

let stripeJsPromise: Promise<void> | null = null;

function loadStripeJs(): Promise<void> {
  if (window.Stripe) return Promise.resolve();
  stripeJsPromise ??= new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = STRIPE_JS_URL;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => {
      stripeJsPromise = null;
      reject(new Error("Stripe.js failed to load"));
    };
    document.head.appendChild(script);
  });
  return stripeJsPromise;
}

async function fetchClientSecret(productId: string): Promise<string> {
  const res = await fetch("/api/checkout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ productId }),
  });
  const data = (await res.json().catch(() => ({}))) as { client_secret?: string };
  if (!res.ok || !data.client_secret) throw new Error("Couldn't start checkout");
  return data.client_secret;
}

/** Stripe's Checkout form, embedded right on our page. */
export default function EmbeddedCheckoutPanel({ productId }: { productId: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [failed, setFailed] = useState(!publishableKey);
  const [payError, setPayError] = useState("");

  useEffect(() => {
    if (!publishableKey) return;
    let cancelled = false;
    let unmount: (() => void) | undefined;

    (async () => {
      try {
        // Start the session request while Stripe.js downloads.
        const clientSecret = fetchClientSecret(productId);
        await loadStripeJs();
        if (cancelled || !window.Stripe || !containerRef.current) return;

        const stripe = window.Stripe(publishableKey, { betas: ["custom_checkout_payment_form_1"] });
        const checkout = stripe.initCheckoutFormSdk({ clientSecret, appearance });
        const form = checkout.createForm({ layout: "expanded" });
        form.mount(containerRef.current);
        unmount = () => form.destroy();

        const loaded = await checkout.loadActions();
        if (cancelled) return;
        if (loaded.type !== "success") throw new Error(loaded.error.message);

        form.on("confirm", async (event) => {
          setPayError("");
          const result = await loaded.actions.confirm({ formConfirmEvent: event });
          // On success Stripe sends the buyer to the thank-you page (the session's return_url).
          if (result.type === "error") setPayError(result.error.message);
        });
      } catch (error) {
        console.error("Checkout failed to load", error);
        if (!cancelled) setFailed(true);
      }
    })();

    return () => {
      cancelled = true;
      unmount?.();
    };
  }, [productId]);

  if (failed) {
    return (
      <div className="surface-card p-7 text-center md:p-10">
        <h2 className="text-xl font-semibold">Checkout isn&apos;t loading right now</h2>
        <p className="mt-3 text-[15px] text-ink-muted">
          Sorry about that! Send me a message and I&apos;ll get you set up by email.
        </p>
        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <a href={contactHref.audit} className="btn-gradient gap-2">
            Send a message
          </a>
          <a href={`mailto:${CONTACT_EMAIL}`} className="btn-inverted gap-2">
            <FontAwesomeIcon icon={faEnvelope} aria-hidden />
            {CONTACT_EMAIL}
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="surface-card min-h-[520px] p-5 md:p-7">
      <div ref={containerRef} id="checkout-form" />
      {payError ? (
        <p role="alert" className="mt-4 text-sm text-red-400">
          {payError}
        </p>
      ) : null}
    </div>
  );
}

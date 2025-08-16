"use client";
import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ----------------------------- Types -----------------------------
export type Lead = {
  firstName: string;
  lastName: string;
  email: string;
};

type LeadCaptureModalProps = {
  open: boolean;
  onClose: () => void;
  onSuccess: (lead: Lead) => void;
  submitUrl?: string; // Google Forms formResponse URL
  extraHiddenFields?: Record<string, string>;
};

export function LeadCaptureModal({
  open,
  onClose,
  onSuccess,
  submitUrl,
  extraHiddenFields,
}: LeadCaptureModalProps) {
  const [values, setValues] = useState<Lead>({ firstName: "", lastName: "", email: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!open) {
      setValues({ firstName: "", lastName: "", email: "" });
      setError(null);
      setLoading(false);
    }
  }, [open]);

  const isEmailValid = useMemo(() => {
    const r = /[^\s@]+@[^\s@]+\.[^\s@]+/;
    return r.test(values.email.trim());
  }, [values.email]);

  const isDisabled = loading || !values.firstName.trim() || !values.lastName.trim() || !isEmailValid;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (isDisabled) return;

    try {
      setLoading(true);
      setError(null);

      if (submitUrl) {
        // Google Forms entry IDs from your prefilled link
        const ENTRY_FIRST = "entry.1511831625";
        const ENTRY_LAST  = "entry.659719382";
        const ENTRY_EMAIL = "entry.1036202572";

        const formData = new FormData();
        formData.append(ENTRY_FIRST, values.firstName);
        formData.append(ENTRY_LAST,  values.lastName);
        formData.append(ENTRY_EMAIL, values.email);

        // Optional extras if you later add hidden fields to your form:
        // const ENTRY_CAMPAIGN = "entry.xxxxxxxx"; // create field in Form first
        // if (extraHiddenFields?.campaign) formData.append(ENTRY_CAMPAIGN, extraHiddenFields.campaign);

        // Recommended extras Google Forms accepts (harmless if present)
        formData.append("fvv", "1");
        formData.append("draftResponse", "[]");
        formData.append("pageHistory", "0");

        // Google Forms doesn't include CORS headers → use no-cors
        await fetch(submitUrl, {
          method: "POST",
          mode: "no-cors",
          body: formData,
        });
      } else {
        // Fallback demo delay
        await new Promise((r) => setTimeout(r, 600));
      }

      onSuccess(values);
    } catch (err: any) {
      setError(err?.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="w-full max-w-xl rounded-2xl bg-white p-6 shadow-2xl"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 10, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            <div className="flex items-start justify-between">
              <div className="form_progress-container">
                <div className="form_progress-bar bg-gradient-purple-black">
                  <div className="form_progress-fill"></div>
                </div>
              </div>
              <button
                onClick={onClose}
                className="rounded-xl px-3 py-1 text-sm text-gray-600 hover:bg-gray-100"
              >
                ✕
              </button>
            </div>
            <h4 className="text-4xl font-bold text-black text-center flex-1 mt-4 mb-8">REGISTER NOW</h4>
            <p className="mt-1 text-gray-600">
              Enter your details. We will contact you & schedule your free stuff.
            </p>

            <form onSubmit={handleSubmit} className="mt-5 space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <label className="block text-sm font-medium text-gray-700">
                  <input
                    type="text"
                    value={values.firstName}
                    onChange={(e) => setValues({ ...values, firstName: e.target.value })}
                    className="mt-1 w-full rounded-xl border p-2 pt-4 pb-4 border-orange-500 focus:outline-none shadow-lg"
                    placeholder="First name"
                    autoFocus
                  />
                </label>

                <label className="block text-sm font-medium text-gray-700">
                  <input
                    type="text"
                    value={values.lastName}
                    onChange={(e) => setValues({ ...values, lastName: e.target.value })}
                    className="mt-1 w-full rounded-xl border p-2 pt-4 pb-4 border-orange-500 focus:outline-none shadow-lg"
                    placeholder="Last name"
                  />
                </label>
              </div>

              <label className="block text-sm font-medium text-gray-700">
                <input
                  type="email"
                  value={values.email}
                  onChange={(e) => setValues({ ...values, email: e.target.value })}
                  className="mt-1 w-full rounded-xl border p-2 pt-4 pb-4 border-orange-500 focus:outline-none shadow-md"
                  placeholder="Your Best Email"
                />
              </label>

              {error && (
                <div className="rounded-xl bg-red-50 p-3 text-sm text-red-700">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={isDisabled}
                className="btn-gradient text-3xl w-full transition-all duration-300 ease-in-out px-16 py-3 rounded-full focus:outline-none bg-purple-custom text-white hover:bg-claim-hover hover:text-[var(--color-accent)]"
              >
                {loading ? "Claiming…" : "YES! Claim my stuff"}
              </button>

              <p className="text-center text-xs text-gray-500">
                By providing your information today, you are giving consent for us or our partners, to contact you by mail, phone, text, or email, even if the phone number is present on a state or national Do Not Call list. We do not sell your personal information to other companies, and you can withdraw consent at any time. By submitting this form, you agree to our Privacy Policy and Terms of Service.
              </p>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// --------------------------- Upgrade CTA ---------------------------

type UpgradeCTAModalProps = {
  open: boolean;
  onClose: () => void;
  headline?: string;
  bullets?: string[];
  coreOfferUrl?: string;
  bookCallUrl?: string;
};

export function UpgradeCTAModal({
  open,
  onClose,
  headline = "Level up with the full program",
  bullets = [
    "Everything in the free pack, expanded and structured",
    "Templates, walkthroughs, and lifetime updates",
    "Community Q&A and support",
  ],
  coreOfferUrl = "/buy",
  bookCallUrl,
}: UpgradeCTAModalProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="w-full max-w-2xl rounded-2xl bg-white p-6 shadow-2xl"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 10, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            <div className="flex items-start justify-between">
              <div className="form_progress-container">
                <div className="form_progress-bar bg-gradient-purple-black">
                  <div className="form_progress-fill form_progress-fill-2"></div>
                </div>
              </div>
              <button
                onClick={onClose}
                className="rounded-xl px-3 py-1 text-sm text-gray-600 hover:bg-gray-100"
              >
                ✕
              </button>
            </div>
            <h4 className="text-4xl font-bold text-black text-center flex-1 mt-4 mb-2">{headline}</h4>
            <h4 className="text-4xl font-bold text-black text-center flex-1 mt-1 mb-8">Want more?</h4>
            <p className="mt-1 text-gray-600">
              You’ve got the free pack! Now take the next step to unlock the full potential of your professional website.
            </p>

            <ul className="mt-4 grid list-disc gap-2 pl-5 text-gray-800">
              {bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <a
                href={coreOfferUrl}
                className="btn-gradient w-full transition-all duration-300 ease-in-out px-16 py-3 text-xs rounded-full focus:outline-none bg-purple-custom text-white hover:bg-language-hover"
              >
                Join the Community →
              </a>
              <button
                onClick={onClose}
                className="btn-gradient w-full transition-all duration-300 ease-in-out px-16 py-3 text-xs rounded-full focus:outline-none bg-purple-custom text-white hover:bg-language-hover"
              >
                See the full program →
              </button>
            </div>

            {bookCallUrl && (
              <a
                href={bookCallUrl}
                className="mt-3 block text-center text-sm font-medium text-gray-600 underline hover:text-gray-800"
              >
                Need more help or want to talk it through? Book a quick call.
              </a>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ---------------------------- Demo Flow ----------------------------

export default function LeadFlowDemo() {
  const [showLead, setShowLead] = useState(false);
  const [showCTA, setShowCTA] = useState(false);

  // Removed keyboard shortcut; open by button only
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <div className="flex min-h-[50vh] items-center justify-center p-6 bg-gradient-black-purple ">
      <div className="max-w-2xl text-center">
        <h1 className="text-3xl font-extrabold tracking-tight">Free landing page, Free call and consultation</h1>
        <p className="mt-2 text-gray-300">Get your free landing page, or a free call plus an ROI & conversion assessment.</p>
        <button
          onClick={() => setShowLead(true)}
          className="btn-gradient w-full transition-all duration-300 ease-in-out text-3xl px-16 py-3 rounded-full focus:outline-none bg-purple-custom text-white hover:bg-language-hover"
        >
          Claim your free stuff
        </button>
      </div>

      <LeadCaptureModal
        open={showLead}
        onClose={() => setShowLead(false)}
        onSuccess={() => {
          setShowLead(false);
          setShowCTA(true);
        }}
        submitUrl="https://docs.google.com/forms/d/e/1FAIpQLSei5MW9D_2R8OzjDQdy78j_x7Z3Hx0NXO1ohwoljdZ6xHQg9Q/formResponse"
        extraHiddenFields={{ campaign: "lead-magnet" }}
      />

      <UpgradeCTAModal
        open={showCTA}
        onClose={() => setShowCTA(false)}
        coreOfferUrl="/core-offer"
        bookCallUrl="/book-a-call"
        headline="Enjoy your free stuff!"
        bullets={[
          "Step-by-step system to implement fast",
          "Pro templates and checklists",
          "Office hours + private community",
        ]}
      />
    </div>
  );
}

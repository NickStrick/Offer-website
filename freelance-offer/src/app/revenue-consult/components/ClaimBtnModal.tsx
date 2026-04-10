"use client";
import { forwardRef, useEffect, useImperativeHandle, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { RevenueConsultClaimModalCopy } from "../copy";

export type Lead = {
  firstName: string;
  lastName: string;
  email: string;
};

type LeadCaptureModalProps = {
  open: boolean;
  onClose: () => void;
  onSuccess: (lead: Lead) => void;
  copy: RevenueConsultClaimModalCopy;
};

export function LeadCaptureModal({ open, onClose, onSuccess, copy }: LeadCaptureModalProps) {
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

      // Google Forms entry IDs from your prefilled link
      const ENTRY_FIRST = "entry.1511831625";
      const ENTRY_LAST = "entry.659719382";
      const ENTRY_EMAIL = "entry.1036202572";

      const formData = new FormData();
      formData.append(ENTRY_FIRST, values.firstName);
      formData.append(ENTRY_LAST, values.lastName);
      formData.append(ENTRY_EMAIL, values.email);

      // Recommended extras Google Forms accepts (harmless if present)
      formData.append("fvv", "1");
      formData.append("draftResponse", "[]");
      formData.append("pageHistory", "0");

      // Google Forms doesn't include CORS headers → use no-cors
      await fetch(copy.submitUrl, {
        method: "POST",
        mode: "no-cors",
        body: formData,
      });

      onSuccess(values);

      if (copy.bookCallUrl && typeof window !== "undefined") {
        window.location.href = copy.bookCallUrl;
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message || "Something went wrong. Please try again.");
      } else {
        console.error("Unexpected error", err);
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[550] flex items-center justify-center bg-black/70 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="w-[99vw] sm:w-full max-h-[96vh] overflow-y-auto max-w-[99vw] sm:max-w-[700px] rounded-2xl bg-white p-6 shadow-2xl"
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
                {copy.closeLabel}
              </button>
            </div>
            <h4 className="text-4xl font-bold text-black text-center flex-1 mt-4 mb-6">{copy.title}</h4>
            <p className="mt-1 text-gray-600">{copy.description}</p>

            <form onSubmit={handleSubmit} className="mt-5 space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <label className="block text-sm font-medium text-gray-700">
                  <input
                    type="text"
                    value={values.firstName}
                    onChange={(e) => setValues({ ...values, firstName: e.target.value })}
                    className="mt-1 w-full rounded-xl border p-2 pt-4 pb-4 border-orange-500 focus:outline-none shadow-lg"
                    placeholder={copy.placeholders.firstName}
                  />
                </label>

                <label className="block text-sm font-medium text-gray-700">
                  <input
                    type="text"
                    value={values.lastName}
                    onChange={(e) => setValues({ ...values, lastName: e.target.value })}
                    className="mt-1 w-full rounded-xl border p-2 pt-4 pb-4 border-orange-500 focus:outline-none shadow-lg"
                    placeholder={copy.placeholders.lastName}
                  />
                </label>
              </div>

              <label className="block text-sm font-medium text-gray-700">
                <input
                  type="email"
                  value={values.email}
                  onChange={(e) => setValues({ ...values, email: e.target.value })}
                  className="mt-1 w-full rounded-xl border p-2 pt-4 pb-4 border-orange-500 focus:outline-none shadow-md"
                  placeholder={copy.placeholders.email}
                />
              </label>

              {error && <div className="rounded-xl bg-red-50 p-3 text-sm text-red-700">{error}</div>}

              <button
                type="submit"
                disabled={isDisabled}
                className="btn-gradient text-3xl w-full transition-all duration-300 ease-in-out px-16 py-3 rounded-full focus:outline-none bg-purple-custom text-white hover:bg-claim-hover hover:text-[var(--color-accent)]"
              >
                {loading ? copy.submit.loading : copy.submit.idle}
              </button>

              <p className="text-center text-xs text-gray-500">{copy.consent}</p>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export type ClaimBtnModalHandle = {
  openLead: () => void;
};

type ClaimBtnModalProps = {
  copy: RevenueConsultClaimModalCopy;
};

const ClaimBtnModal = forwardRef<ClaimBtnModalHandle, ClaimBtnModalProps>(function ClaimBtnModal(
  { copy },
  ref
) {
  const [showLead, setShowLead] = useState(false);

  // Removed keyboard shortcut; open by button only
  useEffect(() => {
    return () => {};
  }, []);

  useImperativeHandle(ref, () => ({
    openLead: () => setShowLead(true),
  }));

  return (
    <>
      <LeadCaptureModal
        open={showLead}
        onClose={() => setShowLead(false)}
        onSuccess={() => {
          setShowLead(false);
        }}
        copy={copy}
      />
    </>
  );
});

export default ClaimBtnModal;

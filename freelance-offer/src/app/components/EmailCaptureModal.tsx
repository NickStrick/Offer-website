"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

import { CONSENT_TEXT, LEADS_FORM_ENTRIES, LEADS_FORM_URL } from "../offers/copy";

const inputClass =
  "mt-1 w-full rounded-xl border border-zinc-300 p-2 pt-4 pb-4 text-black focus:border-green-500 focus:outline-none shadow-md";

type EmailCaptureCopy = {
  title: string;
  description: string;
  placeholders: { firstName: string; email: string };
  submit: { idle: string; loading: string };
  success: { title: string; body: string };
};

/**
 * Lightweight email signup (book waitlists, release notices).
 * Until the Google Form has a "List" question, the list name goes in the "First name" answer
 * and the visitor's first name in "Last name", matching how the free-audit form stores its source.
 */
export default function EmailCaptureModal({
  open,
  onClose,
  listName,
  heading,
  copy,
}: {
  open: boolean;
  onClose: () => void;
  listName: string;
  heading?: string;
  copy: EmailCaptureCopy;
}) {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (!open) {
      setFirstName("");
      setEmail("");
      setError(null);
      setLoading(false);
      setSent(false);
    }
  }, [open]);

  const isDisabled = loading || !/[^\s@]+@[^\s@]+\.[^\s@]+/.test(email.trim());

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (isDisabled) return;
    try {
      setLoading(true);
      setError(null);
      const formData = new FormData();
      formData.append(LEADS_FORM_ENTRIES.firstName, listName);
      formData.append(LEADS_FORM_ENTRIES.lastName, firstName.trim());
      formData.append(LEADS_FORM_ENTRIES.email, email.trim());
      formData.append("fvv", "1");
      formData.append("draftResponse", "[]");
      formData.append("pageHistory", "0");
      // Google Forms doesn't include CORS headers → use no-cors
      await fetch(LEADS_FORM_URL, { method: "POST", mode: "no-cors", body: formData });
      setSent(true);
    } catch (err: unknown) {
      setError(err instanceof Error && err.message ? err.message : "Something went wrong. Please try again.");
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
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="email-capture-title"
            className="w-full max-w-[480px] rounded-2xl bg-white p-6 shadow-2xl"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 10, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-end">
              <button onClick={onClose} aria-label="Close" className="rounded-xl px-3 py-1 text-sm text-gray-600 hover:bg-gray-100">
                ✖
              </button>
            </div>

            {sent ? (
              <div className="pb-2 text-center">
                <FontAwesomeIcon icon={faCircleCheck} className="text-4xl text-green-600" aria-hidden />
                <h4 id="email-capture-title" className="mt-4 text-2xl font-bold text-black">
                  {copy.success.title}
                </h4>
                <p className="mt-2 text-gray-600">{copy.success.body}</p>
              </div>
            ) : (
              <>
                <h4 id="email-capture-title" className="text-center text-2xl font-bold text-black">
                  {heading ?? copy.title}
                </h4>
                <p className="mt-2 text-center text-gray-600">{copy.description}</p>
                <form onSubmit={handleSubmit} className="mt-5 space-y-4">
                  <input
                    type="text"
                    aria-label={copy.placeholders.firstName}
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className={inputClass}
                    placeholder={copy.placeholders.firstName}
                  />
                  <input
                    type="email"
                    aria-label={copy.placeholders.email}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={inputClass}
                    placeholder={copy.placeholders.email}
                  />
                  {error && <div className="rounded-xl bg-red-50 p-3 text-sm text-red-700">{error}</div>}
                  <button type="submit" disabled={isDisabled} className="btn-gradient w-full !py-4">
                    {loading ? copy.submit.loading : copy.submit.idle}
                  </button>
                  <p className="text-center text-xs text-gray-500">{CONSENT_TEXT}</p>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

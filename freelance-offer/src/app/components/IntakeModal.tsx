"use client";
import { forwardRef, useEffect, useImperativeHandle, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { MICRO_AUDIT_CHECKOUT_URL, offersCopy, type OffersIntakeModalCopy } from "../offers/copy";

type Application = {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  arr: string;
};

const EMPTY: Application = { firstName: "", lastName: "", email: "", company: "", arr: "" };

const inputClass =
  "mt-1 w-full rounded-xl border border-zinc-300 p-2 pt-4 pb-4 text-black focus:border-green-500 focus:outline-none shadow-md";

export type IntakeModalHandle = {
  open: () => void;
};

const IntakeModal = forwardRef<IntakeModalHandle, { copy?: OffersIntakeModalCopy }>(function IntakeModal(
  { copy = offersCopy.intakeModal },
  ref
) {
  const [open, setOpen] = useState(false);
  const [values, setValues] = useState<Application>(EMPTY);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [notQualified, setNotQualified] = useState(false);

  useImperativeHandle(ref, () => ({
    open: () => setOpen(true),
  }));

  useEffect(() => {
    if (!open) {
      setValues(EMPTY);
      setError(null);
      setLoading(false);
      setNotQualified(false);
    }
  }, [open]);

  const isEmailValid = useMemo(() => /[^\s@]+@[^\s@]+\.[^\s@]+/.test(values.email.trim()), [values.email]);

  const isDisabled =
    loading || !values.firstName.trim() || !values.lastName.trim() || !isEmailValid || !values.arr;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (isDisabled) return;

    const bracket = copy.arrOptions.find((o) => o.value === values.arr);
    if (!bracket?.qualifies) {
      setNotQualified(true);
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const formData = new FormData();
      formData.append(copy.entries.firstName, values.firstName);
      formData.append(copy.entries.lastName, values.lastName);
      formData.append(copy.entries.email, values.email);
      if (copy.entries.company) formData.append(copy.entries.company, values.company);
      if (copy.entries.arr) formData.append(copy.entries.arr, bracket.label);

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

  const microAuditIsExternal = /^https?:\/\//i.test(MICRO_AUDIT_CHECKOUT_URL);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[550] flex items-center justify-center bg-black/70 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setOpen(false)}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="intake-modal-title"
            className="w-[99vw] sm:w-full max-h-[96vh] overflow-y-auto max-w-[99vw] sm:max-w-[700px] rounded-2xl bg-white p-6 shadow-2xl"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 10, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-end">
              <button
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="rounded-xl px-3 py-1 text-sm text-gray-600 hover:bg-gray-100"
              >
                {copy.closeLabel}
              </button>
            </div>

            {notQualified ? (
              <div className="text-center">
                <h4 id="intake-modal-title" className="text-3xl md:text-4xl font-bold text-black mt-2 mb-4">
                  {copy.notQualified.title}
                </h4>
                <p className="text-gray-600">{copy.notQualified.body}</p>
                <div className="mt-6 flex flex-col gap-3">
                  <a
                    href={MICRO_AUDIT_CHECKOUT_URL}
                    {...(microAuditIsExternal ? { target: "_blank", rel: "noreferrer" } : {})}
                    className="w-full rounded-[10px] bg-green-500 px-8 py-4 text-base font-semibold text-[#04210f] hover:bg-green-400 transition"
                  >
                    {copy.notQualified.ctaText}
                  </a>
                  <button
                    type="button"
                    onClick={() => setNotQualified(false)}
                    className="text-sm text-gray-500 hover:underline"
                  >
                    {copy.notQualified.backText}
                  </button>
                </div>
              </div>
            ) : (
              <>
                <h4 id="intake-modal-title" className="text-3xl md:text-4xl font-bold text-black text-center mt-2 mb-4">
                  {copy.title}
                </h4>
                <p className="mt-1 text-gray-600">{copy.description}</p>

                <form onSubmit={handleSubmit} className="mt-5 space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <input
                      type="text"
                      aria-label={copy.placeholders.firstName}
                      value={values.firstName}
                      onChange={(e) => setValues({ ...values, firstName: e.target.value })}
                      className={inputClass}
                      placeholder={copy.placeholders.firstName}
                    />
                    <input
                      type="text"
                      aria-label={copy.placeholders.lastName}
                      value={values.lastName}
                      onChange={(e) => setValues({ ...values, lastName: e.target.value })}
                      className={inputClass}
                      placeholder={copy.placeholders.lastName}
                    />
                  </div>

                  <input
                    type="email"
                    aria-label={copy.placeholders.email}
                    value={values.email}
                    onChange={(e) => setValues({ ...values, email: e.target.value })}
                    className={inputClass}
                    placeholder={copy.placeholders.email}
                  />

                  <input
                    type="text"
                    aria-label={copy.placeholders.company}
                    value={values.company}
                    onChange={(e) => setValues({ ...values, company: e.target.value })}
                    className={inputClass}
                    placeholder={copy.placeholders.company}
                  />

                  <fieldset>
                    <legend className="text-sm font-semibold text-gray-700">{copy.arrLabel}</legend>
                    <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2">
                      {copy.arrOptions.map((option) => (
                        <label
                          key={option.value}
                          className={`cursor-pointer rounded-xl border px-4 py-3 text-sm text-black transition ${
                            values.arr === option.value
                              ? "border-green-500 bg-green-50 font-semibold"
                              : "border-zinc-300 hover:border-zinc-400"
                          }`}
                        >
                          <input
                            type="radio"
                            name="arr"
                            value={option.value}
                            checked={values.arr === option.value}
                            onChange={(e) => setValues({ ...values, arr: e.target.value })}
                            className="sr-only"
                          />
                          {option.label}
                        </label>
                      ))}
                    </div>
                  </fieldset>

                  {error && <div className="rounded-xl bg-red-50 p-3 text-sm text-red-700">{error}</div>}

                  <button
                    type="submit"
                    disabled={isDisabled}
                    className="w-full rounded-[10px] bg-green-500 px-8 py-4 text-base font-semibold text-[#04210f] transition hover:bg-green-400 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {loading ? copy.submit.loading : copy.submit.idle}
                  </button>

                  <p className="text-center text-xs text-gray-500">{copy.consent}</p>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
});

export default IntakeModal;

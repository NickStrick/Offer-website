"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faGift, faVideo } from "@fortawesome/free-solid-svg-icons";

import { VideoPlayer } from "./Video";

import { leadMagnetCopy, type LeadMagnetCopy } from "../offers/copy";

const inputClass =
  "mt-1 w-full rounded-xl border border-zinc-300 p-2 pt-4 pb-4 text-black focus:border-green-500 focus:outline-none shadow-md";

function normalizeUrl(raw: string) {
  const trimmed = raw.trim();
  return /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
}

function LeadMagnetModal({
  open,
  onClose,
  copy,
  video,
}: {
  open: boolean;
  onClose: () => void;
  copy: LeadMagnetCopy["modal"];
  video: LeadMagnetCopy["video"];
}) {
  const [email, setEmail] = useState("");
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (!open) {
      setEmail("");
      setUrl("");
      setError(null);
      setLoading(false);
      setSent(false);
    }
  }, [open]);

  const isEmailValid = /[^\s@]+@[^\s@]+\.[^\s@]+/.test(email.trim());
  const isUrlValid = /^\S+\.\S+$/.test(url.trim());
  const isDisabled = loading || !isEmailValid || !isUrlValid;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (isDisabled) return;
    try {
      setLoading(true);
      setError(null);

      const formData = new FormData();
      formData.append(copy.entries.source, copy.sourceValue);
      formData.append(copy.entries.url, normalizeUrl(url));
      formData.append(copy.entries.email, email.trim());
      formData.append("fvv", "1");
      formData.append("draftResponse", "[]");
      formData.append("pageHistory", "0");

      // Google Forms doesn't include CORS headers → use no-cors
      await fetch(copy.submitUrl, { method: "POST", mode: "no-cors", body: formData });
      setSent(true);
    } catch (err: unknown) {
      setError(err instanceof Error && err.message ? err.message : "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  const upsellIsExternal = /^https?:\/\//i.test(copy.success.upsellHref);

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
            aria-labelledby="lead-magnet-title"
            className="w-[99vw] sm:w-full max-h-[96vh] overflow-y-auto max-w-[99vw] sm:max-w-[560px] rounded-2xl bg-white p-6 shadow-2xl"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 10, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-end">
              <button
                onClick={onClose}
                aria-label="Close"
                className="rounded-xl px-3 py-1 text-sm text-gray-600 hover:bg-gray-100"
              >
                {copy.closeLabel}
              </button>
            </div>

            {sent ? (
              <div className="text-center">
                <h4 id="lead-magnet-title" className="text-3xl font-bold text-black mt-2 mb-4">
                  {copy.success.title}
                </h4>
                <div className="mb-5">
                  <VideoPlayer video={video} />
                </div>
                <p className="text-gray-600">{copy.success.body}</p>
                <a
                  href={copy.success.upsellHref}
                  {...(upsellIsExternal ? { target: "_blank", rel: "noreferrer" } : {})}
                  className="btn-gradient mt-6 w-full !py-4"
                >
                  {copy.success.upsellText}
                </a>
              </div>
            ) : (
              <>
                <h4 id="lead-magnet-title" className="text-3xl font-bold text-black text-center mt-2 mb-4">
                  {copy.title}
                </h4>
                <p className="mt-1 text-gray-600">{copy.description}</p>

                <form onSubmit={handleSubmit} className="mt-5 space-y-4">
                  <input
                    type="text"
                    inputMode="url"
                    aria-label={copy.placeholders.url}
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    className={inputClass}
                    placeholder={copy.placeholders.url}
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

                  <button
                    type="submit"
                    disabled={isDisabled}
                    className="btn-gradient w-full !py-4"
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
}

/** Full-width free-audit banner shown above the paid tier grid. */
export default function LeadMagnet({ copy = leadMagnetCopy }: { copy?: LeadMagnetCopy }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.div
        id={copy.id}
        className="surface-card relative mb-24 scroll-mt-24 overflow-hidden !border-green-500/30 p-8 md:p-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div aria-hidden className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-green-500/15 blur-3xl" />
        <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-green-400">
              <FontAwesomeIcon icon={faGift} aria-hidden />
              {copy.tag}
            </div>
            <h3 className="mt-5 text-2xl font-semibold md:text-3xl" style={{ letterSpacing: "-0.03em" }}>{copy.title}</h3>
            <p className="mt-3 text-base leading-relaxed text-ink-muted">{copy.body}</p>
          </div>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="btn-gradient shrink-0 gap-2"
          >
            <FontAwesomeIcon icon={faVideo} aria-hidden />
            {copy.ctaText}
            <FontAwesomeIcon icon={faArrowRight} aria-hidden />
          </button>
        </div>
      </motion.div>

      <LeadMagnetModal open={open} onClose={() => setOpen(false)} copy={copy.modal} video={copy.video} />
    </>
  );
}

"use client";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck, faXmark } from "@fortawesome/free-solid-svg-icons";

import { BOOK_CALL_URL } from "../offers/copy";

const CALENDLY_SCRIPT = "https://assets.calendly.com/assets/external/widget.js";

type CalendlyPrefill = { name?: string; email?: string };

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: { url: string; parentElement: HTMLElement; prefill?: CalendlyPrefill }) => void;
    };
  }
}

/** Load Calendly's widget script once, on first use (keeps it off the initial page load). */
let calendlyLoader: Promise<void> | null = null;
function loadCalendly(): Promise<void> {
  if (typeof window !== "undefined" && window.Calendly) return Promise.resolve();
  if (!calendlyLoader) {
    calendlyLoader = new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = CALENDLY_SCRIPT;
      script.async = true;
      script.onload = () => resolve();
      script.onerror = () => {
        calendlyLoader = null;
        reject(new Error("Calendly failed to load"));
      };
      document.body.appendChild(script);
    });
  }
  return calendlyLoader;
}

// Match the site's dark theme. Colors apply on Calendly paid plans and are ignored on the free plan.
const THEME_PARAMS = "hide_gdpr_banner=1&background_color=181b18&text_color=f5f5f3&primary_color=22c55e";

/**
 * Calendly's two-column calendar needs a frame at least this big to show without an inner scrollbar.
 * On shorter screens the whole frame is scaled down to fit instead of scrolling.
 */
const CALENDLY_MIN_WIDTH = 1000;
const CALENDLY_MIN_HEIGHT = 700;
/** Below this width Calendly uses its stacked mobile layout; that one scrolls naturally. */
const MOBILE_BREAKPOINT = 768;

/** Shown in our header so phones can hide Calendly's tall event-details block. */
const CALL_DETAILS = "30-min phone call";

/** Calendly booking calendar in a pop-up. */
export function BookCallModal({
  open,
  onClose,
  prefill,
}: {
  open: boolean;
  onClose: () => void;
  /** Pre-fills the booking form, e.g. with details the visitor just submitted. */
  prefill?: CalendlyPrefill;
}) {
  const frameRef = useRef<HTMLDivElement>(null);
  const widgetRef = useRef<HTMLDivElement>(null);
  const [failed, setFailed] = useState(false);
  const [fit, setFit] = useState({ scale: 1, width: 0, height: 0 });
  // Read through refs so a parent re-render doesn't reload the calendar.
  const onCloseRef = useRef(onClose);
  const prefillRef = useRef(prefill);
  onCloseRef.current = onClose;
  prefillRef.current = prefill;

  useEffect(() => {
    if (!open) return;
    setFailed(false);
    let cancelled = false;
    loadCalendly()
      .then(() => {
        const el = widgetRef.current;
        if (cancelled || !el || !window.Calendly) return;
        el.innerHTML = "";
        // Phones: drop Calendly's event-details block (our header shows the essentials instead).
        const isMobile = window.innerWidth < MOBILE_BREAKPOINT;
        const url = `${BOOK_CALL_URL}?${THEME_PARAMS}${isMobile ? "&hide_event_type_details=1" : ""}`;
        window.Calendly.initInlineWidget({ url, parentElement: el, prefill: prefillRef.current });
      })
      .catch(() => !cancelled && setFailed(true));

    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onCloseRef.current();
    window.addEventListener("keydown", onKey);
    return () => {
      cancelled = true;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  // Size the calendar to the space available: full size when it fits, scaled down when the screen is short.
  useEffect(() => {
    if (!open) return;
    const frame = frameRef.current;
    if (!frame) return;
    const observer = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      if (width < MOBILE_BREAKPOINT) {
        setFit({ scale: 1, width, height });
        return;
      }
      const scale = Math.min(1, width / CALENDLY_MIN_WIDTH, height / CALENDLY_MIN_HEIGHT);
      setFit({ scale, width: width / scale, height: height / scale });
    });
    observer.observe(frame);
    return () => observer.disconnect();
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[600] flex items-center justify-center bg-black/75 p-2 backdrop-blur-sm sm:p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="book-call-title"
            className="surface-card flex h-[min(820px,calc(100dvh-1rem))] w-full max-w-[1080px] flex-col overflow-hidden sm:h-[min(820px,calc(100dvh-2rem))]"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 10, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-3 border-b border-white/[0.06] px-4 py-2.5">
              <h4 id="book-call-title" className="flex min-w-0 items-center gap-2 text-sm font-semibold">
                <FontAwesomeIcon icon={faCalendarCheck} className="text-green-400" aria-hidden />
                <span className="truncate">
                  <span className="sm:hidden">Book a call</span>
                  <span className="hidden sm:inline">Book a call with Stricker Digital</span>
                </span>
                <span className="shrink-0 font-normal text-ink-subtle">· {CALL_DETAILS}</span>
              </h4>
              <button
                onClick={onClose}
                aria-label="Close"
                className="flex h-8 w-8 items-center justify-center rounded-lg text-ink-subtle transition hover:bg-white/5 hover:text-white"
              >
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </div>

            <div ref={frameRef} className="relative min-h-0 flex-1 overflow-hidden">
              {failed ? (
                <div className="flex h-full flex-col items-center justify-center gap-4 p-6 text-center">
                  <p className="text-ink-muted">The calendar couldn&apos;t load here.</p>
                  <a href={BOOK_CALL_URL} target="_blank" rel="noreferrer" className="btn-gradient">
                    Open the booking page
                  </a>
                </div>
              ) : (
                <>
                  <div aria-hidden className="absolute inset-0 flex items-center justify-center text-sm text-ink-subtle">
                    Loading calendar…
                  </div>
                  <div
                    ref={widgetRef}
                    className="relative origin-top-left [&_iframe]:h-full"
                    style={{
                      width: fit.width || "100%",
                      height: fit.height || "100%",
                      transform: fit.scale < 1 ? `scale(${fit.scale})` : undefined,
                    }}
                  />
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/** A button that opens the booking calendar. */
export default function BookCallButton({
  className,
  children,
  prefill,
}: {
  className?: string;
  children: ReactNode;
  prefill?: CalendlyPrefill;
}) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={className}>
        {children}
      </button>
      <BookCallModal open={open} onClose={() => setOpen(false)} prefill={prefill} />
    </>
  );
}

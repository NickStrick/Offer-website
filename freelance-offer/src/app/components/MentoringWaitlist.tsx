"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faChalkboardUser } from "@fortawesome/free-solid-svg-icons";

import EmailCaptureModal from "./EmailCaptureModal";
import { mentoringCopy } from "../offers/copy";
import { libraryCopy } from "../library/copy";

/** Small waitlist band for the upcoming developer-to-sales-engineer classes. */
export default function MentoringWaitlist({ className = "bg-page" }: { className?: string }) {
  const [open, setOpen] = useState(false);

  return (
    <section id={mentoringCopy.id} className={`${className} scroll-mt-16 px-6 py-16 text-white`}>
      <div className="surface-card mx-auto flex max-w-5xl flex-col items-start gap-6 p-7 md:flex-row md:items-center md:p-10">
        <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-amber-500/30 bg-amber-500/10 text-2xl text-amber-300">
          <FontAwesomeIcon icon={faChalkboardUser} aria-hidden />
        </span>
        <div className="flex-1">
          <div className="eyebrow">{mentoringCopy.eyebrow}</div>
          <h2 className="mt-2 text-2xl font-semibold" style={{ letterSpacing: "-0.03em" }}>
            {mentoringCopy.headline}
          </h2>
          <p className="mt-2 text-[15px] leading-relaxed text-ink-muted">{mentoringCopy.subtitle}</p>
        </div>
        <button type="button" onClick={() => setOpen(true)} className="btn-inverted shrink-0 gap-2">
          {mentoringCopy.ctaText}
          <FontAwesomeIcon icon={faArrowRight} className="text-sm" aria-hidden />
        </button>
      </div>

      <EmailCaptureModal
        open={open}
        onClose={() => setOpen(false)}
        listName={mentoringCopy.listName}
        heading={mentoringCopy.modal.title}
        copy={{ ...libraryCopy.signupModal, description: mentoringCopy.modal.description }}
      />
    </section>
  );
}

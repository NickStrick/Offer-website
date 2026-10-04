"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight, faEnvelopeOpenText, faMicrophoneLines } from "@fortawesome/free-solid-svg-icons";

import SectionHeader from "./SectionHeader";
import EmailCaptureModal from "./EmailCaptureModal";
import { journeyCopy } from "../offers/copy";
import { libraryCopy } from "../library/copy";

/** "Follow along": YouTube plus the weekly notes newsletter (one beehiiv list). */
export default function JourneySection({ className = "bg-gradient-purple-black" }: { className?: string }) {
  const [signupOpen, setSignupOpen] = useState(false);

  return (
    <section id={journeyCopy.id} className={`${className} section-pad scroll-mt-16 text-white`}>
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow={journeyCopy.eyebrow}
          eyebrowIcon={faMicrophoneLines}
          title={journeyCopy.headline}
          subtitle={journeyCopy.subtitle}
        />

        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          <motion.div
            className="surface-card surface-card-hover flex flex-col p-8"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-red-500/30 bg-red-500/10 text-xl text-red-400">
              <FontAwesomeIcon icon={faYoutube} aria-hidden />
            </span>
            <h3 className="mt-6 text-xl font-semibold">Free videos on YouTube</h3>
            <p className="mt-2 flex-1 text-[15px] leading-relaxed text-ink-muted">
              Daily videos and quick Shorts on speaking, selling, and building a business, recorded as I learn.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={journeyCopy.youtubeUrl} target="_blank" rel="noreferrer" className="btn-gradient flex-1 gap-2">
                Watch on YouTube
                <FontAwesomeIcon icon={faArrowRight} className="text-sm" aria-hidden />
              </a>
              <a href={journeyCopy.youtubeShortsUrl} target="_blank" rel="noreferrer" className="btn-inverted flex-1">
                Watch the Shorts
              </a>
            </div>
          </motion.div>

          <motion.div
            className="surface-card surface-card-hover flex flex-col p-8"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.08 }}
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-green-500/30 bg-green-500/10 text-xl text-green-400">
              <FontAwesomeIcon icon={faEnvelopeOpenText} aria-hidden />
            </span>
            <h3 className="mt-6 text-xl font-semibold">The weekly notes</h3>
            <p className="mt-2 flex-1 text-[15px] leading-relaxed text-ink-muted">
              One email a week with the lessons that worked, plus updates on my book, The Iteration Loop.
            </p>
            <button type="button" onClick={() => setSignupOpen(true)} className="btn-inverted mt-8 w-full gap-2">
              {journeyCopy.newsletterCta}
              <FontAwesomeIcon icon={faArrowRight} className="text-sm" aria-hidden />
            </button>
          </motion.div>
        </div>
      </div>

      <EmailCaptureModal
        open={signupOpen}
        onClose={() => setSignupOpen(false)}
        listName={journeyCopy.newsletterListName}
        heading={journeyCopy.newsletterModal.title}
        copy={{ ...libraryCopy.signupModal, description: journeyCopy.newsletterModal.description }}
      />
    </section>
  );
}

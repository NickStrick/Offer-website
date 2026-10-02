"use client";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate, faDiagramProject, faMicrophoneLines, faPersonRunning } from "@fortawesome/free-solid-svg-icons";

import SectionHeader from "./SectionHeader";

const points = [
  {
    title: "Get better every day",
    icon: faPersonRunning,
    description: "Small steps every day beat one giant leap.",
  },
  {
    title: "Talk like a pro",
    icon: faMicrophoneLines,
    description: "Speaking is a skill. I practice it like code, one tweak at a time.",
  },
  {
    title: "Fix what's broken",
    icon: faDiagramProject,
    description: "When something breaks, I track it down and fix it for good.",
  },
];

/** "The Iteration Loop Philosophy" banner: continuous deployment applied beyond code. */
export default function Philosophy() {
  return (
    <section className="section-pad bg-gradient-purple-black text-white">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="How I work"
          eyebrowIcon={faArrowsRotate}
          title="Build. Test. Fix. Repeat."
          subtitle="That's how great software gets made. I use the same loop for everything: learning skills, speaking better, and growing a business."
        />

        <div className="grid gap-5 md:grid-cols-3">
          {points.map((point, i) => (
            <motion.div
              key={point.title}
              className="testimonial-card p-7"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.08 }}
            >
              <FontAwesomeIcon icon={point.icon} className="testimonial-watermark" aria-hidden />
              <span className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-black/30 text-lg text-amber-300 ring-1 ring-white/15">
                <FontAwesomeIcon icon={point.icon} aria-hidden />
              </span>
              <h3 className="text-lg font-bold">{point.title}</h3>
              <p className="mt-2 text-[15px] font-semibold leading-relaxed tracking-wide text-white/85">{point.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

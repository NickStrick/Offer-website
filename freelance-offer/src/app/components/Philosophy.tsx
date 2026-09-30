"use client";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate, faDiagramProject, faMicrophoneLines, faPersonRunning } from "@fortawesome/free-solid-svg-icons";

import SectionHeader from "./SectionHeader";

const points = [
  {
    title: "Personal Performance",
    icon: faPersonRunning,
    description: "Ship small, measure, patch. Skills are built in tight release cycles, not one big launch.",
  },
  {
    title: "Vocal Authority",
    icon: faMicrophoneLines,
    description: "Presentation is a system too. Pace, pause, and structure get tuned like production code.",
  },
  {
    title: "Business Systems",
    icon: faDiagramProject,
    description: "Friction is logged, diagnosed, and fixed with the same rigor as a production bug.",
  },
];

/** "The Iteration Loop Philosophy" banner: continuous deployment applied beyond code. */
export default function Philosophy() {
  return (
    <section className="section-pad bg-gradient-purple-black text-white">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="The Iteration Loop Philosophy"
          eyebrowIcon={faArrowsRotate}
          title="Continuous deployment, applied to everything."
          subtitle="The same loop that ships reliable software (build, measure, patch, repeat) drives how we improve performance, communication, and the systems behind a business."
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

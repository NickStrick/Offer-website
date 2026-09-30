"use client";
import { motion } from "framer-motion";
import { faCode, faGaugeHigh, faSeedling, faShieldHalved } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SectionHeader from "./SectionHeader";

const points = [
  {
    title: "No Templates",
    icon: faCode,
    description: "We engineer your site like enterprise software, not a page builder.",
  },
  {
    title: "Profiled Pipelines",
    icon: faGaugeHigh,
    description: "We find and kill friction hotspots before they cost you revenue.",
  },
  {
    title: "Zero-Trust Security",
    icon: faShieldHalved,
    description: "Bulletproof frameworks that protect your margin.",
  },
];

export default function Philosophy() {
  return (
    <section className="section-pad bg-gradient-purple-black text-white">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Our Philosophy"
          eyebrowIcon={faSeedling}
          title="Engineered for growth, not assembled from templates."
          subtitle="Every recommendation is grounded in how your system actually behaves—and tied to a business metric."
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

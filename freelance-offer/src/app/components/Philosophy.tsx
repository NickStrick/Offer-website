"use client";
import { motion } from "framer-motion";
import { faCode, faGaugeHigh, faSeedling, faShieldHalved } from "@fortawesome/free-solid-svg-icons";

import IconTile from "./IconTile";
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
              className="surface-card surface-card-hover p-7"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.08 }}
            >
              <IconTile icon={point.icon} className="mb-6" />
              <h3 className="text-lg font-semibold">{point.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-muted">{point.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

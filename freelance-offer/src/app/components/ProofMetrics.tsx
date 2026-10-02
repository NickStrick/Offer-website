"use client";
import { motion } from "framer-motion";

import { proofMetrics } from "../offers/copy";

/** Headline results band (social proof). */
export default function ProofMetrics({ className = "bg-page" }: { className?: string }) {
  return (
    <section className={`${className} px-6 pb-8 pt-4 text-white`}>
      <div className="surface-card mx-auto grid max-w-6xl divide-y divide-white/[0.06] md:grid-cols-3 md:divide-x md:divide-y-0">
        {proofMetrics.map((m, i) => (
          <motion.div
            key={m.label}
            className="px-8 py-10 text-center"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.08 }}
          >
            <div
              className="bg-gradient-to-r from-green-400 to-amber-400 bg-clip-text text-5xl font-semibold text-transparent"
              style={{ letterSpacing: "-0.04em" }}
            >
              {m.value}
            </div>
            <p className="mx-auto mt-3 max-w-[16rem] text-[15px] leading-relaxed text-ink-muted">{m.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

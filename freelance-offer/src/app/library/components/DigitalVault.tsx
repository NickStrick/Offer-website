"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faVault } from "@fortawesome/free-solid-svg-icons";

import IconTile from "../../components/IconTile";
import { libraryCopy } from "../copy";

/** The "Digital Vault" Micro-SaaS platform overview. */
export default function DigitalVault() {
  const { vault } = libraryCopy;

  return (
    <section id={vault.id} className="section-pad scroll-mt-16 bg-page text-white">
      <div className="mx-auto grid max-w-6xl items-start gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
        <div className="md:sticky md:top-28">
          <div className="eyebrow">
            <FontAwesomeIcon icon={faVault} aria-hidden />
            {vault.eyebrow}
          </div>
          <h2 className="display-title mt-4">{vault.title}</h2>
          <span className="mt-4 inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-300">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400" aria-hidden />
            {vault.status}
          </span>
          <p className="lead-text mt-6">{vault.overview}</p>
          <Link href={vault.ctaHref} className="btn-inverted mt-8 gap-2">
            {vault.ctaText}
            <FontAwesomeIcon icon={faArrowRight} className="text-sm" aria-hidden />
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {vault.features.map((feature, i) => (
            <motion.div
              key={feature.title}
              className="surface-card surface-card-hover p-7"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.08 }}
            >
              <IconTile icon={feature.icon} className="mb-6" />
              <h3 className="text-lg font-semibold">{feature.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-muted">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

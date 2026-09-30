"use client";
import { motion } from "framer-motion";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faLayerGroup, faServer, faVault } from "@fortawesome/free-solid-svg-icons";

import IconTile from "./IconTile";
import SectionHeader from "./SectionHeader";

type Pillar = {
  icon: IconDefinition;
  title: string;
  description: string;
};

const pillars: Pillar[] = [
  {
    icon: faVault,
    title: "Private Vaults & Portals",
    description: "Auth0-verified, single-use access for high-touch clientele.",
  },
  {
    icon: faServer,
    title: "Custom Engineering Matrices",
    description: "Next.js & AWS infrastructure, built from scratch with no shared attack surface.",
  },
];

export default function BlueprintPillars() {
  return (
    <section className="section-pad bg-page text-white">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="The Multi-Tenant Blueprint"
          eyebrowIcon={faLayerGroup}
          title="The architecture behind every private engagement."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              className="surface-card surface-card-hover p-8"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.08 }}
            >
              <IconTile icon={pillar.icon} className="mb-6" />
              <h3 className="text-xl font-semibold">{pillar.title}</h3>
              <p className="mt-2 text-base leading-relaxed text-ink-muted">{pillar.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

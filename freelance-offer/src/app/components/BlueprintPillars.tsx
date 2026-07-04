"use client";
import { motion } from "framer-motion";

type Pillar = {
  title: string;
  description: string;
};

const pillars: Pillar[] = [
  {
    title: "Private Vaults & Portals",
    description: "Auth0-verified, single-use access for high-touch clientele.",
  },
  {
    title: "Custom Engineering Matrices",
    description: "Next.js & AWS infrastructure, built from scratch—no shared attack surface.",
  },
];

export default function BlueprintPillars() {
  return (
    <section className="bg-gradient-purple-black px-6 py-16 text-white">
      <div className="mx-auto max-w-5xl">
        <header className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            The Multi-Tenant Blueprint
          </h2>
          <p className="mt-4 text-lg opacity-90 max-w-2xl mx-auto">
            The architectural pillars behind every private engagement.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              className="rounded-2xl border border-white/10 bg-black/40 p-8 bg-blurred"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: i * 0.1 }}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <h3 className="text-2xl font-bold text-accent">{pillar.title}</h3>
              <p className="mt-3 text-lg opacity-90">{pillar.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

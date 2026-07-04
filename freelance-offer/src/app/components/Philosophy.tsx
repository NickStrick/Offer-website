"use client";
import { motion } from "framer-motion";

const points = [
  {
    title: "No Templates",
    description: "We engineer your site like enterprise software, not a page builder.",
  },
  {
    title: "Profiled Pipelines",
    description: "We find and kill friction hotspots before they cost you revenue.",
  },
  {
    title: "Zero-Trust Security",
    description: "Bulletproof frameworks that protect your margin.",
  },
];

export default function Philosophy() {
  return (
    <section className="bg-gradient-black-dark px-6 py-16 text-white">
      <div className="mx-auto max-w-5xl">
        <header className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">Our Philosophy</h2>
        </header>

        <div className="grid gap-6 md:grid-cols-3">
          {points.map((point, i) => (
            <motion.div
              key={point.title}
              className="rounded-2xl border border-white/10 bg-black/40 p-6 bg-blurred text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.1 }}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <h3 className="text-xl font-bold text-accent">{point.title}</h3>
              <p className="mt-3 text-base opacity-90">{point.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

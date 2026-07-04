"use client";
import { motion } from "framer-motion";

const stack = [
  {
    label: "Frontend",
    items: "Next.js, React, TypeScript",
    description: "For blazing-fast load times and seamless state handling.",
  },
  {
    label: "Backend & Infrastructure",
    items: "Node.js, REST APIs, custom multi-tenant SQL data models, AWS S3, and serverless architectures",
    description: "Production-grade infrastructure built to scale with your business.",
  },
];

export default function TechStack() {
  return (
    <section className="bg-gradient-black-purple px-6 py-16 text-white">
      <div className="mx-auto max-w-5xl">
        <header className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight gradient-text">
            The Core Technology Architecture Stack
          </h2>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          {stack.map((row, i) => (
            <motion.div
              key={row.label}
              className="rounded-2xl border border-white/10 bg-black/40 p-6 bg-blurred"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: i * 0.1 }}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="text-accent text-sm font-bold uppercase tracking-wide">{row.label}</div>
              <h3 className="mt-2 text-xl font-bold">{row.items}</h3>
              <p className="mt-3 text-lg opacity-90">{row.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-white/10 bg-black/40 p-8 bg-blurred text-center">
          <div className="text-accent text-sm font-bold uppercase tracking-wide">The Advantage</div>
          <p className="mt-3 text-xl opacity-90 max-w-3xl mx-auto">
            Complete, lightning-fast site-building independence. We build custom applications
            featuring fully configurable and editable section matrices designed to give your
            operational teams complete control without touching a single line of code.
          </p>
        </div>
      </div>
    </section>
  );
}

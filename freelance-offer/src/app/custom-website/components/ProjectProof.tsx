"use client";
import { motion } from "framer-motion";

export default function ProjectProof() {
  return (
    <section className="bg-gradient-purple-black px-6 py-16 text-white">
      <div className="mx-auto max-w-4xl">
        <motion.div
          className="rounded-2xl border border-white/10 bg-black/40 p-8 bg-blurred text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="text-accent text-sm font-bold uppercase tracking-wide">
            The Project Proof
          </div>
          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold tracking-tight">
            The Trade Show Analytics Platform
          </h2>
          <p className="mt-5 text-lg opacity-90 max-w-3xl mx-auto">
            Proven experience managing architectural scaling requirements across massive
            600,000-line enterprise execution engines. Built full-stack direct-messaging
            matrices, real-time exhibitor directories, and asynchronous webhook delivery
            layers that drove a 30% performance optimization and a 22% raw drop in recorded
            user friction tickets.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

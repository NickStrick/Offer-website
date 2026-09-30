"use client";
import { motion } from "framer-motion";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";

import IconTile from "../../components/IconTile";
import SectionHeader from "../../components/SectionHeader";

type Book = {
  title: string;
  subtag: string;
  premise: string;
  ctaText: string;
  mailSubject: string;
};

const books: Book[] = [
  {
    title: "The Iteration Loop",
    subtag:
      "A Software Engineer's Philosophy on Building Skills, Businesses, and Mindset from Scratch (Coming Soon)",
    premise:
      "Deconstructing traditional learning blockades by using continuous deployment models, automated micro-habits, and treating life's unexpected setbacks as programmatic bugs meant to be diagnosed, logged, and patched in real-time.",
    ctaText: "Secure Early Access / Join Beta Reader List",
    mailSubject: "Early Access - The Iteration Loop",
  },
  {
    title: "Amor Fati in the Arena",
    subtag: "Engineering Resilience in Modern Business Ecosystems (Coming Soon)",
    premise:
      "Adopting a hyper-efficient, stoic developer mindset toward major enterprise setbacks. Learning to pull immense practical and structural value from unclosed deals, failed proposals, and architectures requiring a full refactor.",
    ctaText: "Notify Me Upon Release",
    mailSubject: "Notify Me - Amor Fati in the Arena",
  },
];

export default function BookLibrary() {
  return (
    <section id="library" className="section-pad bg-gradient-purple-black text-white">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Coming soon"
          eyebrowIcon={faBookOpen}
          title="The Technical Library & E-Books"
          subtitle="Systems thinking applied to engineering, skill acquisition, and business resilience."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {books.map((book, i) => (
            <motion.div
              key={book.title}
              className="surface-card surface-card-hover flex flex-col p-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: i * 0.1 }}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <IconTile icon={faBookOpen} className="mb-6" />
              <h3 className="text-2xl font-semibold">{book.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-subtle">{book.subtag}</p>
              <p className="mt-4 flex-1 text-[15px] leading-relaxed text-ink-muted">{book.premise}</p>
              <a
                href={`mailto:nickolasstricker@gmail.com?subject=${encodeURIComponent(book.mailSubject)}`}
                className="btn-inverted mt-8 w-full"
              >
                {book.ctaText}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

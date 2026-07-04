"use client";
import { motion } from "framer-motion";

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
    <section id="library" className="bg-gradient-black-dark px-6 py-16 text-white">
      <div className="mx-auto max-w-5xl">
        <header className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            The Technical Library & E-Books
          </h2>
          <p className="mt-4 text-lg opacity-90 max-w-2xl mx-auto">
            Systems thinking applied to engineering, skill acquisition, and business resilience.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          {books.map((book, i) => (
            <motion.div
              key={book.title}
              className="rounded-2xl border border-white/10 bg-black/40 p-6 bg-blurred flex flex-col"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: i * 0.1 }}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <h3 className="text-2xl font-bold text-accent">{book.title}</h3>
              <p className="mt-2 text-sm uppercase tracking-wide opacity-70">{book.subtag}</p>
              <p className="mt-4 text-lg opacity-90 flex-1">{book.premise}</p>
              <a
                href={`mailto:nickolasstricker@gmail.com?subject=${encodeURIComponent(book.mailSubject)}`}
                className="btn-gradient mt-6 w-full text-center px-8 py-4 rounded-full"
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

"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faBookOpen, faPenNib } from "@fortawesome/free-solid-svg-icons";

import IconTile from "../../components/IconTile";
import SectionHeader from "../../components/SectionHeader";
import EmailCaptureModal from "../../components/EmailCaptureModal";
import { libraryCopy, type Book } from "../copy";

export default function BookLibrary() {
  const { books, signupModal } = libraryCopy;
  const [activeBook, setActiveBook] = useState<Book | null>(null);

  return (
    <section id={books.id} className="section-pad scroll-mt-16 bg-gradient-purple-black text-white">
      <div className="mx-auto max-w-6xl">
        <SectionHeader eyebrow={books.eyebrow} eyebrowIcon={faBookOpen} title={books.title} subtitle={books.subtitle} />

        <div className="grid gap-6 md:grid-cols-2">
          {books.items.map((book, i) => (
            <motion.div
              key={book.id}
              className="surface-card surface-card-hover flex flex-col p-8"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.08 }}
            >
              <div className="flex items-center justify-between gap-3">
                <IconTile icon={faBookOpen} />
                <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.12em] text-amber-300">
                  {book.badge}
                </span>
              </div>
              <h3 className="mt-6 text-2xl font-semibold">{book.title}</h3>
              <p className="mt-2 text-sm italic leading-relaxed text-ink-subtle">{book.subtag}</p>
              <p className="mt-4 flex-1 text-[15px] leading-relaxed text-ink-muted">{book.description}</p>
              <button type="button" onClick={() => setActiveBook(book)} className="btn-inverted mt-8 w-full gap-2">
                <FontAwesomeIcon icon={i === 0 ? faPenNib : faBell} className="text-sm" aria-hidden />
                {book.ctaText}
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      <EmailCaptureModal
        open={activeBook !== null}
        onClose={() => setActiveBook(null)}
        listName={activeBook?.listName ?? ""}
        heading={activeBook ? `${activeBook.ctaText}: ${activeBook.title}` : undefined}
        copy={signupModal}
      />
    </section>
  );
}

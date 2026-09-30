"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faBookOpen, faLightbulb, faVault } from "@fortawesome/free-solid-svg-icons";

import IconTile from "./IconTile";
import SectionHeader from "./SectionHeader";
import { libraryCopy } from "../library/copy";

/** Homepage preview of the Library & IP: the Digital Vault platform and the upcoming books. */
export default function LibraryTeaser() {
  const { vault, books } = libraryCopy;
  const cards = [
    {
      icon: faVault,
      eyebrow: `${vault.eyebrow} · ${vault.status}`,
      title: vault.title,
      body: vault.overview,
      href: `/library#${vault.id}`,
      linkText: "See the Digital Vault",
    },
    {
      icon: faBookOpen,
      eyebrow: books.eyebrow,
      title: books.items.map((b) => b.title).join(" & "),
      body: books.subtitle,
      href: `/library#${books.id}`,
      linkText: "Join the reader lists",
    },
  ];

  return (
    <section id="library-ip" className="section-pad scroll-mt-16 bg-page text-white">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="The Library & IP"
          eyebrowIcon={faLightbulb}
          title="Software and ideas, built to last."
          subtitle="A private portal platform in development, and two books on systems thinking, vocal authority, and stoic execution."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.08 }}
            >
              <Link href={card.href} className="surface-card surface-card-hover group flex h-full flex-col p-8">
                <IconTile icon={card.icon} className="mb-6" />
                <div className="eyebrow">{card.eyebrow}</div>
                <h3 className="mt-2 text-xl font-semibold">{card.title}</h3>
                <p className="mt-2 flex-1 text-[15px] leading-relaxed text-ink-muted">{card.body}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-green-400">
                  {card.linkText}
                  <FontAwesomeIcon icon={faArrowRight} className="text-xs transition-transform group-hover:translate-x-1" aria-hidden />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

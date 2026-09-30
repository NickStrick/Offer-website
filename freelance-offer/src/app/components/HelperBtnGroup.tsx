"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faCertificate, faFolderOpen, faLocationDot, faSeedling, faStar } from "@fortawesome/free-solid-svg-icons";

import Pfp from "../../../public/face.jpg";
import Socials from "./Socials";

type HelperBtnGroupProps = {
  reviewsHref?: string;
  title?: string;
  bio?: readonly string[];
};

const defaultBio = [
  "I’m Nick, a full-stack engineer who architects and audits production systems.",
  "I’ve worked inside 600,000-line enterprise execution engines, shipping webhook delivery layers and real-time platforms that drove a 30% performance optimization and a 22% drop in user friction tickets.",
];

/** Founder / portfolio block: headshot, short bio, socials, and links to previous work. */
export default function HelperBtnGroup({
  reviewsHref = "/#testimonials",
  title = "Engineering depth, with the communication of a sales engineer.",
  bio = defaultBio,
}: HelperBtnGroupProps) {
  return (
    <section className="section-pad bg-page text-white">
      <motion.div
        className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-16"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="relative mx-auto w-full max-w-sm md:max-w-none">
          <div aria-hidden className="absolute -inset-6 -z-0 rounded-[32px] bg-gradient-to-tr from-green-500/20 via-transparent to-amber-500/15 blur-2xl" />
          <div className="surface-card relative overflow-hidden !rounded-3xl p-2">
            <Image
              src={Pfp}
              alt="Nick Stricker"
              sizes="(max-width: 768px) 384px, 480px"
              className="aspect-square w-full rounded-[20px] object-cover"
              priority
            />
          </div>
        </div>

        <div>
          <div className="eyebrow">
            <FontAwesomeIcon icon={faSeedling} aria-hidden />
            About
          </div>
          <h2 className="display-title mt-4">{title}</h2>
          <div className="mt-6 space-y-4">
            {bio.map((line) => (
              <p key={line} className="lead-text">
                {line}
              </p>
            ))}
          </div>
          <div className="mt-6 flex items-center gap-2 text-sm text-ink-subtle">
            <FontAwesomeIcon icon={faLocationDot} aria-hidden />
            Nick Stricker · Founder · Chicago, IL
          </div>

          <Socials />

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="https://www.nickolasstricker.com/projects" target="_blank" className="btn-inverted gap-2 !px-5 !py-2.5 !text-sm">
              <FontAwesomeIcon icon={faFolderOpen} aria-hidden />
              Previous Projects
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-[10px] opacity-60" aria-hidden />
            </Link>
            <Link href="https://www.nickolasstricker.com/skills#certificate" target="_blank" className="btn-inverted gap-2 !px-5 !py-2.5 !text-sm">
              <FontAwesomeIcon icon={faCertificate} aria-hidden />
              Certifications
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-[10px] opacity-60" aria-hidden />
            </Link>
            <Link href={reviewsHref} className="btn-inverted gap-2 !px-5 !py-2.5 !text-sm">
              <FontAwesomeIcon icon={faStar} aria-hidden />
              Reviews
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

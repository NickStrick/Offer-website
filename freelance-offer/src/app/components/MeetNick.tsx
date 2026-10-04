"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import Pfp from "../../../public/face.jpg";
import { journeyCopy, meetNickCopy } from "../offers/copy";

/** Compact "Meet Nick" card: a short, friendly intro between the proof and the journey. */
export default function MeetNick({ className = "bg-page" }: { className?: string }) {
  return (
    <section className={`${className} px-6 py-16 text-white`}>
      <motion.div
        className="surface-card mx-auto flex max-w-4xl flex-col items-center gap-7 p-7 text-center md:flex-row md:items-center md:p-9 md:text-left"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Image
          src={Pfp}
          alt="Nick Stricker"
          width={224}
          height={224}
          className="h-56 w-56 shrink-0 rounded-full object-cover ring-2 ring-green-500/40"
        />
        <div>
          <h2 className="text-2xl font-semibold">{meetNickCopy.name}</h2>
          <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">{meetNickCopy.body}</p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row md:justify-start">
            <a href={journeyCopy.youtubeUrl} target="_blank" rel="noreferrer" className="btn-inverted gap-2 !px-5 !py-2.5 !text-sm">
              <FontAwesomeIcon icon={faYoutube} aria-hidden />
              Watch on YouTube
            </a>
            <Link href="/contact#about" className="btn-inverted gap-2 !px-5 !py-2.5 !text-sm">
              Read my story
              <FontAwesomeIcon icon={faArrowRight} className="text-xs" aria-hidden />
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

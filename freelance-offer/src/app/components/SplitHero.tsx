"use client";
import type { ReactNode } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faCartShopping, faCode, faXmark } from "@fortawesome/free-solid-svg-icons";

import Leafs from "../../../public/SDLogoLeafs.png";
import { isMediaReady, showVideoPlaceholders, type VideoMedia } from "../media";
import { splitHero } from "../offers/brand";
import { CurlyArrow, Enso } from "./Sketch";
import { VideoPlayer } from "./Video";

const pathIcons = { saas: faCode, stores: faCartShopping } as const;

/** Homepage hero: the Shifu Builder promise, optional intro video, then "which one are you?" with a path per customer. */
export default function SplitHero({ intro, video }: { intro?: ReactNode; video?: VideoMedia }) {
  const { eyebrow, headlineStart, headlineEnd, underlineWord, subheadline, question, paths, handNote } = splitHero;
  const rest = headlineStart.slice(underlineWord.length);

  return (
    <section className="relative isolate overflow-hidden bg-page px-6 pb-20 pt-24 md:pb-24 md:pt-32">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="grid-backdrop absolute inset-0" />
        <div className="absolute left-1/2 top-[-180px] h-[520px] w-[900px] -translate-x-[60%] rounded-full bg-green-500/20 blur-[120px]" />
        <div className="absolute left-1/2 top-[-120px] h-[420px] w-[620px] translate-x-[5%] rounded-full bg-amber-500/15 blur-[120px]" />
        {/* Faint ensō behind the headline */}
        <Enso className="absolute left-1/2 top-16 h-[420px] w-[420px] -translate-x-1/2 text-white/[0.04] md:top-10 md:h-[560px] md:w-[560px]" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <motion.div
        className="relative mx-auto max-w-5xl text-center"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="mx-auto mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] py-1.5 pl-2 pr-4 text-sm text-ink-muted">
          <Image src={Leafs} alt="" width={20} height={20} className="h-5 w-5" priority />
          {eyebrow}
        </div>

        <h1
          className="text-[2.6rem] font-semibold leading-[1.06] text-white sm:text-6xl md:text-7xl"
          style={{ letterSpacing: "-0.045em" }}
        >
          <span className="ink-underline">{underlineWord}</span>
          {rest}
          <br />
          <span className="bg-gradient-to-r from-green-300 via-white to-amber-200 bg-clip-text text-transparent">
            {headlineEnd}
          </span>
        </h1>

        <p className="lead-text mx-auto mt-6 max-w-2xl md:text-xl">{subheadline}</p>

        {intro ? <div className="mx-auto mt-8 flex max-w-3xl items-center justify-center gap-3 text-sm text-ink-muted">{intro}</div> : null}

        {video && (isMediaReady(video) || showVideoPlaceholders) ? (
          <div id="intro-video" className="mx-auto mt-10 max-w-3xl scroll-mt-16">
            <VideoPlayer video={video} />
          </div>
        ) : null}

        <div className="relative mx-auto mt-14 max-w-4xl">
          <div className="flex items-end justify-center gap-3">
            <h2 className="font-hand text-3xl text-white md:text-4xl">{question}</h2>
          </div>
          <p className="hand-note mt-1 hidden text-xl md:block">{handNote}</p>
          <CurlyArrow className="absolute left-[64%] top-[-6px] hidden h-20 w-16 text-amber-300/80 lg:block" />

          <div className="mt-8 grid gap-6 text-left md:grid-cols-2">
            {paths.map((path, i) => (
              <motion.a
                key={path.id}
                href={path.href}
                className="sketch-card group isolate flex flex-col p-7 transition-colors hover:border-green-500/60 md:p-8"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 + i * 0.1 }}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`flex h-11 w-11 items-center justify-center rounded-xl border text-lg ${
                      i === 0 ? "border-green-500/40 bg-green-500/10 text-green-400" : "border-amber-500/40 bg-amber-500/10 text-amber-300"
                    }`}
                  >
                    <FontAwesomeIcon icon={pathIcons[path.id as keyof typeof pathIcons]} aria-hidden />
                  </span>
                  <div>
                    <div className="text-lg font-semibold text-white">{path.label}</div>
                    <div className="text-xs uppercase tracking-[0.14em] text-ink-subtle">{path.note}</div>
                  </div>
                </div>

                <ul className="mt-6 space-y-3">
                  {path.pains.map((pain) => (
                    <li key={pain} className="flex gap-3 text-[15px] leading-relaxed text-zinc-300">
                      <FontAwesomeIcon icon={faXmark} className="mt-1.5 w-3 shrink-0 text-red-400/80" aria-hidden />
                      <span>{pain}</span>
                    </li>
                  ))}
                </ul>

                <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-green-400">
                  {path.cta}
                  <FontAwesomeIcon icon={faArrowDown} className="text-xs transition-transform group-hover:translate-y-0.5" aria-hidden />
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

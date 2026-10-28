"use client";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faCubes, faGolfBallTee, faPhoneVolume, faYinYang } from "@fortawesome/free-solid-svg-icons";

import SectionHeader from "./SectionHeader";
import { Enso } from "./Sketch";
import { pillarStories } from "../offers/brand";

const pillarIcons: Record<string, IconDefinition> = {
  "simple-systems": faCubes,
  "calm-communication": faPhoneVolume,
  "daily-reps": faGolfBallTee,
};

const pillarTones = ["text-green-400", "text-amber-300", "text-sky-300"];

/** The three Shifu Builder pillars, each told through a true story. */
export default function PillarStories({ className = "bg-page" }: { className?: string }) {
  const { eyebrow, title, subtitle, stories } = pillarStories;

  return (
    <section className={`${className} section-pad relative isolate overflow-hidden text-white`}>
      <Enso className="pointer-events-none absolute -right-24 top-10 -z-10 h-[420px] w-[420px] text-white/[0.03]" />

      <div className="mx-auto max-w-6xl">
        <SectionHeader eyebrow={eyebrow} eyebrowIcon={faYinYang} title={title} subtitle={subtitle} />

        <div className="grid gap-8 lg:grid-cols-3">
          {stories.map((story, i) => (
            <motion.article
              key={story.id}
              className="sketch-card isolate flex flex-col p-7 md:p-8"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.1 }}
            >
              <div className={`flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.14em] ${pillarTones[i]}`}>
                <span className="font-hand text-3xl normal-case tracking-normal">{i + 1}.</span>
                <FontAwesomeIcon icon={pillarIcons[story.id]} aria-hidden />
                {story.pillar}
              </div>
              <h3 className="mt-4 text-2xl font-semibold leading-snug">{story.title}</h3>
              <div className="mt-4 space-y-3">
                {story.story.map((line) => (
                  <p key={line} className="text-[15px] leading-relaxed text-zinc-300">
                    {line}
                  </p>
                ))}
              </div>
              <p className="mt-auto pt-6 font-hand text-2xl leading-tight text-amber-300">→ {story.lesson}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

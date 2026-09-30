"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faUsers } from "@fortawesome/free-solid-svg-icons";

import SectionHeader from "../../components/SectionHeader";

export default function WhoThisIsFor({
  title,
  intro,
  bullets,
  className = "bg-gradient-purple-black",
}: {
  title: string;
  intro?: string;
  bullets: readonly string[];
  className?: string;
}) {
  return (
    <section className={`${className} section-pad text-white`}>
      <div className="mx-auto grid max-w-6xl items-start gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
        <SectionHeader eyebrow="Ideal fit" eyebrowIcon={faUsers} title={title} subtitle={intro} align="left" className="!mb-0" />

        <ul className="surface-card divide-y divide-white/[0.06] px-7">
          {bullets.map((b) => (
            <li key={b} className="flex gap-4 py-5 text-base text-zinc-200">
              <FontAwesomeIcon icon={faCircleCheck} className="mt-1 w-4 shrink-0 text-green-400" aria-hidden />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

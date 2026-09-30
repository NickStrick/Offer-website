"use client";
import { faMagnifyingGlassChart } from "@fortawesome/free-solid-svg-icons";

import IconTile from "../../components/IconTile";
import SectionHeader from "../../components/SectionHeader";
import type { OffersFrameworkItem } from "../copy";

export default function Framework({
  id = "framework",
  title,
  subtitle,
  items,
  className = "bg-page",
}: {
  id?: string;
  title: string;
  subtitle?: string;
  items: readonly OffersFrameworkItem[];
  className?: string;
}) {
  return (
    <section id={id} className={`${className} section-pad scroll-mt-16 text-white`}>
      <div className="mx-auto max-w-6xl">
        <SectionHeader eyebrow="Systems auditing" eyebrowIcon={faMagnifyingGlassChart} title={title} subtitle={subtitle} />

        <div className="grid gap-5 md:grid-cols-3">
          {items.map((item) => (
            <div key={item.title} className="surface-card surface-card-hover p-7">
              {item.icon ? <IconTile icon={item.icon} className="mb-6" /> : null}
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-muted">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

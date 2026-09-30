"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faDiagramProject,
  faFolderOpen,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";

import { MediaPlaceholder } from "./Video";
import SectionHeader from "./SectionHeader";
import { isMediaReady, showMediaPlaceholders } from "../media";
import { caseStudies, caseStudiesHeader, type OffersCaseStudy } from "../offers/copy";

const rowIcons = {
  friction: faTriangleExclamation,
  architecture: faDiagramProject,
  metric: faChartLine,
} as const;

function CaseStudyCard({ study, flip }: { study: OffersCaseStudy; flip: boolean }) {
  const hasImage = isMediaReady(study.image);
  const showMedia = hasImage || showMediaPlaceholders;
  const rows = [
    { key: "friction", ...study.friction },
    { key: "architecture", ...study.architecture },
    { key: "metric", ...study.metric },
  ] as const;

  return (
    <motion.article
      className={`surface-card overflow-hidden ${study.published ? "" : "!border-dashed !border-green-500/40"}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className={showMedia ? "grid md:grid-cols-2" : ""}>
        {showMedia ? (
          <div className={`relative aspect-[16/10] bg-black/40 md:aspect-auto md:min-h-full ${flip ? "md:order-2" : ""}`}>
            {hasImage ? (
              <Image
                src={study.image.src}
                alt={study.image.alt}
                fill
                sizes="(max-width: 768px) 100vw, 560px"
                className="object-cover"
              />
            ) : (
              <MediaPlaceholder
                label={`Image: ${study.image.src || "add an image"} (1600×1000)`}
                className="!aspect-auto h-full !rounded-none !border-0"
              />
            )}
          </div>
        ) : null}

        <div className="p-7 md:p-10">
          <div className="eyebrow">{study.eyebrow}</div>
          <h3 className="mt-3 text-2xl font-semibold md:text-[1.75rem]" style={{ letterSpacing: "-0.03em" }}>
            {study.title}
          </h3>

          <dl className={`mt-8 grid gap-6 ${showMedia ? "" : "md:grid-cols-3"}`}>
            {rows.map((row) => (
              <div key={row.key} className={row.key === "metric" ? "rounded-xl border border-green-500/20 bg-green-500/[0.06] p-4" : ""}>
                <dt className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.14em] text-ink-subtle">
                  <FontAwesomeIcon
                    icon={rowIcons[row.key]}
                    className={`w-3.5 ${row.key === "metric" ? "text-green-400" : ""}`}
                    aria-hidden
                  />
                  {row.label}
                </dt>
                <dd
                  className={`mt-2 leading-relaxed ${
                    row.key === "metric" ? "text-base font-medium text-white" : "text-[15px] text-ink-muted"
                  }`}
                >
                  {row.text}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </motion.article>
  );
}

export default function CaseStudies({ className = "bg-gradient-purple-black" }: { className?: string }) {
  const visible = caseStudies.filter((s) => s.published || showMediaPlaceholders);
  if (!visible.length) return null;

  return (
    <section id={caseStudiesHeader.id} className={`${className} section-pad scroll-mt-16 text-white`}>
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow={caseStudiesHeader.eyebrow}
          eyebrowIcon={faFolderOpen}
          title={caseStudiesHeader.title}
          subtitle={caseStudiesHeader.subtitle}
        />

        <div className="grid gap-6">
          {visible.map((study, i) => (
            <CaseStudyCard key={study.id} study={study} flip={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

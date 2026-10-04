"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faChartLine,
  faDiagramProject,
  faFolderOpen,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";

import SectionHeader from "./SectionHeader";
import { imageOrFallback, isMediaReady, showMediaPlaceholders } from "../media";
import { caseStudies, caseStudiesHeader, moreWork, type OffersCaseStudy } from "../offers/copy";

const rowIcons = {
  friction: faTriangleExclamation,
  architecture: faDiagramProject,
  metric: faChartLine,
} as const;

function CaseStudyCard({ study, flip }: { study: OffersCaseStudy; flip: boolean }) {
  const image = imageOrFallback(study.image);
  const isFallback = !isMediaReady(study.image);
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
      <div className="grid md:grid-cols-2">
        <div className={`relative aspect-[16/10] bg-black/40 md:aspect-auto md:min-h-full ${flip ? "md:order-2" : ""}`}>
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(max-width: 768px) 100vw, 560px"
            className={`object-cover ${isFallback ? "" : "object-left-top"}`}
          />
          {/* Soften the stand-in photo so it sits with the dark theme */}
          {isFallback ? <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" /> : null}
        </div>

        <div className="p-7 md:p-10">
          <div className="eyebrow">{study.eyebrow}</div>
          <h3 className="mt-3 text-2xl font-semibold md:text-[1.75rem]" style={{ letterSpacing: "-0.03em" }}>
            {study.title}
          </h3>

          <dl className="mt-8 grid gap-6">
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
          {study.link ? (
            <a href={study.link.href} target="_blank" rel="noreferrer" className="btn-inverted mt-6 gap-2 !px-5 !py-2.5 !text-sm">
              {study.link.label}
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-xs" aria-hidden />
            </a>
          ) : null}
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

        <h3 className="mt-16 text-center text-xl font-semibold">More sites I&apos;ve built</h3>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {moreWork.map((item, i) => (
            <motion.a
              key={item.id}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="surface-card surface-card-hover group flex flex-col overflow-hidden"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.08 }}
            >
              <div className="relative aspect-[16/10] bg-black/40">
                <Image src={item.image.src} alt={item.image.alt} fill sizes="(max-width: 768px) 100vw, 380px" className="object-cover object-top" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="eyebrow">{item.type}</div>
                <h4 className="mt-2 text-lg font-semibold">{item.name}</h4>
                <p className="mt-2 flex-1 text-[15px] leading-relaxed text-ink-muted">{item.description}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-green-400">
                  See the live site
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-xs" aria-hidden />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

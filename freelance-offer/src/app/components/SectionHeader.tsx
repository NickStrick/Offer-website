"use client";
import type { ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

/** Eyebrow + title + subtitle used at the top of every section. */
export default function SectionHeader({
  eyebrow,
  eyebrowIcon,
  title,
  subtitle,
  align = "center",
  className = "",
}: {
  eyebrow?: string;
  eyebrowIcon?: IconDefinition;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "center" | "left";
  className?: string;
}) {
  const centered = align === "center";
  return (
    <header className={`${centered ? "mx-auto text-center" : ""} mb-14 max-w-3xl ${className}`}>
      {eyebrow ? (
        <div className="eyebrow mb-4">
          {eyebrowIcon ? <FontAwesomeIcon icon={eyebrowIcon} aria-hidden /> : null}
          {eyebrow}
        </div>
      ) : null}
      <h2 className="display-title">{title}</h2>
      {subtitle ? <p className={`lead-text mt-5 ${centered ? "mx-auto max-w-2xl" : ""}`}>{subtitle}</p> : null}
    </header>
  );
}

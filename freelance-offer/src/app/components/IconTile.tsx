"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

/** Square icon badge used at the top of feature cards. */
export default function IconTile({ icon, className = "" }: { icon: IconDefinition; className?: string }) {
  return (
    <div
      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-green-500/30 bg-green-500/10 text-xl text-green-400 ${className}`}
    >
      <FontAwesomeIcon icon={icon} aria-hidden />
    </div>
  );
}

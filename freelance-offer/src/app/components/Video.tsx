"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faCirclePlay, faImage } from "@fortawesome/free-solid-svg-icons";

import SectionHeader from "./SectionHeader";
import { isMediaReady, showVideoPlaceholders, type VideoMedia } from "../media";

const isFile = (src: string) => /\.(mp4|webm|mov)(\?.*)?$/i.test(src);

/** Dashed dev-only box marking where media will go. Never rendered in production. */
export function MediaPlaceholder({
  label,
  icon = faImage,
  className = "",
}: {
  label: string;
  icon?: IconDefinition;
  className?: string;
}) {
  return (
    <div
      className={`flex aspect-video w-full flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-green-500/40 bg-zinc-950/60 p-6 text-center text-zinc-400 ${className}`}
    >
      <FontAwesomeIcon icon={icon} className="text-4xl text-green-500/70" aria-hidden />
      <div className="text-sm font-semibold text-zinc-300">{label}</div>
      <div className="text-xs">Placeholder, hidden in production until published in media.ts</div>
    </div>
  );
}

/** The player alone: <video> for files in /public, <iframe> for YouTube/Loom/Vimeo embeds. */
export function VideoPlayer({ video }: { video: VideoMedia }) {
  if (!isMediaReady(video)) {
    return showVideoPlaceholders ? <MediaPlaceholder label={`Video: ${video.title}`} icon={faCirclePlay} /> : null;
  }

  return (
    <div className="aspect-video w-full overflow-hidden rounded-2xl border border-zinc-800 bg-black shadow-2xl">
      {isFile(video.src) ? (
        <video src={video.src} poster={video.poster} controls playsInline preload="metadata" className="h-full w-full">
          <track kind="captions" />
        </video>
      ) : (
        <iframe
          src={video.src}
          title={video.title}
          className="h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          allowFullScreen
          loading="lazy"
        />
      )}
    </div>
  );
}

/** A full page section with heading + player. Renders nothing until the video is published. */
export default function VideoSection({
  video,
  id,
  className = "bg-page",
}: {
  video: VideoMedia;
  id?: string;
  className?: string;
}) {
  if (!isMediaReady(video) && !showVideoPlaceholders) return null;

  return (
    <section id={id} className={`${className} scroll-mt-16 px-6 pb-20 pt-4 text-white`}>
      <div className="mx-auto max-w-4xl">
        <SectionHeader eyebrow="Watch" eyebrowIcon={faCirclePlay} title={video.title} subtitle={video.caption} className="!mb-10" />
        <VideoPlayer video={video} />
      </div>
    </section>
  );
}

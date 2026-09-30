"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faCirclePlay, faImage } from "@fortawesome/free-solid-svg-icons";

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
      <div className="text-xs">Placeholder — hidden in production until published in media.ts</div>
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
  className = "bg-gradient-black-dark",
}: {
  video: VideoMedia;
  id?: string;
  className?: string;
}) {
  if (!isMediaReady(video) && !showVideoPlaceholders) return null;

  return (
    <section id={id} className={`${className} px-6 py-16 text-white`}>
      <div className="mx-auto max-w-4xl">
        <header className="mb-8 text-center">
          <div className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-green-400">
            <FontAwesomeIcon icon={faCirclePlay} aria-hidden />
            Watch
          </div>
          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold tracking-tight">{video.title}</h2>
          {video.caption ? <p className="mt-3 text-lg text-zinc-300">{video.caption}</p> : null}
        </header>
        <VideoPlayer video={video} />
      </div>
    </section>
  );
}

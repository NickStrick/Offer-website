'use client';

import Image from 'next/image';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faStar, faQuoteLeft, faQuoteRight, faComments } from '@fortawesome/free-solid-svg-icons';
import SectionHeader from './SectionHeader';

export type TestimonialItem = {
  quote: string;
  name: string;
  role?: string;
  avatarUrl?: string; // optional
};

export type TestimonialsStyle = {
  variant?: 'card' | 'ink' | 'carousel';   // ink = deep, primary-colored cards
  columns?: 2 | 3;            // default responsive cols
  showQuoteIcon?: boolean;    // default true
  rounded?: 'lg' | 'xl' | '2xl';
  background?: 'default' | 'band'; // band -> subtle tinted section bg
};

export type TestimonialsSection = {
  type: 'testimonials';
  title?: string;
  subtitle?: string;
  items: TestimonialItem[];
  style?: TestimonialsStyle;
};

// Small helper to render a fixed 5‑star rating
function Stars() {
return (
<div className="flex items-center gap-1 text-amber-400" aria-label="5 out of 5 stars">
{Array.from({ length: 5 }).map((_, i) => (
<FontAwesomeIcon key={i} icon={faStar} className="w-3 h-3" aria-hidden="true" />
))}
</div>
);
}



export default function Testimonials({
  title = 'Reviews & Testimonials',
  subtitle = 'This is what our previous clients had to say about us.',
  items = [],
  style = {},
}: TestimonialsSection) {
  const {
    variant = 'card',
    columns = 3,
    showQuoteIcon = true,
  } = style || {};

  const cardBase = 'testimonial-card p-7';
  const cardInk = 'testimonial-card p-7';

  const gridCols = columns === 2 ? 'md:columns-2' : 'md:columns-2 lg:columns-3';

  // ---------- Mobile carousel state (only used when variant === 'carousel') ----------
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (!trackRef.current || variant !== 'carousel') return;
    const el = trackRef.current;

    const onScroll = () => {
      const w = el.clientWidth;
      const i = Math.round(el.scrollLeft / (w * 0.86)); // 86% slide width (see below)
      setActive(Math.max(0, Math.min(items.length - 1, i)));
    };
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, [variant, items.length]);

  return (
    <section
    id="testimonials"
      className={[
        'bg-gradient-purple-black section-pad scroll-mt-16 text-white',
        '',
      ].join(' ')}
    >
      <AnimatedSection className="mx-auto max-w-6xl">
        {title ? <SectionHeader eyebrow="Testimonials" eyebrowIcon={faComments} title={title} subtitle={subtitle} /> : null}

        {/* ---------- MOBILE: swipeable carousel when variant === 'carousel' ---------- */}
        {variant === 'carousel' ? (
          <>
            <div
              ref={trackRef}
              className="md:hidden hide-scrollbar -mx-6 px-6 py-4 flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth"
            >
              {items.map((t, i) => (
                <figure key={`${t.name}-${i}`} className={`${cardBase} snap-center shrink-0 w-[86%]`}>
                  <CardBody t={t} showQuoteIcon={showQuoteIcon} />
                </figure>
              ))}
            </div>

            {/* mobile dots */}
            <div className="md:hidden mt-4 flex justify-center gap-2">
              {items.map((_, i) => (
                <button
                  key={i}
                  className={`h-2 rounded-full transition-all ${
                    i === active ? 'w-6 bg-[var(--color-green)]' : 'w-2 bg-white/20'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => {
                    const el = trackRef.current;
                    if (!el) return;
                    const slideW = el.clientWidth * 0.86 + 16; // width + gap (approx)
                    el.scrollTo({ left: i * slideW, behavior: 'smooth' });
                  }}
                />
              ))}
            </div>
          </>
        ) : null}

        {/* ---------- DESKTOP/TABLET: staggered masonry columns ---------- */}
        <div className={`hidden md:block gap-6 ${gridCols}`}>
          {items.map((t, i) => (
            <motion.figure
              key={`${t.name}-${i}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: (i % 3) * 0.08 }}
              className={`${variant === 'ink' ? cardInk : cardBase} mb-6 break-inside-avoid`}
            >
              <CardBody t={t} showQuoteIcon={showQuoteIcon} />
            </motion.figure>
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
}


type TestimonialCardItem = { quote: string; name: string; role?: string; avatarUrl?: string };

/** Inner layout shared by the mobile carousel and desktop columns. */
function CardBody({ t, showQuoteIcon }: { t: TestimonialCardItem; showQuoteIcon: boolean }) {
  return (
    <>
      <FontAwesomeIcon icon={faQuoteRight} className="testimonial-watermark" aria-hidden />
      <div className="mb-5 flex items-center justify-between">
        {showQuoteIcon ? (
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black/30 text-amber-300 ring-1 ring-white/15">
            <FontAwesomeIcon icon={faQuoteLeft} className="text-sm" aria-hidden />
          </span>
        ) : <span />}
        <Stars />
      </div>
      <blockquote className="text-[15px] font-semibold leading-relaxed tracking-wide text-white">{t.quote}</blockquote>
      <figcaption className="mt-6 flex items-center gap-3 border-t border-white/15 pt-5">
        {t.avatarUrl ? (
          <Image
            src={t.avatarUrl}
            alt={t.name}
            width={44}
            height={44}
            className="h-11 w-11 rounded-full object-cover ring-2 ring-white/30"
          />
        ) : (
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-black/30 ring-2 ring-white/30">
            <FontAwesomeIcon icon={faUser} className="text-white/80" aria-hidden />
          </span>
        )}
        <div>
          <div className="font-bold text-white">{t.name}</div>
          {t.role && <div className="text-sm text-white/75">{t.role}</div>}
        </div>
      </figcaption>
    </>
  );
}

export function AnimatedSection({
  children,
  className = '',
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  );
}
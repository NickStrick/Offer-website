'use client';

import { motion } from 'framer-motion';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faFacebook,
  faLinkedin,
  faXTwitter,
  faYoutube,
  faTiktok,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faGlobe } from '@fortawesome/free-solid-svg-icons';

export type SocialItem = {
  type:
    | 'instagram'
    | 'facebook'
    | 'linkedin'
    | 'x'
    | 'youtube'
    | 'tiktok'
    | 'email'
    | 'website';
  href: string; // mailto: allowed for email
  label?: string; // optional label under icon
};

const ICONS: Record<SocialItem['type'], IconDefinition> = {
  instagram: faInstagram,
  facebook: faFacebook,
  linkedin: faLinkedin,
  x: faXTwitter,
  youtube: faYoutube,
  tiktok: faTiktok,
  email: faEnvelope,
  website: faGlobe,
};
const items: SocialItem[] = [
  { type: "linkedin", href: "https://www.linkedin.com/in/nick-stricker/", label: "Linkedin" },
  { type: "youtube", href: "https://www.youtube.com/@NickStrickerDigital", label: "Youtube" },
  { type: "instagram", href: "https://www.instagram.com/nickolasstricker/", label: "Instagram" },
  { type: "email", href: `mailto:${'nick@strickerdigital.com'}`, label: "email" },
];
const style = { background: "band", rounded: "xl", size: "lg", gap: "md", align: "center" } as const;
const sizeMap = {
  sm: 'w-10 h-10 text-[18px]',
  md: 'w-14 h-14 text-[22px]',
  lg: 'w-16 h-16 text-4xl',
} as const;

const gapMap = {
  sm: 'gap-3',
  md: 'gap-5',
  lg: 'gap-6',
} as const;
export default function Socials() {
    const rounded = '!rounded-full';
  const iconSizeCls = sizeMap[style.size];
  const gapCls = gapMap[style.gap];
  return (
        <motion.ul
          className={`flex flex-wrap justify-center ${'gap-5'} mt-3 mb-6`}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: { opacity: 0, y: 16 },
            show: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.08, ease: 'easeOut', duration: 0.5 },
            },
          }}
        >
          {items.map((s, i) => (
            <motion.li
              key={`${s.type}-${i}`}
              variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}
            >
              <a
                href={s.href}
                target={s.type === 'email' ? undefined : '_blank'}
                rel={s.type === 'email' ? undefined : 'noreferrer'}
                className={`group inline-flex flex-col items-center ${gapCls}`}
              >
                <span
                  className={`btn-gradient btn-gradient-icon !flex ${rounded} ${iconSizeCls} text-4xl  items-center justify-center !shadow-[var(--elev-2)] bg-[length:150%] transition-border duration-200 border-[2px] border-transparent hover:border-white`}
                  aria-label={s.label ?? s.type}
                >
                  <FontAwesomeIcon icon={ICONS[s.type]} />
                </span>
                {s.label && (
                  <span className="text-sm text-muted mt-2 capitalize font-bold">{s.label}</span>
                )}
              </a>
            </motion.li>
          ))}
        </motion.ul>
  );
}

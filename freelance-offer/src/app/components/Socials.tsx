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
  { type: "youtube", href: "https://www.youtube.com/@NickolasStricker", label: "Youtube" },
  { type: "instagram", href: "https://www.instagram.com/nickolasstricker/", label: "Instagram" },
  { type: "email", href: `mailto:${'nick@strickerdigital.com'}`, label: "email" },
];
export default function Socials({ className = "mt-6" }: { className?: string }) {
  return (
        <motion.ul
          className={`flex flex-wrap gap-2 ${className}`}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: { opacity: 0, y: 8 },
            show: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.06, ease: 'easeOut', duration: 0.4 },
            },
          }}
        >
          {items.map((s, i) => (
            <motion.li
              key={`${s.type}-${i}`}
              variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }}
            >
              <a
                href={s.href}
                target={s.type === 'email' ? undefined : '_blank'}
                rel={s.type === 'email' ? undefined : 'noreferrer'}
                aria-label={s.label ?? s.type}
                title={s.label ?? s.type}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.02] text-ink-muted transition hover:border-white/20 hover:text-white"
              >
                <FontAwesomeIcon icon={ICONS[s.type]} />
              </a>
            </motion.li>
          ))}
        </motion.ul>
  );
}

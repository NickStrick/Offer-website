'use client';
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faYoutube, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";

import Logo from "../../../public/SDLogoTrans.png";
import { useLanguage } from "../context/LanguageContext";
import { SALES_EMAIL } from "../offers/copy";

const socials = [
  { href: "https://www.linkedin.com/in/nick-stricker/", label: "LinkedIn", icon: faLinkedin },
  { href: "https://www.youtube.com/@NickStrickerDigital", label: "YouTube", icon: faYoutube },
  { href: "https://www.instagram.com/nickolasstricker/", label: "Instagram", icon: faInstagram },
];

export default function Footer() {
  const { language } = useLanguage();
  const es = language === 'es';

  const columns = [
    {
      title: es ? 'Sitio' : 'Company',
      links: [
        { href: "/", label: es ? 'Inicio' : 'Home' },
        { href: "/offers", label: es ? 'Ofertas' : 'Offers' },
        { href: "/library", label: es ? 'Biblioteca' : 'Library' },
        { href: "/contact", label: es ? 'Contacto' : 'Contact' },
        { href: "https://www.nickolasstricker.com", label: es ? 'Portafolio' : 'Portfolio' },
      ],
    },
    {
      title: es ? 'Ofertas' : 'Offers',
      links: [
        { href: "/offers#communication-masterclass", label: "Communication System ($500)" },
        { href: "/offers#presentation-sprint", label: "SE Accelerator Sprint ($2,500)" },
        { href: "/offers#enterprise-audit", label: "Enterprise Audit ($5,000)" },
        { href: "/offers#enterprise-retainer", label: "Vault Implementation ($50,000)" },
        { href: "/library#digital-vault", label: "The Digital Vault" },
      ],
    },
    {
      title: es ? 'Recursos gratis' : 'Free Resources',
      links: [
        { href: "/#free-checklist", label: "The 2026 Enterprise Infrastructure Checklist (Whiteboard Video)" },
        { href: "/library#books", label: "\"The Iteration Loop\" Book Beta Waitlist" },
      ],
    },
  ];

  return (
    <footer className="border-t border-white/[0.06] bg-page px-6 pt-16 pb-10 text-white">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_1.1fr_1.2fr_1.1fr]">
        <div>
          <Link href="/" className="flex items-center gap-2.5 text-[15px] font-semibold tracking-tight">
            <Image src={Logo} alt="" width={28} height={28} className="h-7 w-7" />
            Stricker Digital
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-muted">
            Architecture, communication, and system strategy for B2B platforms.
          </p>
          <div className="mt-6 flex gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-ink-muted transition hover:border-white/20 hover:text-white"
              >
                <FontAwesomeIcon icon={s.icon} />
              </a>
            ))}
          </div>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <h3 className="text-sm font-medium text-white">{col.title}</h3>
            <ul className="mt-4 space-y-3 text-sm">
              {col.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-ink-muted transition hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h3 className="text-sm font-medium text-white">{es ? 'Contacto' : 'Contact'}</h3>
          <ul className="mt-4 space-y-3 text-sm text-ink-muted">
            <li>
              <a href={`mailto:${SALES_EMAIL}`} className="inline-flex items-center gap-2 transition hover:text-white">
                <FontAwesomeIcon icon={faEnvelope} className="w-4" aria-hidden />
                {SALES_EMAIL}
              </a>
            </li>
            <li className="inline-flex items-center gap-2">
              <FontAwesomeIcon icon={faLocationDot} className="w-4" aria-hidden />
              Chicago, IL
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-14 flex max-w-6xl flex-col gap-3 border-t border-white/[0.06] pt-8 text-xs text-ink-subtle md:flex-row md:justify-between">
        <span>&copy; {new Date().getFullYear()} Stricker Digital. All rights reserved.</span>
        <span className="max-w-2xl md:text-right">
          The information contained within this website is the property of nickolasstricker.com. Any use of the images, content, or ideas expressed herein without the express written consent of nickolasstricker.com is prohibited.
        </span>
      </div>
    </footer>
  );
}

'use client';
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

import Logo from "../../../public/SDLogoTrans.png";

const links = [
  { href: "/", label: "Home" },
  { href: "/offers", label: "Offers" },
  { href: "/library", label: "Library" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/[0.06] bg-[#0f110f]/80 text-white backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2.5 text-[15px] font-semibold tracking-tight">
          <Image src={Logo} alt="" width={28} height={28} className="h-7 w-7" priority />
          <span>Stricker Digital</span>
        </Link>

        <nav className="hidden items-center gap-1 text-sm md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-lg px-3 py-2 transition ${
                isActive(link.href) ? "text-white" : "text-ink-muted hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/offers#apply" className="btn-gradient ml-3 !px-4 !py-2 !text-sm">
            Apply for Audit
          </Link>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <FontAwesomeIcon icon={open ? faXmark : faBars} className="text-base" />
        </button>
      </div>

      {open ? (
        <nav className="flex flex-col gap-1 border-t border-white/[0.06] px-6 py-4 text-[15px] md:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`rounded-lg px-3 py-2.5 ${isActive(link.href) ? "bg-white/5 text-white" : "text-ink-muted"}`}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/offers#apply" onClick={() => setOpen(false)} className="btn-gradient mt-2">
            Apply for Audit
          </Link>
        </nav>
      ) : null}
    </header>
  );
}

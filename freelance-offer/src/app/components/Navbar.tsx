'use client';
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

import Logo from "../../../public/SDLogoTrans.png";

const links = [
  { href: "/", label: "Home" },
  { href: "/revenue-consult", label: "Consult" },
  { href: "/library", label: "Library" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-black/90 text-white">
      <div className="max-w-6xl mx-auto px-6 py-2 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-sm tracking-tight">
          <Image src={Logo} alt="Stricker Digital" width={28} height={28} className="h-7 w-7" priority />
          <span className="gradient-text-color">Stricker Digital</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-accent transition">
              {link.label}
            </Link>
          ))}
          <Link href="/revenue-consult#book" className="btn-gradient px-5 py-1.5 rounded-full text-sm">
            Book a Consult
          </Link>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open ? (
        <nav className="md:hidden border-t border-white/10 px-6 py-3 flex flex-col gap-3 text-sm font-medium">
          {links.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
          <Link
            href="/revenue-consult#book"
            onClick={() => setOpen(false)}
            className="btn-gradient px-5 py-1.5 rounded-full text-sm text-center"
          >
            Book a Consult
          </Link>
        </nav>
      ) : null}
    </header>
  );
}

"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";
import Logo from "@/components/Logo";

const LINKS = [
  { href: "#apropos", label: "À propos" },
  { href: "#services", label: "Services" },
  { href: "#realisations", label: "Réalisations" },
  { href: "#methode", label: "Méthode" },
  { href: "#avis", label: "Avis" },
  { href: "#faq", label: "FAQ" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      gsap.fromTo(
        ".mobile-nav-link",
        { y: 24, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.06, duration: 0.5, ease: "power3.out" }
      );
    }
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-navy/10 bg-surface py-4 shadow-sm">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 sm:px-8">
        <a href="#top" className="flex items-center">
          <Logo className="h-9 w-auto sm:h-10" />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-sm font-medium text-concrete-dark transition-colors hover:text-navy-dark"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden rounded-md bg-gold px-6 py-2.5 font-body text-sm font-semibold uppercase tracking-wide text-navy-dark transition-colors hover:bg-gold-light sm:block"
          >
            Devis gratuit
          </a>
          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          >
            <span
              className={`h-px w-6 bg-navy-dark transition-transform duration-300 ${
                open ? "translate-y-[3.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-6 bg-navy-dark transition-transform duration-300 ${
                open ? "-translate-y-[3.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {open && (
        <div className="mx-4 mt-3 rounded-2xl border border-navy/10 bg-surface px-8 py-8 shadow-lg lg:hidden">
          <nav className="flex flex-col gap-5">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="mobile-nav-link font-display text-2xl font-semibold text-navy-dark"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mobile-nav-link mt-2 w-fit rounded-md bg-gold px-6 py-3 font-body text-sm font-semibold text-navy-dark"
            >
              Devis gratuit
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

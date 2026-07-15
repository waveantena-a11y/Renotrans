"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

export default function Hero() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-anim",
        { y: 24, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: "power2.out", stagger: 0.12, delay: 0.15 }
      );
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      className="relative flex h-[85vh] min-h-[560px] w-full items-center overflow-hidden"
    >
      <Image
        src="/images/hero-chantier.png"
        alt="Rénovation et transformation RENOTRANS"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-navy-dark/70" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/90 via-navy-dark/50 to-navy-dark/40" />

      <div className="relative z-10 mx-auto w-full max-w-[1300px] px-6 sm:px-10 md:px-14">
        <p className="hero-anim font-body text-sm font-semibold uppercase tracking-[0.2em] text-gold-light">
          Entreprise générale de rénovation — Bruxelles
        </p>

        <h1 className="hero-anim mt-5 max-w-2xl font-display text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
          Rénovation & transformation, tous corps d&apos;état
        </h1>

        <p className="hero-anim mt-6 max-w-xl font-body text-base leading-relaxed text-white/85 sm:text-lg">
          Entreprise générale de rénovation basée à Bruxelles. Gros œuvre,
          finitions, châssis — un seul interlocuteur, un devis gratuit et un
          travail soigné du début à la fin.
        </p>

        <div className="hero-anim mt-9 flex flex-wrap items-center gap-4">
          <a
            href="#contact"
            className="rounded-md bg-gold px-8 py-3.5 font-body text-sm font-semibold uppercase tracking-wide text-navy-dark transition-colors duration-200 hover:bg-gold-light"
          >
            Demander un devis
          </a>
          <a
            href="#realisations"
            className="rounded-md border border-white/50 px-8 py-3.5 font-body text-sm font-semibold uppercase tracking-wide text-white transition-colors duration-200 hover:bg-white/10"
          >
            Nos réalisations
          </a>
        </div>
      </div>
    </section>
  );
}

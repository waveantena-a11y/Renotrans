"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import BeforeAfterSlider from "./BeforeAfterSlider";
import { REALISATIONS } from "@/lib/content";

const GRADIENTS = [
  "linear-gradient(135deg,#2e2f78,#16173d)",
  "linear-gradient(135deg,#55554f,#16173d)",
  "linear-gradient(135deg,#a9822b,#16173d)",
  "linear-gradient(135deg,#4d4fb0,#08080d)",
];

export default function Realisations() {
  const categories = useMemo(
    () => ["Tout", ...Array.from(new Set(REALISATIONS.map((item) => item.category)))],
    []
  );
  const [active, setActive] = useState("Tout");

  const filtered =
    active === "Tout"
      ? REALISATIONS
      : REALISATIONS.filter((item) => item.category === active);

  return (
    <section id="realisations" className="relative bg-surface-alt py-28 sm:py-36">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10 md:px-14">
        <Reveal as="p" className="font-body text-xs uppercase tracking-[0.35em] text-gold-dark">
          Réalisations
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-6 max-w-2xl font-display text-4xl font-semibold leading-[1.05] text-navy-dark sm:text-5xl">
            La transformation, en un glissement.
          </h2>
        </Reveal>

        <Reveal delay={0.15} className="mt-14">
          <BeforeAfterSlider />
        </Reveal>

        <div className="mt-14 flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActive(category)}

              className={`rounded-full border px-5 py-2.5 font-body text-sm font-medium transition-colors duration-300 ${
                active === category
                  ? "border-navy-dark bg-navy-dark text-white"
                  : "border-navy/15 bg-surface text-concrete-dark hover:border-gold/50 hover:text-navy-dark"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {filtered.map((item, i) => (
            <motion.div
              key={item.title}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeOut" }}

              className="realisation-item group relative aspect-[3/4] overflow-hidden rounded-2xl border border-navy/10 shadow-[0_1px_3px_rgba(28,29,46,0.08)]"
            >
              {"image" in item && item.image ? (
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="absolute inset-0 object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  draggable={false}
                />
              ) : (
                <div
                  className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-110"
                  style={{ background: GRADIENTS[i % GRADIENTS.length] }}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent opacity-80" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <span className="font-body text-[11px] uppercase tracking-[0.25em] text-gold-light">
                  {item.category}
                </span>
                <h3 className="mt-2 font-display text-lg font-semibold text-white">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

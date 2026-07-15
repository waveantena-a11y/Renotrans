"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

type BeforeAfterSliderProps = {
  beforeSrc?: string;
  afterSrc?: string;
  beforeAlt?: string;
  afterAlt?: string;
};

export default function BeforeAfterSlider({
  beforeSrc = "/images/avant.jpg",
  afterSrc = "/images/apres.jpg",
  beforeAlt = "Avant rénovation",
  afterAlt = "Après rénovation",
}: BeforeAfterSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const percent = useMotionValue(50);
  const smoothPercent = useSpring(percent, {
    stiffness: 320,
    damping: 38,
    mass: 0.4,
  });
  const beforeClipPath = useTransform(
    smoothPercent,
    (v) => `inset(0 ${100 - v}% 0 0)`
  );
  const handleLeft = useTransform(smoothPercent, (v) => `${v}%`);

  const updateFromClientX = (clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    percent.set(Math.min(96, Math.max(4, pct)));
  };

  return (
    <div
      ref={containerRef}
      className="group relative aspect-[4/3] w-full touch-none select-none overflow-hidden rounded-3xl border border-white/10 sm:aspect-[16/9]"
      onPointerDown={(e) => {
        e.preventDefault();
        dragging.current = true;
        e.currentTarget.setPointerCapture(e.pointerId);
        updateFromClientX(e.clientX);
      }}
      onPointerMove={(e) => dragging.current && updateFromClientX(e.clientX)}
      onPointerUp={() => (dragging.current = false)}
      onPointerCancel={() => (dragging.current = false)}
    >
      {/* "After" layer, full base image */}
      <div className="absolute inset-0">
        <Image
          src={afterSrc}
          alt={afterAlt}
          fill
          sizes="(max-width: 768px) 100vw, 1200px"
          className="object-cover"
          draggable={false}
          onDragStart={(e) => e.preventDefault()}
          priority
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />
        <span className="absolute bottom-6 right-6 font-body text-xs uppercase tracking-[0.3em] text-gold-light drop-shadow">
          Après
        </span>
      </div>

      {/* "Before" layer, clipped to reveal on drag */}
      <motion.div className="absolute inset-0" style={{ clipPath: beforeClipPath }}>
        <Image
          src={beforeSrc}
          alt={beforeAlt}
          fill
          sizes="(max-width: 768px) 100vw, 1200px"
          className="object-cover"
          draggable={false}
          onDragStart={(e) => e.preventDefault()}
          priority
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />
        <span className="absolute bottom-6 left-6 font-body text-xs uppercase tracking-[0.3em] text-concrete-light drop-shadow">
          Avant
        </span>
      </motion.div>

      {/* Divider handle */}
      <motion.div
        className="pointer-events-none absolute inset-y-0 z-10 w-[2px] bg-gold"
        style={{ left: handleLeft }}
      >
        <div className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gold text-ink shadow-lg">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path
              d="M8 6 3 12l5 6M16 6l5 6-5 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </motion.div>
    </div>
  );
}

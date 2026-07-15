"use client";

import { useRef, useState } from "react";

export default function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  return (
    <div className="faq-item border-b border-navy/10">
      <button
        onClick={() => setOpen((v) => !v)}

        className="flex w-full items-center justify-between gap-6 py-7 text-left"
      >
        <span className="font-display text-lg font-medium text-navy-dark sm:text-xl">
          {q}
        </span>
        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold/50 text-gold-dark transition-transform duration-400 ${
            open ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>
      <div
        ref={panelRef}
        className="grid overflow-hidden transition-[grid-template-rows] duration-500 ease-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p className="pb-7 font-body text-concrete-dark/80 sm:max-w-2xl">
            {a}
          </p>
        </div>
      </div>
    </div>
  );
}

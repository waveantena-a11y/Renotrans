"use client";

import { createElement, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
  delay?: number;
  y?: number;
  stagger?: number;
  childSelector?: string;
};

export default function Reveal({
  children,
  className,
  as = "div",
  delay = 0,
  y = 60,
  stagger = 0.08,
  childSelector,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const targets = childSelector ? el.querySelectorAll(childSelector) : el;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        { y, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay,
          stagger,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true,
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [delay, y, stagger, childSelector]);

  // `as` is always a DOM tag string (never a custom component), so forwarding
  // a ref here is safe; the react-hooks/refs rule can't infer that statically.
  // eslint-disable-next-line react-hooks/refs
  return createElement(as, { ref, className }, children);
}

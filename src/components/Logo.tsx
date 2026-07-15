"use client";

import { useId } from "react";

export default function Logo({ className }: { className?: string }) {
  const gradientId = `renotrans-gold-${useId()}`;

  return (
    <svg
      viewBox="0 0 300 92"
      className={className}
      role="img"
      aria-label="RENOTRANS"
    >
      <defs>
        <linearGradient
          id={gradientId}
          gradientUnits="userSpaceOnUse"
          x1="0"
          y1="0"
          x2="300"
          y2="0"
        >
          <stop offset="0%" stopColor="#f0cd7a" />
          <stop offset="55%" stopColor="#d6a83e" />
          <stop offset="100%" stopColor="#a9822b" />
        </linearGradient>
      </defs>

      {/* Roofline spanning the full wordmark, clear of the text, peak above the pillar/T */}
      <path
        d="M14 50 L150 12 L286 50"
        stroke={`url(#${gradientId})`}
        strokeWidth="7"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Brick pillar forming the "T" of TRANS, poking through the roof peak like a chimney */}
      <g>
        <rect x="141" y="4" width="18" height="76" rx="1.5" fill={`url(#${gradientId})`} />
        <line x1="141" y1="26" x2="159" y2="26" stroke="#08080d" strokeWidth="1.6" />
        <line x1="141" y1="42" x2="159" y2="42" stroke="#08080d" strokeWidth="1.6" />
        <line x1="141" y1="58" x2="159" y2="58" stroke="#08080d" strokeWidth="1.6" />
        <line x1="141" y1="70" x2="159" y2="70" stroke="#08080d" strokeWidth="1.6" />
        <line x1="150" y1="4" x2="150" y2="80" stroke="#08080d" strokeWidth="1.2" opacity="0.35" />
      </g>

      <text
        x="134"
        y="82"
        textAnchor="end"
        fontFamily="system-ui, -apple-system, 'Segoe UI', Arial, sans-serif"
        fontWeight="800"
        fontSize="38"
        letterSpacing="0.5"
        fill={`url(#${gradientId})`}
      >
        RENO
      </text>
      <text
        x="166"
        y="82"
        textAnchor="start"
        fontFamily="system-ui, -apple-system, 'Segoe UI', Arial, sans-serif"
        fontWeight="800"
        fontSize="38"
        letterSpacing="0.5"
        fill={`url(#${gradientId})`}
      >
        RANS
      </text>
    </svg>
  );
}

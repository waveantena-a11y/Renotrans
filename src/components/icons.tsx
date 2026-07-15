export function ServiceIcon({ name, className }: { name: string; className?: string }) {
  const common = {
    className,
    viewBox: "0 0 40 40",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.4,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (name) {
    case "structure":
      return (
        <svg {...common}>
          <path d="M6 32V16l14-9 14 9v16" />
          <path d="M6 32h28" />
          <path d="M14 32V20h12v12" />
        </svg>
      );
    case "layers":
      return (
        <svg {...common}>
          <path d="M20 8 6 16l14 8 14-8-14-8Z" />
          <path d="M6 24l14 8 14-8" />
        </svg>
      );
    case "ceiling":
      return (
        <svg {...common}>
          <rect x="6" y="10" width="28" height="8" rx="1" />
          <path d="M10 18v14M20 18v14M30 18v14" />
        </svg>
      );
    case "tile":
      return (
        <svg {...common}>
          <rect x="6" y="6" width="12" height="12" rx="1" />
          <rect x="22" y="6" width="12" height="12" rx="1" />
          <rect x="6" y="22" width="12" height="12" rx="1" />
          <rect x="22" y="22" width="12" height="12" rx="1" />
        </svg>
      );
    case "brush":
      return (
        <svg {...common}>
          <path d="M28 6c3 0 6 3 6 6 0 4-8 8-12 14l-6-6c6-4 8-14 12-14Z" />
          <path d="M16 26c-2 2-2 5-6 6-2 0.5-4-1-4-3 1-4 4-4 6-6" />
        </svg>
      );
    case "window":
      return (
        <svg {...common}>
          <rect x="8" y="6" width="24" height="28" rx="1" />
          <path d="M20 6v28M8 20h24" />
        </svg>
      );
    default:
      return null;
  }
}

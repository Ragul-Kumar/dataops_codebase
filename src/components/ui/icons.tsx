import { cn } from "@/lib/cn";

const badgeTones = {
  /** White circle, red arrow. */
  "light-brand": { circle: "#ffffff", arrow: "#ff0000" },
  /** White circle, black arrow. */
  "light-ink": { circle: "#ffffff", arrow: "#0a0a0a" },
  /** Red circle, white arrow. */
  "brand-light": { circle: "#ff0000", arrow: "#ffffff" },
  /** Black circle, white arrow. */
  "ink-light": { circle: "#0a0a0a", arrow: "#ffffff" },
} as const;

export type ArrowBadgeTone = keyof typeof badgeTones;

type ArrowBadgeProps = {
  tone: ArrowBadgeTone;
  /** Size it with Tailwind, e.g. "size-10 lg:size-11". */
  className?: string;
};

/** The round arrow badge that sits at the end of every button. */
export function ArrowBadge({ tone, className }: ArrowBadgeProps) {
  const { circle, arrow } = badgeTones[tone];

  return (
    <svg viewBox="0 0 44 44" fill="none" aria-hidden="true" className={cn("shrink-0", className)}>
      <circle cx="22" cy="22" r="22" fill={circle} />
      <path
        d="M16 28L28 16M28 26.5V16H17.5"
        stroke={arrow}
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Outlined circle with a tick, used in the risk reducer lists. */
export function CheckIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 18 18" fill="none" aria-hidden="true" className={cn("shrink-0", className)}>
      <circle cx="9" cy="9" r="8.25" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1.5" />
      <path
        d="M5.5 9.2L7.8 11.5L12.5 6.6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

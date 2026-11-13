import { cn } from "@/lib/cn";
import { ArrowBadge, type ArrowBadgeTone } from "./icons";

/**
 * Button colors. These stay fixed on hover on purpose: the only hover effect is the arrow slide.
 */
const variants = {
  /** Red pill, the main call to action. */
  brand: { pill: "bg-brand text-white", badge: "light-ink" },
  /** Transparent pill with a soft white border, for dark sections. */
  outline: { pill: "border-[1.5px] border-white/35 text-white", badge: "light-ink" },
  /** Transparent pill with a soft black border, for white sections. */
  outlineDark: { pill: "border-[1.5px] border-ink/20 text-ink", badge: "ink-light" },
  /** Black pill with a white border, used in the top bar. */
  outlineSolid: { pill: "border border-white/30 bg-ink text-white lg:border-white", badge: "light-brand" },
  /** Black pill, for white sections. */
  ink: { pill: "bg-ink text-white", badge: "light-brand" },
  /** White pill with a red badge, for dark sections. */
  light: { pill: "bg-white text-ink", badge: "brand-light" },
} satisfies Record<string, { pill: string; badge: ArrowBadgeTone }>;

/**
 * Each size sets the variables for the arrow-slide animation (see .btn-slide in globals.css):
 * label padding, badge inset from the edge, badge size and label-to-badge gap.
 */
const sizes = {
  sm: "text-[13px] [--pl:14px] [--inset:4px] [--badge:28px] [--gap:8px] lg:text-[15px] lg:[--pl:20px] lg:[--inset:8px] lg:[--badge:32px] lg:[--gap:12px]",
  /** Section buttons: same as md on mobile, a little smaller on desktop. */
  compact:
    "text-[15px] [--pl:20px] [--inset:6px] [--badge:40px] [--gap:16px] lg:text-[16px] lg:[--pl:22px] lg:[--inset:8px] lg:[--badge:36px] lg:[--gap:14px]",
  md: "text-[15px] [--pl:20px] [--inset:6px] [--badge:40px] [--gap:16px] lg:[--pl:26px] lg:[--inset:8px] lg:[--badge:44px] lg:[--gap:16px]",
  /** Same as md with a larger desktop label, for the final call to action. */
  lg: "text-[15px] [--pl:20px] [--inset:6px] [--badge:40px] [--gap:16px] lg:text-[17px] lg:[--pl:26px] lg:[--inset:8px] lg:[--badge:44px] lg:[--gap:16px]",
} as const;

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  /** Shorter label shown below the lg breakpoint. */
  mobileLabel?: string;
  /** Stretch to full width on mobile. */
  fullOnMobile?: boolean;
  className?: string;
};

/**
 * Pill-shaped link with the round arrow badge. On hover the arrow slides from right to left.
 * External links (http...) open in a new tab automatically.
 */
export function ButtonLink({
  href,
  children,
  variant = "brand",
  size = "md",
  mobileLabel,
  fullOnMobile = false,
  className,
}: ButtonLinkProps) {
  const isExternal = href.startsWith("http");
  const v = variants[variant];

  const label = mobileLabel ? (
    <>
      <span className="lg:hidden">{mobileLabel}</span>
      <span className="hidden lg:inline">{children}</span>
    </>
  ) : (
    children
  );

  return (
    <a
      href={href}
      {...(isExternal && { target: "_blank", rel: "noopener noreferrer" })}      className={cn(
        "btn-slide inline-flex shrink-0 items-center rounded-full font-bold whitespace-nowrap",
        v.pill,
        sizes[size],
        fullOnMobile && "w-full lg:w-auto",
        className,
      )}
    >
      <span className="btn-slide-label">{label}</span>
      <ArrowBadge tone={v.badge} className="btn-slide-badge" />
    </a>
  );
}

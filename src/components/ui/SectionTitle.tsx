import { cn } from "@/lib/cn";
import { Stop } from "./Stop";

const sizes = {
  /** 32px mobile, 56px desktop. Most sections. */
  default: "text-[32px] leading-[1.06] tracking-[-0.01em] lg:text-[56px] lg:leading-[1.04] lg:tracking-[-0.015em]",
  /** 32px mobile, 52px desktop. Titles in a narrow side column. */
  compact: "text-[32px] leading-[1.06] tracking-[-0.01em] lg:text-[52px] lg:leading-[1.04] lg:tracking-[-0.015em]",
  /** 32px mobile, 64px desktop. Centered statement sections. */
  large: "text-[32px] leading-[1.06] tracking-[-0.01em] lg:text-[64px] lg:tracking-[-0.02em]",
} as const;

type SectionTitleProps = {
  children: React.ReactNode;
  size?: keyof typeof sizes;
  /** Adds the red full stop at the end. */
  withStop?: boolean;
  id?: string;
  className?: string;
};

/** Section H2. Inherits its color from the section. */
export function SectionTitle({ children, size = "default", withStop = true, id, className }: SectionTitleProps) {
  return (
    <h2 id={id} className={cn("font-bold", sizes[size], className)}>
      {children}
      {withStop && <Stop />}
    </h2>
  );
}

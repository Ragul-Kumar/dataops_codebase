import Link from "next/link";
import { cn } from "@/lib/cn";
import { Stop } from "./Stop";

type WordmarkProps = {
  /** "lg" is the header size, "sm" the footer size. */
  size?: "lg" | "sm";
  /** "dark" for black backgrounds (white text), "light" for white backgrounds (black text). */
  tone?: "dark" | "light";
  className?: string;
};

/** "DataOps. by Cyces." logo, links back to the top of the page. */
export function Wordmark({ size = "lg", tone = "dark", className }: WordmarkProps) {
  const strong = tone === "dark" ? "text-white" : "text-ink";
  const muted = tone === "dark" ? "text-white/50" : "text-ink/45";

  return (
    <Link
      href="/"
      aria-label="DataOps by Cyces, home"
      className={cn("flex items-baseline gap-1.5 whitespace-nowrap lg:gap-2", className)}
    >
      <span className={cn("font-bold", strong, size === "lg" ? "text-[22px] lg:text-[28px]" : "text-[20px] lg:text-[22px]")}>
        DataOps
        <Stop />
      </span>
      <span className={cn(muted, size === "lg" ? "text-[11px] lg:text-[15px]" : "text-[11px] lg:text-[13px]")}>
        by <span className={strong}>Cyces</span>
        <Stop />
      </span>
    </Link>
  );
}

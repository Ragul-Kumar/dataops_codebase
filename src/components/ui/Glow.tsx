import { cn } from "@/lib/cn";

/**
 * Soft red blur used behind cards and sections.
 * Pass position, size, opacity and blur through className,
 * e.g. "left-10 -top-[220px] size-[300px] bg-brand/45 blur-[55px]".
 */
export function Glow({ className }: { className: string }) {
  return <div aria-hidden="true" className={cn("pointer-events-none absolute rounded-full", className)} />;
}

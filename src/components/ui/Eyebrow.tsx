import { cn } from "@/lib/cn";

type EyebrowProps = {
  children: React.ReactNode;
  /** "light" for white sections, "dark" for black sections. */
  tone: "light" | "dark";
  className?: string;
};

/** Small uppercase label with a red square, sits above every section title. */
export function Eyebrow({ children, tone, className }: EyebrowProps) {
  return (
    <p
      className={cn(
        "flex items-center gap-2 text-[11px] font-bold tracking-[0.14em] uppercase lg:gap-2.5 lg:text-[13px]",
        tone === "light" ? "text-ink/55" : "text-white/60",
        className,
      )}
    >
      <span aria-hidden="true" className="size-[7px] shrink-0 bg-brand lg:size-2" />
      {children}
    </p>
  );
}

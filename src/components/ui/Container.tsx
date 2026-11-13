import { cn } from "@/lib/cn";

/** Centers content at the design's 1200px width, with 20px side gutters on small screens. */
export function Container({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn("mx-auto w-full max-w-[1240px] px-5", className)}>{children}</div>;
}

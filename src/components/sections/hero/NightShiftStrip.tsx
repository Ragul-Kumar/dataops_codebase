import Image from "next/image";
import { cn } from "@/lib/cn";

/**
 * One night of alerts as tick marks: white = resolved by Cyces, red = reached the client's team.
 * Heights and escalated positions are copied from the Figma design.
 */
const desktopTicks = {
  heights: [
    18, 27, 36, 45, 26, 35, 44, 25, 34, 43, 24, 33, 42, 23, 32, 41, 22, 31, 40, 21, 30, 39, 20, 29, 38,
    19, 28, 37, 18, 27, 36, 45, 26, 35, 44, 25, 34, 43, 24, 33, 42, 23, 32, 41, 22, 31, 40, 21, 30, 39,
  ],
  escalated: [2, 7, 11, 17, 21, 26, 30, 35, 39, 44, 46, 48],
};

const mobileTicks = {
  heights: [14, 31, 28, 25, 22, 19, 16, 33, 30, 27, 24, 21, 18, 15, 32, 29, 26, 23, 20, 17, 14, 31, 28, 25, 22],
  escalated: [2, 7, 12, 16, 21],
};

const axisLabels = ["00:00", "06:00", "12:00", "18:00", "24:00"];

type TicksProps = typeof desktopTicks & { className: string };

/** Grow-in timing. Keep BAR_GROW_MS in sync with --animate-tick-grow in globals.css. */
const GROW_START_MS = 300; // pause after page load, so visitors see it happen
const GROW_TOTAL_MS = 2000; // first bar starts to last bar finished
const BAR_GROW_MS = 400; // how long one bar takes to grow

/**
 * The alert bars. On load they grow up from the baseline one by one, left to right
 * (00:00 to 24:00), and the whole chart is drawn in 2 seconds. Plays once.
 * Skipped when the visitor prefers reduced motion.
 */
function Ticks({ heights, escalated, className }: TicksProps) {
  const stepMs = (GROW_TOTAL_MS - BAR_GROW_MS) / (heights.length - 1);

  return (
    <div className={className} aria-hidden="true">
      {heights.map((height, i) => (
        <span
          key={i}
          className={cn(
            "w-1 origin-bottom rounded-[2px] motion-safe:animate-tick-grow",
            escalated.includes(i) ? "bg-brand" : "bg-white/90",
          )}
          style={{ height, animationDelay: `${Math.round(GROW_START_MS + i * stepMs)}ms` }}
        />
      ))}
    </div>
  );
}

function IntentwiseProof({ className }: { className: string }) {
  return (
    <div className={className}>
      <Image
        src="/images/intentwise-logo.png"
        alt="Intentwise"
        width={640}
        height={144}
        loading="eager"
        className="h-[21px] w-auto lg:h-[25px]"
      />
      <p className="text-[13px] text-white/65 lg:text-[14px]">Running 24/7 for Intentwise through Amazon Prime Day.</p>
    </div>
  );
}

/** The dark proof card at the bottom of the hero. Stacked on mobile, one row on desktop. */
export function NightShiftStrip() {
  return (
    <figure className="flex w-full flex-col gap-4 rounded-[20px] border border-white/8 bg-surface px-5 py-[22px] lg:flex-row lg:items-center lg:gap-10 lg:rounded-3xl lg:px-9 lg:py-6 short:py-4 tight:py-3">
      {/* Headline stat */}
      <div className="flex items-center gap-3.5 lg:w-[230px] lg:shrink-0 lg:flex-col lg:items-start lg:gap-1.5">
        <p className="text-[52px] leading-[0.95] font-bold tracking-[-0.02em] lg:text-[64px] short:text-[52px]">76%</p>
        <p className="flex-1 text-[13px] leading-[1.4] text-white/60 lg:text-[14px]">
          of pipeline incidents resolved without reaching the client&rsquo;s team.
        </p>
      </div>

      {/* One night of alerts */}
      <div className="flex min-w-0 flex-col gap-4 lg:flex-1 lg:gap-2.5">
        <Ticks {...mobileTicks} className="flex items-end justify-between pt-1.5 lg:hidden" />
        <Ticks {...desktopTicks} className="hidden items-end justify-between pt-6 lg:flex short:pt-2" />

        <div className="flex justify-between text-[10px] text-white/40 lg:text-[11px] lg:text-white/45" aria-hidden="true">
          {axisLabels.map((label) => (
            <span key={label}>{label}</span>
          ))}
        </div>

        <figcaption className="flex items-center gap-4 text-[12px] text-white/60 lg:gap-[18px]">
          <span className="flex items-center gap-1.5">
            <span className="size-2 rounded-[2px] bg-white/90" aria-hidden="true" />
            Resolved by Cyces
          </span>
          <span className="flex items-center gap-1.5">
            <span className="size-2 rounded-[2px] bg-brand" aria-hidden="true" />
            Reached their team
          </span>
        </figcaption>
      </div>

      {/* Client proof: below a divider on mobile, right column on desktop */}
      <hr className="border-white/10 lg:hidden" />
      <IntentwiseProof className="flex flex-col items-start gap-2 lg:w-[230px] lg:shrink-0 lg:gap-1" />
    </figure>
  );
}

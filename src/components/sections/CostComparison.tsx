import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Glow } from "@/components/ui/Glow";
import { RevealOnView } from "@/components/ui/RevealOnView";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { cn } from "@/lib/cn";

/**
 * Yearly cost of each option. `amount` (in $K) sets the bar height,
 * relative to the most expensive option, so the chart stays in proportion if numbers change.
 */
const options = [
  { value: "$954K", amount: 954, label: "Build observability in-house", note: "and about 12 months", tone: "ink" },
  { value: "~$300K", amount: 300, label: "An SRE hire", note: "a year, fully loaded", tone: "muted" },
  { value: "<$50K", amount: 50, label: "Cyces 24/7 pipeline support", note: "a year, depending on volume", tone: "brand" },
] as const;

const maxAmount = Math.max(...options.map((o) => o.amount));

const barTone = { ink: "bg-ink", muted: "bg-ink/15", brand: "bg-brand" } as const;

/** 04 The math (white): three-column cost chart. */
export function CostComparison() {
  return (
    <section id="cost" aria-labelledby="cost-title" className="relative overflow-hidden bg-white text-ink">
      <Glow className="top-[520px] left-[160px] size-[320px] bg-brand/8 blur-[37px] lg:left-[62.5%] lg:h-[520px] lg:w-[700px] lg:blur-[60px]" />

      <Container className="relative flex flex-col items-center gap-3.5 py-16 text-center lg:gap-0 lg:py-[120px]">
        <Eyebrow tone="light">The math</Eyebrow>
        <SectionTitle id="cost-title" size="large" className="max-w-[900px] lg:mt-4">
          24/7 Support for a fraction of a $200K hire
        </SectionTitle>
        <p className="max-w-[560px] text-[15px] leading-[1.5] text-ink/60 lg:mt-4 lg:text-[18px]">
          Covering nights yourself means a new hire or a split bandwidth.
        </p>

        <figure className="mt-3.5 w-full lg:mt-14">
          <figcaption className="sr-only">
            Yearly cost:{" "}
            {options.map((o) => `${o.label}, ${o.value.replace("<", "under ").replace("~", "about ")} ${o.note}.`).join(" ")}
          </figcaption>

          {/* Columns. Bars grow up from the baseline, one after another, when the chart scrolls into view. */}
          <RevealOnView
            aria-hidden="true"
            className="group grid h-[230px] grid-cols-3 items-end gap-2.5 border-b border-ink/15 [--bar-max:150px] lg:h-80 lg:gap-6 lg:border-ink/65 lg:[--bar-max:200px]"
          >
            {options.map((o, i) => (
              <div key={o.label} className="flex flex-col items-center gap-2 lg:gap-3">
                <span
                  className={cn(
                    "text-[26px] leading-none font-bold tracking-[-0.01em] whitespace-nowrap lg:text-[56px] lg:tracking-[-0.02em]",
                    o.tone === "brand" && "text-brand",
                  )}
                >
                  {o.value}
                </span>
                <span
                  className={cn(
                    "w-16 origin-bottom rounded-t-[10px] transition-transform duration-[1800ms] ease-[cubic-bezier(0.22,1,0.36,1)] lg:w-[225px] lg:rounded-t-[14px]",
                    "motion-safe:group-data-[reveal=waiting]:scale-y-0",
                    barTone[o.tone],
                  )}
                  style={{
                    height: `calc(var(--bar-max) * ${o.amount / maxAmount})`,
                    transitionDelay: `${200 + i * 350}ms`,
                  }}
                />
              </div>
            ))}
          </RevealOnView>

          {/* Labels */}
          <div aria-hidden="true" className="mt-3.5 grid grid-cols-3 gap-2.5 leading-[1.3] lg:mt-4 lg:gap-6 lg:leading-normal">
            {options.map((o) => (
              <div key={o.label} className="flex flex-col items-center gap-[3px] lg:gap-1">
                <span className="text-[12px] font-bold lg:text-[16px]">{o.label}</span>
                <span className="text-[11px] text-ink/55 lg:text-[14px] lg:text-ink/60">{o.note}</span>
              </div>
            ))}
          </div>
        </figure>

        <p className="mt-2.5 flex w-full items-center gap-2.5 rounded-2xl border border-ink/20 py-3 pr-[18px] pl-4 text-left text-[14px] leading-[1.4] lg:mt-10 lg:w-auto lg:rounded-full lg:pr-6 lg:pl-[22px] lg:text-[15px] lg:leading-normal">
          <span aria-hidden="true" className="size-[7px] shrink-0 rounded-full bg-brand" />
          Cyces covers your nights for a fraction of an SRE hire.
        </p>

        <p className="text-[12px] leading-[1.5] text-ink/50 lg:mt-[22px] lg:text-[13px] lg:leading-normal">
          SRE figure: US median total pay, Levels.fyi. Build figure: Bigeye.
        </p>
      </Container>
    </section>
  );
}

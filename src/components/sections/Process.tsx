import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionTitle } from "@/components/ui/SectionTitle";

const steps = [
  {
    tag: "Set up",
    title: "We learn your setup.",
    body: "Our engineers review your current pipeline health and application stack.",
  },
  {
    tag: "14-day pilot",
    title: "We run it with you.",
    body: "We work side by side with your team for 14 days and get accustomed with your SOPs.",
  },
  {
    tag: "Scale",
    title: "We scale what works.",
    body: "You see the numbers and the changes we’d make. Then you decide how we scale from there.",
  },
];

/**
 * 03 Our Process (black).
 * Mobile: each step is one card with its marker inside.
 * Desktop: markers sit on a red timeline above three equal cards.
 */
export function Process() {
  return (
    <section id="process" aria-labelledby="process-title" className="bg-ink">
      <Container className="flex flex-col gap-8 py-16 lg:gap-14 lg:py-[120px]">
        <div className="flex flex-col gap-3 lg:gap-4">
          <Eyebrow tone="dark">How it works</Eyebrow>
          <SectionTitle id="process-title">Our Process</SectionTitle>
        </div>

        <ol className="relative grid gap-4 lg:grid-cols-3 lg:gap-5">
          {/* Timeline connector, desktop only, runs through the middle of the number circles */}
          <span aria-hidden="true" className="absolute inset-x-0 top-[27px] hidden h-0.5 bg-brand/35 lg:block" />

          {steps.map((step, i) => (
            <li
              key={step.tag}
              className="flex flex-col gap-3.5 rounded-[20px] border border-white/10 bg-surface px-[22px] pt-[22px] pb-6 lg:gap-6 lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0"
            >
              <div className="relative flex items-center gap-2.5 lg:gap-3.5">
                <span className="flex size-10 items-center justify-center rounded-full bg-brand text-[13px] lg:size-14 lg:text-[16px]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="rounded-full border border-brand/35 px-2.5 py-[5px] text-[10px] tracking-[0.06em] text-brand uppercase lg:border-white/35 lg:bg-ink lg:px-3 lg:py-1.5 lg:text-[11px] lg:text-white">
                  {step.tag}
                </span>
              </div>

              <div className="flex flex-col gap-3.5 lg:flex-1 lg:gap-3 lg:rounded-3xl lg:border lg:border-white/10 lg:bg-surface lg:px-8 lg:pt-8 lg:pb-9">
                <h3 className="text-[22px] leading-[1.15] font-bold lg:text-[28px]">{step.title}</h3>
                <p className="text-[15px] leading-[1.5] text-white/65 lg:text-[17px]">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

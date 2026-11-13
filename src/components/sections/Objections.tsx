import { site } from "@/config/site";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Glow } from "@/components/ui/Glow";
import { SectionTitle } from "@/components/ui/SectionTitle";

const objections = [
  {
    question: "“Offshore support just escalates everything.”",
    answer:
      "We spend the first few weeks learning your SOPs and taking knowledge transfer, so we’re embedded in your team.",
  },
  {
    question: "“I don’t want strangers in our codebase.”",
    answer: "Read-only dashboards and database. No access until we’re required.",
  },
  {
    question: "“AI tools only flag, they don’t fix anything.”",
    answer: "Ours runs the retry and the backfill, then posts the outcome.",
  },
];

function TalkButton() {
  return (
    <ButtonLink href={site.links.bookCall} variant="light" size="compact" fullOnMobile>
      Talk to our team
    </ButtonLink>
  );
}

/** 05 Objections (black): title on the left, three objection cards on the right. */
export function Objections() {
  return (
    <section id="objections" aria-labelledby="objections-title" className="relative overflow-hidden bg-ink">
      <Glow className="-top-[120px] -left-[160px] size-[300px] bg-brand/30 blur-[60px] lg:hidden" />

      <Container className="relative grid items-start gap-8 py-16 lg:grid-cols-[400px_1fr] lg:gap-20 lg:py-[120px]">
        <div className="flex flex-col gap-3 lg:gap-6">
          <Eyebrow tone="dark" className="lg:text-white/70">
            Before you ask
          </Eyebrow>
          <SectionTitle id="objections-title" size="compact">
            The three things CTOs ask us first
          </SectionTitle>
          <div className="hidden lg:block">
            <TalkButton />
          </div>
        </div>

        <ol className="flex flex-col gap-3 lg:gap-4">
          {objections.map((item, i) => (
            <li
              key={item.question}
              className="flex flex-col gap-2.5 rounded-[20px] border border-white/10 bg-surface p-[22px] lg:gap-3.5 lg:rounded-3xl lg:p-8"
            >
              <div className="flex flex-col gap-2.5 lg:flex-row lg:items-baseline lg:gap-4">
                <span aria-hidden="true" className="text-[12px] text-white/40 lg:text-[24px]">
                  {String(i + 1).padStart(2, "0")}
                  <span className="hidden lg:inline">.</span>
                </span>
                <h3 className="text-[21px] leading-[1.2] font-bold lg:text-[28px]">{item.question}</h3>
              </div>
              <p className="text-[15px] leading-[1.5] text-white/70 lg:text-[18px]">{item.answer}</p>
            </li>
          ))}
        </ol>

        <div className="lg:hidden">
          <TalkButton />
        </div>
      </Container>
    </section>
  );
}

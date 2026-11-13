import Image from "next/image";
import { site } from "@/config/site";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Glow } from "@/components/ui/Glow";
import { SectionTitle } from "@/components/ui/SectionTitle";

const facts = [
  { title: "24/7 support", body: "Continuous coverage, Prime Day and seasonal surges included." },
  {
    title: (
      // Keep "Human-augmented" on one line so the title never breaks at the hyphen.
      <>
        AI-driven, <span className="whitespace-nowrap">Human-augmented</span>
      </>
    ),
    body: "AI runs the routine fixes. Engineers handle the rest.",
  },
  { title: "SOP-led", body: "Every action follows an Intentwise-approved SOP." },
];

function CaseStudyButton() {
  return (
    <ButtonLink href={site.links.caseStudy} variant="ink" size="compact" fullOnMobile>
      Get the case study
    </ButtonLink>
  );
}

/** 02 Proof (white): Intentwise result, 76% tile and three supporting facts. */
export function Proof() {
  return (
    <section id="proof" aria-labelledby="proof-title" className="bg-white text-ink">
      <Container className="flex flex-col gap-8 py-16 lg:gap-12 lg:py-[120px]">
        {/* Head */}
        <div className="flex flex-col gap-3 lg:gap-4">
          <Eyebrow tone="light">Proof, not promises</Eyebrow>
          <div className="flex items-center justify-between gap-6">
            <SectionTitle
              id="proof-title"
              withStop={false}
              className="flex flex-wrap items-center gap-x-2.5 gap-y-2 lg:gap-[18px]"
            >
              <span>Running 24/7 for</span>
              <span className="rounded-[10px] bg-ink px-3 py-[7px] lg:rounded-[14px] lg:px-5 lg:py-[11px]">
                <Image
                  src="/images/intentwise-logo.png"
                  alt="Intentwise"
                  width={640}
                  height={144}
                  className="h-6 w-auto lg:h-[40px]"
                />
              </span>
            </SectionTitle>
            <div className="hidden lg:block">
              <CaseStudyButton />
            </div>
          </div>
        </div>

        {/* Bento */}
        <div className="grid gap-3 lg:min-h-[542px] lg:grid-cols-2 lg:gap-5">
          <article className="relative flex flex-col gap-3.5 overflow-hidden rounded-3xl bg-ink px-6 py-7 text-white lg:gap-4 lg:rounded-[28px] lg:p-10">
            <Glow className="-top-[180px] left-[140px] size-[300px] bg-brand/50 blur-[55px] lg:-top-[220px] lg:left-[300px] lg:size-[460px] lg:bg-brand/42 lg:blur-[90px]" />
            <Image
              src="/images/intentwise-logo.png"
              alt="Intentwise"
              width={640}
              height={144}
              className="relative h-6 w-auto self-start lg:h-[28px]"
            />
            <div className="relative flex flex-col gap-2.5 text-[15px] leading-[1.55] text-white/70 lg:gap-3 lg:text-[17px]">
              <p>Intentwise runs ad operations on Amazon for hundreds of brands. When data lags, campaigns lose money.</p>
              <p>We run the L1 layer that keeps their pipelines, jobs and reports moving while their team sleeps.</p>
            </div>
            <p className="relative text-[96px] leading-[0.9] font-bold tracking-[-0.04em] lg:mt-auto lg:text-[150px] lg:tracking-[-0.05em]">
              76%
            </p>
            <p className="relative text-[15px] text-white/90 lg:text-[18px]">
              of issues resolved by Cyces L1, no client escalation needed.
            </p>
          </article>

          <ul className="flex flex-col gap-3 lg:gap-5">
            {facts.map((fact) => (
              <li
                key={fact.body}
                className="flex flex-col gap-1.5 rounded-[20px] bg-mist px-6 py-[22px] lg:flex-1 lg:justify-center lg:gap-2.5 lg:rounded-3xl lg:p-9"
              >
                <h3 className="text-[28px] leading-[1.05] font-bold tracking-[-0.01em] lg:text-[48px] lg:leading-none lg:tracking-[-0.02em]">
                  {fact.title}
                </h3>
                <p className="text-[14px] leading-[1.5] text-[#404040] lg:text-[17px]">{fact.body}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:hidden">
          <CaseStudyButton />
        </div>
      </Container>
    </section>
  );
}

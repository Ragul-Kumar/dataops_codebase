import { site } from "@/config/site";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { RiskReducers } from "@/components/ui/RiskReducers";
import { SectionTitle } from "@/components/ui/SectionTitle";

/** 06 Get started (white): closing headline, pilot CTA and risk reducers. */
export function FinalCta() {
  return (
    <section id="get-started" aria-labelledby="get-started-title" className="relative overflow-hidden bg-white text-ink">
      {/* Large faint "24/7" behind the copy, mobile only (as in the design) */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute top-[197px] left-5 text-[170px] leading-none font-bold tracking-[-0.05em] text-mist select-none lg:hidden"
      >
        24/7
      </span>

      <Container className="relative flex flex-col items-center gap-5 py-16 text-center lg:gap-6 lg:py-[120px]">
        <Eyebrow tone="light">Get started today</Eyebrow>
        <SectionTitle id="get-started-title" size="large" className="max-w-[820px]">
          The AI era runs on data. <br className="hidden lg:block" />
          Make sure yours are covered
        </SectionTitle>
        <p className="text-[15px] leading-[1.5] text-ink/60 lg:text-[19px]">
          Talk to our team about your 14-day pilot on the pipeline that breaks most.
        </p>

        <div className="flex w-full flex-col gap-3 pt-1.5 lg:w-auto lg:flex-row lg:gap-3.5 lg:pt-2">
          <ButtonLink href={site.links.bookCall} variant="brand" size="lg" fullOnMobile>
            Start your 14 day pilot
          </ButtonLink>
          <ButtonLink href={site.links.caseStudy} variant="outlineDark" size="lg" fullOnMobile>
            See the case study
          </ButtonLink>
        </div>

        <RiskReducers size="sm" tone="light" />
      </Container>
    </section>
  );
}

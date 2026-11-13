import { site } from "@/config/site";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { Glow } from "@/components/ui/Glow";
import { RiskReducers } from "@/components/ui/RiskReducers";
import { Stop } from "@/components/ui/Stop";
import { Wordmark } from "@/components/ui/Wordmark";
import { NightShiftStrip } from "./NightShiftStrip";

/**
 * 01 Hero (black): top bar, headline, CTAs and the night shift proof strip.
 * Always at least one full screen tall (svh = stable height that ignores mobile browser toolbars).
 * Extra height goes around the copy, so the top bar stays at the top and the strip at the bottom.
 */
export function Hero() {
  return (
    <header className="relative flex min-h-svh flex-col overflow-hidden bg-ink">
      {/* Red glow behind the top bar, mobile only (as in the design) */}
      <Glow className="-top-[220px] left-10 size-[300px] bg-brand/45 blur-[55px] lg:hidden" />

      <Container className="relative flex flex-1 flex-col justify-between gap-7 pt-5 pb-10 lg:gap-16 lg:pt-10 lg:pb-12 short:gap-8 short:pt-6 short:pb-8 tight:gap-5 tight:pt-5 tight:pb-6">
        {/* Top bar */}
        <nav className="flex items-center justify-between" aria-label="Primary">
          <Wordmark />
          <ButtonLink href={site.links.bookCall} variant="outlineSolid" size="sm">
            Book a call
          </ButtonLink>
        </nav>

        {/* Copy */}
        <div className="flex flex-col items-center gap-[18px] pt-3 text-center lg:gap-6 lg:pt-0 short:gap-4 tight:gap-3">
          <p className="rounded-full border border-white/20 px-3 py-1.5 text-[11px] font-bold tracking-[0.1em] text-white/85 lg:border-white/18 lg:px-4 lg:py-2 lg:text-[13px] lg:text-white/80">
            24/7 DATAOPS SUPPORT
          </p>

          <h1 className="max-w-[1040px] text-[36px] leading-[1.04] font-bold tracking-[-0.015em] text-balance md:text-[52px] lg:text-wrap lg:text-[64px] lg:leading-none lg:tracking-[-0.025em] short:text-[52px] tight:text-[44px]">
            24/7 L1 and L2 support for your data pipelines &amp; application stack
            <Stop />
          </h1>

          <p className="max-w-[1090px] text-[16px] leading-[1.5] text-white/70 lg:text-[20px] short:text-[18px] tight:text-[16px]">
            We watch your alerts around the clock and fix what breaks, following your SOPs. AI handles first-line
            troubleshooting and alert triage, and our engineers take care of the rest.
          </p>

          <div className="flex w-full flex-col items-center gap-3 pt-1.5 lg:w-auto lg:gap-[18px] lg:pt-3 short:gap-3.5 short:pt-1">
            <div className="flex w-full flex-col gap-3 lg:w-auto lg:flex-row lg:gap-3.5">
              <ButtonLink href={site.links.bookCall} variant="brand" fullOnMobile>
                Talk to our team
              </ButtonLink>
              <ButtonLink href={site.links.caseStudy} variant="outline" fullOnMobile>
                Get the case study
              </ButtonLink>
            </div>
            <RiskReducers />
          </div>
        </div>

        <NightShiftStrip />
      </Container>
    </header>
  );
}

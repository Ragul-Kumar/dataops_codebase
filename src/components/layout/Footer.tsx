import { site } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { Wordmark } from "@/components/ui/Wordmark";

/** 07 Footer (black). Stacked and centered on mobile, one row on desktop. */
export function Footer() {
  return (
    <footer className="bg-ink">
      {/* Desktop: three columns with equal outer tracks, so the copyright line sits at the true page center. */}
      <Container className="flex flex-col items-center gap-2 py-5 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:gap-6 lg:py-5">
        <Wordmark size="sm" className="lg:justify-self-start" />
        <a
          href={site.company.url}
          target="_blank"
          rel="noopener noreferrer"
          className="-my-[7px] py-[11px] text-[12px] text-white/50 underline-offset-4 transition-colors hover:text-white hover:underline lg:text-[13px]"
        >
          &copy; {site.company.year} {site.company.name} &middot; {site.company.location}
        </a>
        <a
          href={site.links.finePrint}
          target="_blank"
          rel="noopener noreferrer"
          className="-my-[7px] py-[11px] text-[12px] text-white/70 transition-colors hover:text-white lg:justify-self-end lg:text-[13px]"
        >
          Fine print
        </a>
      </Container>
    </footer>
  );
}

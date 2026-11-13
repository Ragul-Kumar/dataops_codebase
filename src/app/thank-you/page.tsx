import type { Metadata } from "next";
import Image from "next/image";
import { site } from "@/config/site";
import { AutoRedirect } from "@/components/booking/AutoRedirect";
import { Container } from "@/components/ui/Container";
import { Wordmark } from "@/components/ui/Wordmark";

export const metadata: Metadata = {
  title: "Thank you | DataOps by Cyces",
  robots: { index: false, follow: false },
};

/**
 * /thank-you: shown after the booking form is submitted (Figma "Thankyou Card - Desktop", 2819:6920).
 * Returns to the landing page automatically after site.thankYouRedirectMs.
 */
export default function ThankYouPage() {
  return (
    <main className="flex min-h-svh flex-col bg-white text-ink">
      <AutoRedirect to="/" afterMs={site.thankYouRedirectMs} />

      <Container className="flex flex-1 flex-col justify-between gap-12 pt-5 pb-8 lg:pt-8 lg:pb-10">
        <Wordmark tone="light" className="self-start" />

        <div className="flex flex-col items-center gap-5 text-center lg:gap-7">
          <Image src="/icons/booked.svg" alt="" width={64} height={64} className="size-14 lg:size-16" priority />
          <h1 className="text-[48px] leading-[0.96] font-bold tracking-[-0.03em] lg:text-[80px]">Thank You!</h1>
          <p className="max-w-[560px] text-[16px] leading-[1.5] text-ink/60 lg:text-[20px]">
            Our team will reach out to you within 48 hours.
          </p>
          <a
            href={site.links.caseStudy}
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-1.5 pt-2 text-[15px] font-bold"
          >
            <span className="underline underline-offset-2">While you wait, get the case study</span>
            <span aria-hidden="true" className="text-brand">
              &rarr;
            </span>
          </a>
        </div>

        <p className="text-center text-[12px] text-ink/50 lg:text-[13px]">
          &copy; {site.company.year} {site.company.name} &middot; {site.company.location}
        </p>
      </Container>
    </main>
  );
}

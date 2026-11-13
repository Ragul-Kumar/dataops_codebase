import type { Metadata } from "next";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact Us | DataOps by Cyces",
  description: "Book a call with the Cyces DataOps team about a 14-day pilot on the pipeline that breaks most.",
  alternates: { canonical: "/contact" },
};

/**
 * /contact: the Tally booking form, full screen. Every booking button on the landing page links here.
 * Follows Tally's "full page" embed: the form iframe fills the whole window.
 * Black background on purpose: the form's text is white and its own background is transparent.
 * After submit, Tally's own redirect setting sends the visitor to /thank-you.
 */
export default function ContactPage() {
  return (
    <main className="fixed inset-0 bg-ink">
      <iframe src={site.bookCallForm} title="Contact Us" className="block size-full border-0" />
    </main>
  );
}

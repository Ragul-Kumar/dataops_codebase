/**
 * Site-wide settings. Change links and copy that repeat across sections here,
 * not inside the components.
 */
export const site = {
  name: "DataOps by Cyces",
  /** Live address. Used for canonical URLs, the sitemap, robots.txt and link-preview images. */
  url: "https://dataops.cyces.co",
  title: "24/7 DataOps Support | Cyces",
  description:
    "24/7 L1 and L2 support for your data pipelines and application stack. AI handles first-line troubleshooting and alert triage, our engineers take care of the rest. Read-only access, your SOPs.",

  links: {
    /** Every "Talk to our team" / "Book a call" / "Start your pilot" button: the full-page booking form. */
    bookCall: "/contact",
    /** Every "Get / See the case study" button: Tally form that collects a work email, then sends the case study. */
    caseStudy: "https://tally.so/r/aO52ov",
    /** Footer legal link: Cyces privacy policy and terms, hosted on cyces.co. */
    finePrint: "https://cyces.co/fine-print",
  },

  /** Tally booking form shown full screen on /contact. transparentBackground lets the page's black show through (the form's text is white). */
  bookCallForm: "https://tally.so/r/Ar2a60?transparentBackground=1",

  /**
   * /thank-you returns to the landing page after this delay.
   * The page is reached through the booking form's "Redirect on completion" setting in Tally (set manually).
   */
  thankYouRedirectMs: 5000,

  /** Footer copyright line: "© 2026 Cyces Inc. · Delaware, USA". The whole line links to the company site. */
  company: {
    year: 2026,
    name: "Cyces Inc.",
    url: "https://cyces.co",
    location: "Delaware, USA",
  },

  /** The three risk reducers repeated under the hero and final CTA. */
  riskReducers: ["AI-driven, Human-augmented", "Your SOPs, not ours", "14-day pilot"],
} as const;

import type { MetadataRoute } from "next";
import { site } from "@/config/site";

/** Bump this when the page content changes. A fixed date keeps the sitemap static (new Date() would make it render per request). */
const LAST_UPDATED = "2026-11-13";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url, lastModified: LAST_UPDATED, changeFrequency: "monthly", priority: 1 },
    { url: `${site.url}${site.links.bookCall}`, lastModified: LAST_UPDATED, changeFrequency: "yearly", priority: 0.5 },
  ];
}

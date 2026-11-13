import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { site } from "@/config/site";
import "./globals.css";

const glacial = localFont({
  src: [
    { path: "../fonts/GlacialIndifference-Regular.woff2", weight: "400", style: "normal" },
    { path: "../fonts/GlacialIndifference-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-glacial",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: site.title,
    description: site.description,
    siteName: site.name,
    url: "/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={glacial.variable}>
      <body>{children}</body>
    </html>
  );
}

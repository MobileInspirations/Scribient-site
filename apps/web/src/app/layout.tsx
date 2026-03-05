import type { Metadata, Viewport } from "next";
import { Fraunces, Source_Sans_3 } from "next/font/google";
import { Analytics } from "@/components/layout/analytics";
import { fallbackSiteSettings } from "@/lib/cms/fallback-content";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://scribient.ai"),
  title: fallbackSiteSettings.defaultSeo.metaTitle,
  description: fallbackSiteSettings.defaultDescription,
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
  openGraph: {
    title: fallbackSiteSettings.defaultSeo.metaTitle,
    description: fallbackSiteSettings.defaultDescription,
    siteName: fallbackSiteSettings.brandName,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: fallbackSiteSettings.defaultSeo.metaTitle,
    description: fallbackSiteSettings.defaultDescription,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f5f1e8",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${sourceSans.variable}`}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

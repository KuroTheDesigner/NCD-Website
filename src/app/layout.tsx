import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/layout/nav";
import { Footer } from "@/components/layout/footer";

/*
 * Fonts are loaded at runtime via Google Fonts CDN (browser fetch).
 * This avoids the build-time network requirement of next/font/google.
 * CSS variables are defined in globals.css.
 */

export const metadata: Metadata = {
  metadataBase: new URL("https://newculturedesigns.com.ng"),
  title: {
    default:
      "New Culture Designs — Architecture, interiors, and cultural buildings in Nigeria",
    template: "%s · New Culture Designs",
  },
  description:
    "An indigenous architectural practice working across Nigeria and beyond. Design, design-build, facilities, and property development — rooted in the legacy of Demas Nwoko.",
  applicationName: "New Culture Designs",
  keywords: [
    "architecture firm Nigeria",
    "Nigerian architectural design",
    "Demas Nwoko architect",
    "cultural architecture Nigeria",
    "Ibadan architecture firm",
    "design-build Nigeria",
  ],
  authors: [{ name: "New Culture Designs & Development Centre" }],
  openGraph: {
    type: "website",
    title:
      "New Culture Designs — Architecture, interiors, and cultural buildings in Nigeria",
    description:
      "An indigenous architectural practice working across Nigeria and beyond, rooted in the legacy of Demas Nwoko.",
    siteName: "New Culture Designs",
    locale: "en_NG",
    // Programmatic OG image is generated in a later build phase.
    images: [
      {
        url: "/og-default.png",
        width: 1200,
        height: 630,
        alt: "New Culture Designs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "New Culture Designs",
    description:
      "An indigenous architectural practice working across Nigeria and beyond.",
  },
  icons: {
    icon: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..900;1,9..144,300..900&family=Outfit:wght@100..900&family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-[100dvh] flex flex-col">
        <a href="#content" className="skip-link">
          Skip to content
        </a>

        <Nav />

        <main id="content" className="flex-1">
          {children}
        </main>

        <Footer />

        {/* Grain overlay — fixed, pointer-events:none, non-interactive. */}
        <div aria-hidden="true" className="grain-overlay" />
      </body>
    </html>
  );
}

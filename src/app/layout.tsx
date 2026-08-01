import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import SideNav from "@/components/SideNav";
import PageTransition from "@/components/PageTransition";
import { profile } from "@/data/profile";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = "Nicky Rabesoa — Dev Frontend React";
const description =
  "Portfolio de Nicky Rabesoa, ingénieur frontend React et développeur fullstack freelance basé à Madagascar.";

export const metadata: Metadata = {
  metadataBase: new URL("https://nicky-rabesoa.vercel.app"),
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.title,
  url: "https://nicky-rabesoa.vercel.app",
  email: profile.email,
  telephone: profile.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Antananarivo",
    addressCountry: "MG",
  },
  sameAs: [profile.linkedin, profile.github],
  knowsAbout: Object.values(profile.skills).flat(),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col lg:flex-row bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <SideNav />
        <main className="flex-1 lg:ml-64 min-h-screen">
          <PageTransition>{children}</PageTransition>
        </main>
        <Analytics />
      </body>
    </html>
  );
}

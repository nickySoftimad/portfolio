import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SideNav from "@/components/SideNav";
import PageTransition from "@/components/PageTransition";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = "Nicky Rabesoa — Ingénieur Frontend React";
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
        <SideNav />
        <main className="flex-1 lg:ml-64 min-h-screen">
          <PageTransition>{children}</PageTransition>
        </main>
      </body>
    </html>
  );
}

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

export const metadata: Metadata = {
  title: "Nicky Rabesoa — Ingénieur Frontend React",
  description:
    "Portfolio de Nicky Rabesoa, ingénieur frontend React et développeur fullstack freelance basé à Madagascar.",
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

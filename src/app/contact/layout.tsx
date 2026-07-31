import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Nicky Rabesoa",
  description:
    "Contactez Nicky Rabesoa, ingénieur frontend React et développeur fullstack freelance, disponible pour des missions à distance.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

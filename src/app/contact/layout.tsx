import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Nicky Rabesoa",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

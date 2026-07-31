"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { profile } from "@/data/profile";

const links = [
  { href: "/", label: "Accueil", num: "00" },
  { href: "/projects", label: "Projets", num: "01" },
  { href: "/about", label: "Parcours", num: "02" },
  { href: "/contact", label: "Contact", num: "03" },
];

export default function SideNav() {
  const pathname = usePathname();

  return (
    <aside className="lg:fixed lg:top-0 lg:left-0 lg:h-screen lg:w-64 border-b lg:border-b-0 lg:border-r border-border bg-background z-40 flex lg:flex-col justify-between">
      <div className="flex lg:flex-col w-full">
        <div className="p-6 border-b lg:border-b border-border hidden lg:block">
          <Link href="/" className="block">
            <span className="text-sm font-mono text-accent">N.R</span>
            <p className="text-xs text-muted mt-1 leading-snug">
              {profile.title}
            </p>
          </Link>
        </div>

        <nav className="flex lg:flex-col w-full">
          {links.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname?.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative group flex-1 lg:flex-none flex items-center gap-3 px-5 py-4 lg:py-5 border-r lg:border-r-0 lg:border-b border-border transition-colors ${
                  active
                    ? "text-accent"
                    : "text-muted hover:text-foreground hover:bg-surface/60"
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 bg-surface lg:border-l-2 border-b-2 lg:border-b-0 border-accent"
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  />
                )}
                <span className="index-num text-xs opacity-60 relative">{link.num}</span>
                <span className="text-sm tracking-wide relative">{link.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="hidden lg:block p-6 text-xs text-muted border-t border-border">
        <p>{profile.location}</p>
        <p className="mt-1">Disponible pour missions freelance</p>
      </div>
    </aside>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { Mail } from "lucide-react";
import LinkedinIcon from "@/components/icons/LinkedinIcon";
import GithubIcon from "@/components/icons/GithubIcon";
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
          <Link href="/" className="group block">
            <span className="relative inline-flex items-center justify-center w-12 h-12 rounded-xl border border-border bg-surface overflow-hidden transition-colors duration-300 group-hover:border-accent/60">
              <span
                className="absolute inset-0 opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-500"
                style={{ background: "var(--accent-glow)" }}
                aria-hidden="true"
              />
              <span className="relative font-mono text-base font-semibold text-accent tracking-tight">
                NR
              </span>
            </span>
            <span className="block text-sm font-medium tracking-tight mt-3.5 group-hover:text-accent transition-colors">
              {profile.name}
            </span>
            <span className="block text-[11px] text-muted mt-1 leading-relaxed">
              Frontend React · Fullstack freelance
            </span>
            <span className="mt-3 inline-flex items-center gap-1.5 text-[11px] text-muted">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Disponible
            </span>
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
        <div className="flex gap-4 mb-4">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-accent transition-colors"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-accent transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="hover:text-accent transition-colors"
          >
            <Mail className="w-4 h-4" strokeWidth={1.75} />
          </a>
        </div>
        <p className="leading-relaxed">{profile.location}</p>
      </div>
    </aside>
  );
}

"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import FadeIn from "@/components/FadeIn";

const easeOut = [0.22, 1, 0.36, 1] as const;

export default function Home() {
  return (
    <div>
      <section className="min-h-[85vh] flex flex-col justify-center px-6 sm:px-12 lg:px-16 py-24 border-b border-border">
        <motion.p
          className="font-mono text-accent text-sm mb-6"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: easeOut }}
        >
          01 — Développeur Fullstack / Frontend React
        </motion.p>
        <motion.h1
          className="text-4xl sm:text-6xl lg:text-7xl font-semibold leading-[1.05] max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: easeOut }}
        >
          {profile.name}, je construis des interfaces web qui tiennent la
          route en production.
        </motion.h1>
        <motion.p
          className="mt-8 max-w-2xl text-muted text-base sm:text-lg leading-relaxed"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25, ease: easeOut }}
        >
          {profile.summary}
        </motion.p>
        <motion.div
          className="mt-10 flex flex-wrap gap-4"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35, ease: easeOut }}
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 bg-accent text-background px-6 py-3 text-sm font-medium hover:opacity-90 hover:scale-[1.02] transition-all"
          >
            Voir les projets →
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 border border-border px-6 py-3 text-sm font-medium hover:border-accent hover:text-accent transition-colors"
          >
            Me contacter
          </Link>
        </motion.div>
      </section>

      <section className="px-6 sm:px-12 lg:px-16 py-20 border-b border-border">
        <FadeIn>
          <div className="flex items-baseline justify-between mb-10">
            <p className="font-mono text-accent text-sm">02 — Projets sélectionnés</p>
            <Link href="/projects" className="text-sm text-muted hover:text-accent transition-colors">
              Tout voir →
            </Link>
          </div>
        </FadeIn>
        <div className="grid sm:grid-cols-2 gap-px bg-border">
          {projects.slice(0, 4).map((project, i) => (
            <FadeIn key={project.slug} delay={i * 0.08}>
              <Link
                href={`/projects/${project.slug}`}
                className="group bg-background p-8 flex flex-col justify-between min-h-[220px] hover:bg-surface transition-colors h-full"
              >
                <div className="flex items-start justify-between">
                  <span className="index-num text-xs text-muted">0{i + 1}</span>
                  <span
                    className="w-2.5 h-2.5 rounded-full transition-transform group-hover:scale-125"
                    style={{ backgroundColor: project.color }}
                  />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted line-clamp-2">{project.summary}</p>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="px-6 sm:px-12 lg:px-16 py-20">
        <FadeIn>
          <p className="font-mono text-accent text-sm mb-10">03 — Stack technique</p>
        </FadeIn>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {Object.entries(profile.skills).map(([category, items], i) => (
            <FadeIn key={category} delay={i * 0.08}>
              <h4 className="text-sm font-medium mb-4">{category}</h4>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item} className="text-sm text-muted">
                    {item}
                  </li>
                ))}
              </ul>
            </FadeIn>
          ))}
        </div>
      </section>
    </div>
  );
}

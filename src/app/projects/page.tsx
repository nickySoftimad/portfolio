import Link from "next/link";
import type { Metadata } from "next";
import { projects } from "@/data/projects";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Projets — Nicky Rabesoa",
};

export default function ProjectsPage() {
  return (
    <div className="px-6 sm:px-12 lg:px-16 py-20">
      <FadeIn>
        <p className="font-mono text-accent text-sm mb-4">01</p>
        <h1 className="text-4xl sm:text-5xl font-semibold mb-16">Projets</h1>
      </FadeIn>

      <div className="flex flex-col">
        {projects.map((project, i) => (
          <FadeIn key={project.slug} delay={i * 0.06} y={10}>
            <Link
              href={`/projects/${project.slug}`}
              className="group border-t border-border last:border-b py-8 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 hover:bg-surface transition-colors px-2 -mx-2"
            >
              <span className="index-num text-sm text-muted w-8 shrink-0">
                0{i + 1}
              </span>
              <span
                className="w-2.5 h-2.5 rounded-full shrink-0 transition-transform group-hover:scale-125"
                style={{ backgroundColor: project.color }}
              />
              <div className="flex-1">
                <h2 className="text-2xl sm:text-3xl font-medium group-hover:text-accent transition-colors">
                  {project.title}
                </h2>
                <p className="text-sm text-muted mt-1">
                  {project.client} · {project.year}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 sm:justify-end sm:w-64 shrink-0">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-muted border border-border px-2 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <span className="hidden sm:block text-muted group-hover:text-accent group-hover:translate-x-1 transition-all">
                →
              </span>
            </Link>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}

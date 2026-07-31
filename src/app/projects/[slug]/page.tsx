import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects } from "@/data/projects";
import FadeIn from "@/components/FadeIn";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Projet" };
  return {
    title: `${project.title} — Nicky Rabesoa`,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  const project = projects[index];

  if (!project) notFound();

  const next = projects[(index + 1) % projects.length];

  return (
    <div>
      <div
        className="h-1.5 w-full"
        style={{ backgroundColor: project.color }}
      />
      <div className="px-6 sm:px-12 lg:px-16 py-20">
        <Link
          href="/projects"
          className="text-sm text-muted hover:text-foreground transition-colors"
        >
          ← Tous les projets
        </Link>

        <FadeIn y={20}>
          <p className="font-mono text-accent text-sm mt-8 mb-4">
            0{index + 1} — {project.client}
          </p>
          <h1 className="text-4xl sm:text-6xl font-semibold max-w-3xl">
            {project.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted leading-relaxed">
            {project.summary}
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-12 py-8 border-y border-border">
            <div>
              <p className="text-xs text-muted mb-1">Client</p>
              <p className="text-sm">{project.client}</p>
            </div>
            <div>
              <p className="text-xs text-muted mb-1">Année</p>
              <p className="text-sm">{project.year}</p>
            </div>
            <div>
              <p className="text-xs text-muted mb-1">Rôle</p>
              <p className="text-sm">{project.role}</p>
            </div>
            <div>
              <p className="text-xs text-muted mb-1">Stack</p>
              <p className="text-sm">{project.stack.join(", ")}</p>
            </div>
          </div>
        </FadeIn>

        {project.images && project.images.length > 0 && (
          <FadeIn delay={0.15}>
            <div className="grid sm:grid-cols-3 gap-4 mt-16">
              {project.images.map((src) => (
                <div
                  key={src}
                  className="relative aspect-video overflow-hidden rounded-lg border border-border"
                >
                  <Image
                    src={src}
                    alt={`Capture d'écran de ${project.title}`}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                </div>
              ))}
            </div>
          </FadeIn>
        )}

        <div className="grid lg:grid-cols-2 gap-12 mt-16">
          <FadeIn delay={0.05}>
            <h2 className="text-sm font-mono text-accent mb-3">Contexte</h2>
            <p className="text-muted leading-relaxed">{project.context}</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-sm font-mono text-accent mb-3">Défi</h2>
            <p className="text-muted leading-relaxed">{project.challenge}</p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <h2 className="text-sm font-mono text-accent mb-3">Solution</h2>
            <p className="text-muted leading-relaxed">{project.solution}</p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h2 className="text-sm font-mono text-accent mb-3">Résultat</h2>
            <p className="text-muted leading-relaxed">{project.result}</p>
          </FadeIn>
        </div>

        <FadeIn>
          <Link
            href={`/projects/${next.slug}`}
            className="group mt-24 border-t border-border pt-8 flex items-center justify-between hover:text-accent transition-colors"
          >
            <div>
              <p className="text-xs text-muted mb-2">Projet suivant</p>
              <p className="text-2xl sm:text-3xl font-medium">{next.title}</p>
            </div>
            <span className="group-hover:translate-x-1 transition-transform">
              →
            </span>
          </Link>
        </FadeIn>
      </div>
    </div>
  );
}

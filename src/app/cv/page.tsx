import type { Metadata } from "next";
import { profile } from "@/data/profile";
import PrintButton from "./PrintButton";

export const metadata: Metadata = {
  title: "CV — Nicky Rabesoa",
  description: profile.summary,
};

export default function CvPage() {
  return (
    <div className="cv-page px-6 sm:px-12 lg:px-16 py-16 max-w-3xl">
      <PrintButton />

      <header className="mb-10">
        <h1 className="text-3xl font-semibold">{profile.name}</h1>
        <p className="text-accent text-sm mt-1">{profile.title}</p>
        <p className="text-sm text-muted mt-3 leading-relaxed">
          {profile.location} · {profile.email} · {profile.phone}
        </p>
      </header>

      <section className="mb-10">
        <p className="leading-relaxed">{profile.summary}</p>
      </section>

      <section className="mb-10">
        <h2 className="font-mono text-accent text-sm mb-4 uppercase tracking-wide">
          Expérience
        </h2>
        <div className="flex flex-col gap-6">
          {profile.experience.map((exp) => (
            <div key={exp.company + exp.period}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <h3 className="font-medium">
                  {exp.role} — {exp.company}
                </h3>
                <p className="text-xs text-muted">{exp.period}</p>
              </div>
              <p className="text-xs text-muted mb-2">{exp.location}</p>
              <ul className="text-sm text-muted leading-relaxed list-disc list-inside space-y-1">
                {exp.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-mono text-accent text-sm mb-4 uppercase tracking-wide">
          Formation
        </h2>
        <div className="flex flex-col gap-3">
          {profile.education.map((edu) => (
            <div key={edu.degree}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <h3 className="font-medium text-sm">{edu.degree}</h3>
                <p className="text-xs text-muted">{edu.period}</p>
              </div>
              <p className="text-xs text-muted">{edu.school}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-mono text-accent text-sm mb-4 uppercase tracking-wide">
          Compétences
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {Object.entries(profile.skills).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-sm font-medium mb-1">{category}</h3>
              <p className="text-sm text-muted leading-relaxed">
                {items.join(", ")}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="font-mono text-accent text-sm mb-4 uppercase tracking-wide">
          Langues
        </h2>
        <p className="text-sm text-muted">
          {profile.languages.map((l) => `${l.name} (${l.level})`).join(" · ")}
        </p>
      </section>
    </div>
  );
}

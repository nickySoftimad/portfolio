import type { Metadata } from "next";
import { profile } from "@/data/profile";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Parcours — Nicky Rabesoa",
  description: profile.summary,
};

export default function AboutPage() {
  return (
    <div className="px-6 sm:px-12 lg:px-16 py-20">
      <FadeIn>
        <p className="font-mono text-accent text-sm mb-4">02</p>
        <h1 className="text-4xl sm:text-5xl font-semibold mb-8">Parcours</h1>
        <p className="max-w-2xl text-muted text-lg leading-relaxed mb-20">
          {profile.summary}
        </p>
      </FadeIn>

      <section className="mb-24">
        <FadeIn>
          <h2 className="font-mono text-accent text-sm mb-10">Expérience</h2>
        </FadeIn>
        <div className="flex flex-col">
          {profile.experience.map((exp, i) => (
            <FadeIn key={exp.company + exp.period} delay={i * 0.06} y={10}>
              <div className="grid sm:grid-cols-[200px_1fr] gap-4 sm:gap-12 py-8 border-t border-border last:border-b">
                <div>
                  <p className="text-sm text-muted">{exp.period}</p>
                  <p className="text-xs text-muted mt-1">{exp.location}</p>
                </div>
                <div>
                  <h3 className="text-xl font-medium">{exp.role}</h3>
                  <p className="text-sm text-accent mt-1 mb-4">{exp.company}</p>
                  <ul className="space-y-2">
                    {exp.points.map((point) => (
                      <li key={point} className="text-sm text-muted leading-relaxed pl-4 relative">
                        <span className="absolute left-0">–</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="mb-24">
        <FadeIn>
          <h2 className="font-mono text-accent text-sm mb-10">Formation</h2>
        </FadeIn>
        <div className="flex flex-col">
          {profile.education.map((edu, i) => (
            <FadeIn key={edu.degree} delay={i * 0.06} y={10}>
              <div className="grid sm:grid-cols-[200px_1fr] gap-4 sm:gap-12 py-6 border-t border-border last:border-b">
                <p className="text-sm text-muted">{edu.period}</p>
                <div>
                  <h3 className="text-lg font-medium">{edu.degree}</h3>
                  <p className="text-sm text-muted mt-1">{edu.school}</p>
                  {edu.detail && (
                    <p className="text-sm text-muted mt-1">{edu.detail}</p>
                  )}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section>
        <FadeIn>
          <h2 className="font-mono text-accent text-sm mb-10">Langues</h2>
        </FadeIn>
        <div className="grid sm:grid-cols-3 gap-8">
          {profile.languages.map((lang, i) => (
            <FadeIn key={lang.name} delay={i * 0.06}>
              <div className="border-t border-border pt-4">
                <p className="text-lg font-medium">{lang.name}</p>
                <p className="text-sm text-muted mt-1">{lang.level}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </div>
  );
}

import React from "react";
import { ExternalLinkIcon } from "@heroicons/react/outline";
import { projects } from "../constants/data";
import { Section } from "../components/ui/Section";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Reveal } from "../components/ui/Reveal";
import { TiltCard } from "../components/ui/TiltCard";

export const Projects: React.FC = () => (
  <Section id="projects">
    <SectionHeading
      eyebrow="Things I've built"
      title="Personal projects"
      subtitle="Native mobile apps sold on Codester, plus web side projects where I explore new ideas, tools and AI."
    />

    <div className="mt-14 grid md:grid-cols-2 gap-6">
      {projects.map((project, i) => (
        <Reveal key={project.name} delay={(i % 2) * 90} className="h-full">
          <TiltCard className="p-0 overflow-hidden h-full" max={6}>
            <div className={`h-1.5 w-full bg-gradient-to-r ${project.accent}`} />
            <div className="p-6 flex flex-col h-full">
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-xl font-bold">
                  {project.name}
                </h3>
                <span className="chip text-xs whitespace-nowrap">
                  {project.platform}
                </span>
              </div>
              <p className="mt-3 text-sm text-[var(--muted)] leading-relaxed">
                {project.blurb}
              </p>
              {project.link && (
                <a
                  href={project.link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-flex items-center gap-1 self-start text-xs text-brand-cyan hover:underline"
                >
                  <ExternalLinkIcon className="w-3.5 h-3.5" />
                  {project.link.label}
                </a>
              )}
              <ul className="mt-4 space-y-1.5">
                {project.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <span
                      className={`mt-1.5 h-1.5 w-1.5 rounded-full bg-gradient-to-r ${project.accent} shrink-0`}
                    />
                    <span className="text-[var(--muted)]">{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-5 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[var(--muted)]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </TiltCard>
        </Reveal>
      ))}
    </div>
  </Section>
);

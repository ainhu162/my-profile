import React from "react";
import {
  CheckIcon,
  ExternalLinkIcon,
  SparklesIcon,
} from "@heroicons/react/outline";
import { experiences, type Experience as ExperienceType } from "../constants/data";
import { Section } from "../components/ui/Section";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Reveal } from "../components/ui/Reveal";
import { TiltCard } from "../components/ui/TiltCard";

const Card: React.FC<{ exp: ExperienceType }> = ({ exp }) => (
  <TiltCard className="p-6" max={5}>
    <div className="flex flex-wrap items-center gap-2">
      <span className="chip font-mono text-brand-cyan">{exp.period}</span>
      <span className="text-xs text-[var(--muted)]">·</span>
      <span className="text-sm font-semibold text-brand-violet">
        {exp.project}
      </span>
    </div>

    <h3 className="font-display text-xl font-bold mt-3">
      <span className="text-grad">{exp.company}</span>
    </h3>
    <p className="text-sm font-medium text-[var(--muted)]">{exp.role}</p>
    <p className="mt-3 text-sm text-[var(--muted)] leading-relaxed">
      {exp.projectDesc}
    </p>

    {(exp.meta || exp.website) && (
      <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-[var(--muted)]">
        {exp.meta && <span>{exp.meta}</span>}
        {exp.website && (
          <a
            href={exp.website}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-brand-cyan hover:underline"
          >
            <ExternalLinkIcon className="w-3.5 h-3.5" />
            {exp.website.replace(/^https?:\/\//, "").replace(/\/$/, "")}
          </a>
        )}
      </div>
    )}

    <div className="mt-4 flex flex-wrap gap-2">
      {exp.tech.map((t) => (
        <span
          key={t}
          className="text-xs px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[var(--muted)]"
        >
          {t}
        </span>
      ))}
    </div>

    <ul className="mt-5 space-y-2">
      {exp.highlights.map((h) => (
        <li key={h} className="flex items-start gap-2 text-sm">
          <CheckIcon className="w-4 h-4 text-brand-cyan mt-0.5 shrink-0" />
          <span className="text-[var(--muted)]">{h}</span>
        </li>
      ))}
    </ul>

    {exp.achievements.length > 0 && (
      <div className="mt-5 pt-4 border-t border-white/10">
        <div className="flex items-center gap-1.5 text-xs uppercase tracking-wider text-brand-violet">
          <SparklesIcon className="w-4 h-4" />
          Achievements
        </div>
        <ul className="mt-2 space-y-1.5">
          {exp.achievements.map((a) => (
            <li key={a} className="text-sm text-[var(--muted)] leading-relaxed">
              {a}
            </li>
          ))}
        </ul>
      </div>
    )}
  </TiltCard>
);

export const Experience: React.FC = () => (
  <Section id="experience">
    <SectionHeading
      eyebrow="Where I've worked"
      title="Experience"
      subtitle="8+ years — from converting PSDs at VNG to leading a Vietnam team on TecAlliance's TecDoc Catalogue."
    />

    <div className="mt-14 relative">
      <span className="absolute left-4 md:left-1/2 top-2 bottom-2 w-px bg-gradient-to-b from-brand-violet via-brand-cyan to-transparent md:-translate-x-1/2" />

      <div className="space-y-10 md:space-y-16">
        {experiences.map((exp, i) => {
          const left = i % 2 === 0;
          return (
            <div
              key={exp.company}
              className="relative pl-12 md:pl-0 md:grid md:grid-cols-2 md:gap-12"
            >
              <span className="absolute left-4 md:left-1/2 top-4 w-4 h-4 rounded-full bg-brand-cyan ring-4 ring-brand-cyan/20 md:-translate-x-1/2 shadow-glow-cyan" />
              <div
                className={left ? "md:col-start-1" : "md:col-start-2 md:row-start-1"}
              >
                <Reveal direction={left ? "left" : "right"}>
                  <Card exp={exp} />
                </Reveal>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </Section>
);

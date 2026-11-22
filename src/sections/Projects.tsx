import React from "react";
import { projects } from "../constants/data";
import { Section } from "../components/ui/Section";
import { ExternalLink } from "../components/ui/ExternalLink";

export const Projects: React.FC = () => (
  <Section id="projects">
    <p data-reveal className="max-w-[62ch] text-muted">
      Native mobile apps whose source code I sell on Codester, plus web side
      projects where I try out new ideas and tools.
    </p>

    <ol className="mt-10 grid gap-x-14 md:grid-cols-2">
      {projects.map((p, i) => (
        <li
          key={p.name}
          data-reveal
          style={{ "--d": `${(i % 2) * 100}ms` } as React.CSSProperties}
          className="group flex flex-col border-t border-rule pb-8 pt-6"
        >
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <h3 className="font-serif text-[24px] font-normal leading-snug transition-colors duration-300 group-hover:text-accent">
              {p.name}
            </h3>
            <span className="label">{p.platform}</span>
          </div>

          <p className="mt-2">{p.blurb}</p>

          <ul className="dash-list mt-3 space-y-1.5">
            {p.features.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>

          <p className="mt-4 text-sm text-muted">{p.tech.join(", ")}</p>

          {p.link && (
            <p className="mt-3 text-sm">
              <ExternalLink href={p.link.href}>
                {p.link.label} <span className="nudge nudge-ne">↗</span>
              </ExternalLink>
            </p>
          )}
        </li>
      ))}
    </ol>
  </Section>
);

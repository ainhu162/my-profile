import React, { useRef } from "react";
import { experiences } from "../constants/data";
import { Section } from "../components/ui/Section";
import { ExternalLink } from "../components/ui/ExternalLink";
import { useTimeline } from "../hooks/useTimeline";

const hostname = (url: string) => new URL(url).hostname.replace(/^www\./, "");

export const Experience: React.FC = () => {
  const wrapRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLSpanElement>(null);
  const fillRef = useRef<HTMLSpanElement>(null);
  useTimeline(wrapRef, trackRef, fillRef);

  return (
    <Section id="experience" tone="band">
      <div ref={wrapRef} className="relative">
        {/* Timeline through the date column (sm and up); sized by useTimeline */}
        <span
          ref={trackRef}
          aria-hidden="true"
          className="pointer-events-none absolute left-[4px] hidden w-px bg-rule sm:block"
        />
        <span
          ref={fillRef}
          aria-hidden="true"
          className="timeline-fill pointer-events-none absolute left-[4px] hidden w-px bg-accent sm:block"
        />

        <ol>
          {experiences.map((exp) => (
            <li
              key={exp.company}
              data-reveal
              className="group grid gap-1 border-t border-rule py-9 first:border-t-0 first:pt-0 last:pb-0 sm:grid-cols-[168px_1fr] sm:gap-8"
            >
              <p className="label relative sm:whitespace-nowrap sm:pl-6 sm:pt-[7px]">
                <span
                  data-dot
                  aria-hidden="true"
                  className="absolute left-0 top-[11px] hidden h-[9px] w-[9px] rounded-full border border-muted bg-band group-hover:border-accent sm:block"
                />
                {exp.period}
              </p>

              <div>
                <h3 className="font-serif text-[24px] font-normal leading-snug">
                  <span className="transition-colors duration-300 group-hover:text-accent">
                    {exp.company}
                  </span>
                  <span className="text-muted"> — {exp.role}</span>
                </h3>
                <p className="mt-1 text-sm text-muted">
                  {[exp.project, exp.meta].filter(Boolean).join(" · ")}
                  {exp.website && (
                    <>
                      {" · "}
                      <ExternalLink href={exp.website}>{hostname(exp.website)}</ExternalLink>
                    </>
                  )}
                </p>

                <p className="mt-3 max-w-[68ch]">{exp.projectDesc}</p>

                <ul className="dash-list mt-3 max-w-[68ch] space-y-1.5">
                  {exp.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <p className="mt-4 text-sm text-muted">{exp.tech.join(", ")}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
};

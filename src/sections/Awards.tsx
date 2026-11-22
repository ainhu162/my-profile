import React from "react";
import { awards, education } from "../constants/data";
import { Section } from "../components/ui/Section";

export const Awards: React.FC = () => (
  <Section id="awards">
    <div className="grid gap-12 md:grid-cols-2 md:gap-14">
      <div data-reveal>
        {education.map((e) => (
          <div key={e.school}>
            <p className="label">{e.period}</p>
            <h3 className="mt-1 font-serif text-[24px] font-normal leading-snug">{e.school}</h3>
            <p className="mt-1 text-muted">
              {e.major} · {e.detail}
            </p>
          </div>
        ))}
      </div>

      <div data-reveal style={{ "--d": "120ms" } as React.CSSProperties}>
        <h3 className="label">Awards</h3>
        <ul className="mt-3 divide-y divide-rule border-y border-rule">
          {awards.map((a) => (
            <li key={a.title} className="grid grid-cols-[88px_1fr] gap-4 py-3">
              <span className="label pt-[3px]">{a.year}</span>
              <span>{a.title}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </Section>
);

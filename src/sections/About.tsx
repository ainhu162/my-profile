import React from "react";
import { experiences, profile } from "../constants/data";
import { Section } from "../components/ui/Section";
import { ExternalLink } from "../components/ui/ExternalLink";

const facts: { label: string; value: React.ReactNode }[] = [
  { label: "Based in", value: profile.location },
  { label: "Experience", value: `8+ years across ${experiences.length} companies` },
  { label: "Languages", value: profile.languages },
  { label: "Looking for", value: profile.lookingFor },
  {
    label: "Email",
    value: <ExternalLink href={`mailto:${profile.email}`}>{profile.email}</ExternalLink>,
  },
];

export const About: React.FC = () => (
  <Section id="about">
    <div className="grid gap-12 md:grid-cols-[1fr_300px] md:gap-16">
      <p data-reveal className="font-serif text-[20px] leading-[1.55] md:text-[23px]">
        {profile.summary}
      </p>

      <dl
        data-reveal
        style={{ "--d": "120ms" } as React.CSSProperties}
        className="self-start border-t border-rule text-[15px]"
      >
        {facts.map((f) => (
          <div key={f.label} className="border-b border-rule py-3">
            <dt className="label">{f.label}</dt>
            <dd className="mt-0.5 break-words">{f.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  </Section>
);

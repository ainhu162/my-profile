import React from "react";
import { otherSkills, skillGroups } from "../constants/data";
import { Section } from "../components/ui/Section";

const rows = [...skillGroups, { title: "Also", items: otherSkills }];

export const Skills: React.FC = () => (
  <Section id="skills" tone="band">
    <dl className="border-t border-rule">
      {rows.map((row) => (
        <div
          key={row.title}
          data-reveal
          className="grid gap-1 border-b border-rule py-4 sm:grid-cols-[168px_1fr] sm:gap-8"
        >
          <dt className="label sm:pt-[4px]">{row.title}</dt>
          <dd className="max-w-[68ch]">{row.items.join(", ")}</dd>
        </div>
      ))}
    </dl>
  </Section>
);

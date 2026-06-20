import React from "react";
import { BadgeCheckIcon } from "@heroicons/react/outline";
import { awards } from "../constants/data";
import { Section } from "../components/ui/Section";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Reveal } from "../components/ui/Reveal";

export const Awards: React.FC = () => (
  <Section id="awards">
    <SectionHeading eyebrow="Recognition" title="Honors & awards" />

    <div className="mt-14 grid sm:grid-cols-2 gap-5">
      {awards.map((award, i) => (
        <Reveal
          key={award.title}
          delay={(i % 2) * 70}
          direction={i % 2 === 0 ? "left" : "right"}
        >
          <div className="card card-hover p-5 flex items-center gap-4">
            <span className="grid place-items-center w-12 h-12 rounded-2xl bg-grad-brand text-white shrink-0 shadow-glow">
              <BadgeCheckIcon className="w-6 h-6" />
            </span>
            <div>
              <div className="text-xs font-mono text-brand-cyan">
                {award.year}
              </div>
              <div className="font-medium leading-snug">{award.title}</div>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  </Section>
);

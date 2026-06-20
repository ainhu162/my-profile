import React from "react";
import { otherSkills, skillGroups, techStrip } from "../constants/data";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Reveal } from "../components/ui/Reveal";
import { TiltCard } from "../components/ui/TiltCard";

const maskStyle: React.CSSProperties = {
  WebkitMaskImage:
    "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)",
  maskImage:
    "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)",
};

export const Skills: React.FC = () => (
  <section id="skills" className="relative py-20 md:py-28">
    <div className="max-w-screen-lg mx-auto px-5">
      <SectionHeading
        eyebrow="What I work with"
        title="Skills & tech stack"
        subtitle="The languages, frameworks and tools I reach for to ship polished, performant interfaces."
      />
    </div>

    {/* infinite marquee */}
    <div className="mt-12 overflow-hidden py-3" style={maskStyle}>
      <div className="marquee">
        {[0, 1].map((group) => (
          <ul
            key={group}
            className="flex items-center gap-10 px-5 shrink-0"
            aria-hidden={group === 1}
          >
            {techStrip.map((t) => (
              <li
                key={t.name}
                className="flex items-center gap-2.5 shrink-0 opacity-80 hover:opacity-100 transition-opacity"
              >
                <img src={t.icon} alt={t.name} className="w-8 h-8" />
                <span className="text-sm font-medium whitespace-nowrap">
                  {t.name}
                </span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>

    <div className="max-w-screen-lg mx-auto px-5 mt-12">
      <div className="grid md:grid-cols-2 gap-5">
        {skillGroups.map((group, i) => (
          <Reveal key={group.title} delay={i * 80} className="h-full">
            <TiltCard className="p-6 h-full" max={6}>
              <div className="flex items-center gap-3">
                <span
                  className={`h-8 w-1.5 rounded-full bg-gradient-to-b ${group.accent}`}
                />
                <h3 className="font-display text-xl font-bold">{group.title}</h3>
              </div>
              <div className="mt-5 flex flex-wrap gap-2.5">
                {group.items.map((item) => (
                  <span key={item.name} className="chip">
                    {item.icon && (
                      <img src={item.icon} alt="" className="w-5 h-5" />
                    )}
                    {item.name}
                  </span>
                ))}
              </div>
            </TiltCard>
          </Reveal>
        ))}
      </div>

      <Reveal delay={120}>
        <div className="mt-10 text-center">
          <h4 className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
            Also in my toolkit
          </h4>
          <div className="mt-4 flex flex-wrap justify-center gap-2.5">
            {otherSkills.map((skill) => (
              <span key={skill} className="chip">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

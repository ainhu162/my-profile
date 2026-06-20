import React from "react";
import { Reveal } from "./Reveal";

type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
};

export const SectionHeading: React.FC<Props> = ({
  eyebrow,
  title,
  subtitle,
  align = "center",
}) => (
  <div className={align === "center" ? "text-center max-w-2xl mx-auto" : ""}>
    {eyebrow && (
      <Reveal>
        <span className="chip">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan" />
          <span className="text-grad font-semibold uppercase tracking-wider text-[11px]">
            {eyebrow}
          </span>
        </span>
      </Reveal>
    )}
    <Reveal delay={80}>
      <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight mt-5">
        {title}
      </h2>
    </Reveal>
    <Reveal delay={120}>
      <div
        className={`h-1 w-20 rounded-full bg-grad-brand mt-5 ${
          align === "center" ? "mx-auto" : ""
        }`}
      />
    </Reveal>
    {subtitle && (
      <Reveal delay={160}>
        <p className="mt-5 text-[var(--muted)] leading-relaxed">{subtitle}</p>
      </Reveal>
    )}
  </div>
);

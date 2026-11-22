import React from "react";
import photo from "../assets/avt2.jpg";
import { experiences, profile } from "../constants/data";
import { ExternalLink } from "../components/ui/ExternalLink";
import { container } from "../components/ui/Section";

const current = experiences.filter((e) => e.period.includes("Present"));
const previous = experiences.filter((e) => !e.period.includes("Present"));

const links = [
  { label: "Email", href: `mailto:${profile.email}` },
  { label: "LinkedIn", href: profile.linkedin },
  { label: "GitHub", href: profile.github },
  { label: "LeetCode", href: profile.leetcode },
];

/** Stagger delay for the load-in animation. */
const delay = (ms: number) => ({ "--d": `${ms}ms` } as React.CSSProperties);

export const Hero: React.FC = () => (
  <section id="top" className={container}>
    <div className="grid gap-10 pb-4 pt-12 md:grid-cols-[1fr_240px] md:gap-16 md:pb-6 md:pt-20">
      <div>
        <p className="label rise">{profile.location}</p>
        <h1
          className="rise mt-4 font-serif text-[44px] font-normal leading-[1.05] tracking-[-0.01em] md:text-[68px]"
          style={delay(80)}
        >
          {profile.name}
        </h1>
        <p
          className="rise mt-3 font-serif text-[22px] italic text-muted md:text-[26px]"
          style={delay(160)}
        >
          {profile.title}
        </p>

        <dl
          className="rise mt-10 grid gap-y-1 text-[15px] sm:grid-cols-[88px_1fr] sm:gap-y-3"
          style={delay(260)}
        >
          <dt className="label sm:pt-[3px]">Now</dt>
          <dd className="mb-3 sm:mb-0">
            {current.map((e) => (
              <span key={e.company} className="block">
                {e.role} at {e.company}
              </span>
            ))}
          </dd>
          <dt className="label sm:pt-[3px]">Before</dt>
          <dd>{previous.map((e) => e.company).join(", ")}</dd>
        </dl>

        <p
          className="rise mt-10 flex flex-wrap gap-x-5 gap-y-2 text-[15px]"
          style={delay(340)}
        >
          {links.map((l) => (
            <ExternalLink key={l.label} href={l.href}>
              {l.label}
            </ExternalLink>
          ))}
          <a href={profile.cv} download className="link">
            Download CV
          </a>
        </p>
      </div>

      <figure className="rise max-w-[240px] overflow-hidden" style={delay(200)}>
        <img
          src={photo}
          alt={`${profile.name} sitting on wooden garden stairs next to a film camera`}
          className="aspect-[3/4] w-full object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
        />
      </figure>
    </div>
  </section>
);

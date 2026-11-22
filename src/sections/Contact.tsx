import React from "react";
import { profile } from "../constants/data";
import { Section, container } from "../components/ui/Section";
import { ExternalLink, prettyUrl } from "../components/ui/ExternalLink";

const channels = [
  {
    label: "Phone",
    value: (
      <ExternalLink href={`tel:+84${profile.phone.replace(/\s/g, "").replace(/^0/, "")}`}>
        {profile.phone}
      </ExternalLink>
    ),
  },
  { label: "LinkedIn", value: <ExternalLink href={profile.linkedin}>{prettyUrl(profile.linkedin)}</ExternalLink> },
  { label: "GitHub", value: <ExternalLink href={profile.github}>{prettyUrl(profile.github)}</ExternalLink> },
  { label: "LeetCode", value: <ExternalLink href={profile.leetcode}>{prettyUrl(profile.leetcode)}</ExternalLink> },
  {
    label: "CV",
    value: (
      <a href={profile.cv} download className="link">
        Download PDF
      </a>
    ),
  },
];

export const Contact: React.FC = () => (
  <>
    <Section id="contact" tone="band">
      <div className="grid gap-12 md:grid-cols-[1fr_300px] md:gap-16">
        <div data-reveal>
          <p className="balance max-w-[30ch] font-serif text-[26px] leading-snug md:text-[34px]">
            I'm open to {profile.lookingFor.toLowerCase()}. Email is the quickest
            way to reach me.
          </p>
          <p className="mt-6 font-serif text-[22px] md:text-[28px]">
            <ExternalLink href={`mailto:${profile.email}`} className="break-all">
              {profile.email}
            </ExternalLink>
          </p>
        </div>

        <dl
          data-reveal
          style={{ "--d": "120ms" } as React.CSSProperties}
          className="self-start border-t border-rule text-[15px]"
        >
          {channels.map((c) => (
            <div key={c.label} className="border-b border-rule py-3">
              <dt className="label">{c.label}</dt>
              <dd className="mt-0.5">{c.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>

    <footer className={`${container} label flex justify-between py-8`}>
      <span>
        © {new Date().getFullYear()} {profile.name}
      </span>
      <a href="#top" className="transition-colors hover:text-ink">
        Back to top <span className="nudge nudge-up">↑</span>
      </a>
    </footer>
  </>
);

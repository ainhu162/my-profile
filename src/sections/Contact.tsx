import React from "react";
import {
  DocumentDownloadIcon,
  MailIcon,
  PhoneIcon,
} from "@heroicons/react/outline";
import iconGithub from "../assets/icon-github.svg";
import iconLinkedin from "../assets/icon-linkedin.svg";
import iconLeetcode from "../assets/icon-leetcode.png";
import { profile } from "../constants/data";
import { Section } from "../components/ui/Section";
import { Reveal } from "../components/ui/Reveal";
import { MagneticButton } from "../components/ui/MagneticButton";

const socials = [
  { href: profile.linkedin, icon: iconLinkedin, label: "LinkedIn" },
  { href: profile.github, icon: iconGithub, label: "GitHub" },
  { href: profile.leetcode, icon: iconLeetcode, label: "LeetCode" },
];

export const Contact: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <Section id="contact">
      <Reveal direction="scale">
        <div className="relative card overflow-hidden text-center p-10 md:p-16">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-72 h-72 bg-brand-violet/30 blur-3xl rounded-full pointer-events-none" />
          <div className="relative">
            <span className="chip mx-auto">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <span className="text-[var(--muted)]">Let's connect</span>
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-extrabold mt-5 tracking-tight">
              Let's build something <span className="text-grad">great</span>
              <br className="hidden sm:block" /> together.
            </h2>
            <p className="mt-4 text-[var(--muted)] max-w-xl mx-auto">
              I'm open to senior frontend roles and interesting collaborations.
              The fastest way to reach me is a quick email.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              <MagneticButton href={`mailto:${profile.email}`} variant="grad">
                <MailIcon className="w-5 h-5" />
                Email me
              </MagneticButton>
              <MagneticButton href={profile.cv} download variant="ghost">
                <DocumentDownloadIcon className="w-5 h-5" />
                Download CV
              </MagneticButton>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-2 text-[var(--muted)] hover:text-[var(--text)] transition-colors"
              >
                <MailIcon className="w-4 h-4 text-brand-violet" />
                {profile.email}
              </a>
              <a
                href={`tel:${profile.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2 text-[var(--muted)] hover:text-[var(--text)] transition-colors"
              >
                <PhoneIcon className="w-4 h-4 text-brand-cyan" />
                {profile.phone}
              </a>
            </div>

            <div className="mt-7 flex justify-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="group grid place-items-center w-11 h-11 rounded-full glass hover:-translate-y-1 hover:border-brand-violet/60 transition-all duration-300"
                >
                  <img
                    src={s.icon}
                    alt={s.label}
                    className="w-5 h-5 opacity-75 group-hover:opacity-100 transition-opacity"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </Reveal>

      <footer className="mt-12 text-center text-sm text-[var(--muted)]">
        <p>
          © {year} {profile.name}. Designed &amp; built with React, TypeScript
          &amp; Tailwind CSS.
        </p>
      </footer>
    </Section>
  );
};

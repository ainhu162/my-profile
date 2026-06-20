import React from "react";
import {
  AcademicCapIcon,
  CheckCircleIcon,
  LocationMarkerIcon,
  MailIcon,
  PhoneIcon,
  UserIcon,
} from "@heroicons/react/outline";
import avt from "../assets/avt2.jpg";
import { education, profile } from "../constants/data";
import { Section } from "../components/ui/Section";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Reveal } from "../components/ui/Reveal";

const facts = [
  { Icon: UserIcon, label: "Name", value: profile.name },
  { Icon: LocationMarkerIcon, label: "Location", value: profile.location },
  { Icon: MailIcon, label: "Email", value: profile.email },
  { Icon: PhoneIcon, label: "Phone", value: profile.phone },
];

export const About: React.FC = () => (
  <Section id="about">
    <SectionHeading eyebrow="My intro" title="About me" />

    <div className="mt-14 grid lg:grid-cols-[0.85fr_1.15fr] gap-12 items-center">
      {/* image */}
      <Reveal direction="left" className="relative mx-auto lg:mx-0 max-w-sm">
        <div className="absolute -inset-3 rounded-[2rem] bg-grad-brand opacity-30 blur-2xl" />
        <div className="card p-2 rounded-[2rem]">
          <img
            src={avt}
            alt="Nhu Tu"
            className="rounded-[1.6rem] w-full object-cover"
          />
        </div>
        <div className="absolute -bottom-5 -right-3 sm:right-6 glass rounded-2xl px-5 py-3 shadow-card">
          <div className="font-display text-2xl font-extrabold text-grad">
            8+ yrs
          </div>
          <div className="text-xs text-[var(--muted)]">Building for web</div>
        </div>
      </Reveal>

      {/* text */}
      <div>
        <Reveal direction="right">
          <p className="text-lg leading-relaxed">
            <span className="font-display text-3xl font-bold text-grad mr-1">
              Hi,
            </span>
            {profile.summary}
          </p>
        </Reveal>

        <Reveal direction="right" delay={80}>
          <ul className="mt-6 space-y-2">
            {profile.goals.map((goal) => (
              <li key={goal} className="flex items-start gap-2">
                <CheckCircleIcon className="w-5 h-5 text-brand-cyan mt-0.5 shrink-0" />
                <span className="text-[var(--muted)]">{goal}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal direction="right" delay={140}>
          <div className="mt-8 grid sm:grid-cols-2 gap-3">
            {facts.map((f) => (
              <div
                key={f.label}
                className="card card-hover flex items-center gap-3 px-4 py-3"
              >
                <span className="grid place-items-center w-10 h-10 rounded-xl bg-brand-violet/15 text-brand-violet shrink-0">
                  <f.Icon className="w-5 h-5" />
                </span>
                <div className="min-w-0">
                  <div className="text-[11px] uppercase tracking-wider text-[var(--muted)]">
                    {f.label}
                  </div>
                  <div className="text-sm font-medium truncate">{f.value}</div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal direction="right" delay={200}>
          <div className="mt-4 card card-hover flex items-start gap-3 px-4 py-4">
            <span className="grid place-items-center w-10 h-10 rounded-xl bg-brand-cyan/15 text-brand-cyan shrink-0">
              <AcademicCapIcon className="w-5 h-5" />
            </span>
            <div className="flex-1">
              {education.map((e) => (
                <div
                  key={e.school}
                  className="flex flex-wrap items-baseline justify-between gap-x-3"
                >
                  <div>
                    <div className="font-semibold">{e.school}</div>
                    <div className="text-sm text-[var(--muted)]">
                      {e.major} · {e.detail}
                    </div>
                  </div>
                  <div className="text-xs text-[var(--muted)] font-mono">
                    {e.period}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  </Section>
);

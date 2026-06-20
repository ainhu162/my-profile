import React, { useEffect, useRef } from "react";
import {
  ArrowDownIcon,
  DocumentDownloadIcon,
  MailIcon,
} from "@heroicons/react/outline";
import avt from "../assets/avt.jpg";
import iconReact from "../assets/icon-react.svg";
import iconTs from "../assets/icon-ts.svg";
import iconAngular from "../assets/icon-angular.svg";
import iconNode from "../assets/icon-nodejs.svg";
import iconGithub from "../assets/icon-github.svg";
import iconLinkedin from "../assets/icon-linkedin.svg";
import iconLeetcode from "../assets/icon-leetcode.png";
import { profile, stats } from "../constants/data";
import { useTypewriter } from "../hooks/useTypewriter";
import { useInView } from "../hooks/useInView";
import { useCountUp } from "../hooks/useCountUp";
import { MagneticButton } from "../components/ui/MagneticButton";

const socials = [
  { href: profile.linkedin, icon: iconLinkedin, label: "LinkedIn" },
  { href: profile.github, icon: iconGithub, label: "GitHub" },
  { href: profile.leetcode, icon: iconLeetcode, label: "LeetCode" },
];

const floatBadges = [
  { icon: iconReact, label: "React", className: "top-2 -left-6", depth: 26, delay: "0s" },
  { icon: iconTs, label: "TypeScript", className: "top-1/3 -right-8", depth: 18, delay: "1.2s" },
  { icon: iconAngular, label: "Angular", className: "bottom-6 -left-8", depth: 22, delay: "0.6s" },
  { icon: iconNode, label: "Node.js", className: "-bottom-2 right-4", depth: 30, delay: "1.8s" },
];

const Stat: React.FC<{ value: number; suffix: string; label: string }> = ({
  value,
  suffix,
  label,
}) => {
  const { ref, inView } = useInView<HTMLDivElement>();
  const count = useCountUp(value, inView);
  return (
    <div ref={ref} className="text-center sm:text-left">
      <div className="font-display text-3xl md:text-4xl font-extrabold text-grad">
        {count}
        {suffix}
      </div>
      <div className="text-xs md:text-sm text-[var(--muted)] mt-1">{label}</div>
    </div>
  );
};

export const Hero: React.FC = () => {
  const typed = useTypewriter(profile.taglines);
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      window.matchMedia("(pointer: coarse)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    const onMove = (e: MouseEvent) => {
      const el = layerRef.current;
      if (!el) return;
      const dx = (e.clientX - window.innerWidth / 2) / (window.innerWidth / 2);
      const dy = (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2);
      el.querySelectorAll<HTMLElement>("[data-depth]").forEach((node) => {
        const depth = Number(node.dataset.depth || 0);
        node.style.transform = `translate3d(${dx * depth}px, ${dy * depth}px, 0)`;
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 pb-16"
    >
      <div
        ref={layerRef}
        className="max-w-screen-lg mx-auto px-5 w-full grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center"
      >
        {/* ---- Left: copy ---- */}
        <div className="text-center lg:text-left">
          <div className="animate-fade-up">
            <span className="chip">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 animate-pulse-ring" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
              </span>
              <span className="text-[var(--muted)]">
                Available for opportunities
              </span>
            </span>
          </div>

          <p
            className="mt-6 text-[var(--muted)] font-medium animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            {profile.greeting}
          </p>
          <h1
            className="font-display text-5xl md:text-7xl font-extrabold tracking-tight mt-2 animate-fade-up"
            style={{ animationDelay: "0.18s" }}
          >
            <span className="text-grad">{profile.name}</span>
          </h1>
          <h2
            className="font-display text-2xl md:text-3xl font-semibold mt-3 animate-fade-up"
            style={{ animationDelay: "0.26s" }}
          >
            {profile.title}
          </h2>

          <p
            className="mt-5 font-mono text-sm md:text-base text-brand-cyan h-6 animate-fade-up"
            style={{ animationDelay: "0.34s" }}
          >
            {"> "}
            {typed}
            <span className="inline-block w-[2px] h-4 bg-brand-cyan align-middle ml-0.5 animate-blink" />
          </p>

          <p
            className="mt-6 max-w-xl mx-auto lg:mx-0 text-[var(--muted)] leading-relaxed animate-fade-up"
            style={{ animationDelay: "0.42s" }}
          >
            8+ years turning complex problems into fast, polished web apps —
            front-end with React &amp; Angular, back-end with Node.js &amp;
            TypeScript.
          </p>

          <div
            className="mt-8 flex flex-wrap gap-3 justify-center lg:justify-start animate-fade-up"
            style={{ animationDelay: "0.5s" }}
          >
            <MagneticButton href={profile.cv} download variant="grad">
              <DocumentDownloadIcon className="w-5 h-5" />
              Download CV
            </MagneticButton>
            <MagneticButton href="#contact" variant="ghost">
              <MailIcon className="w-5 h-5" />
              Get in touch
            </MagneticButton>
          </div>

          <div
            className="mt-8 flex gap-3 justify-center lg:justify-start animate-fade-up"
            style={{ animationDelay: "0.58s" }}
          >
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

        {/* ---- Right: avatar ---- */}
        <div className="relative flex justify-center lg:justify-end">
          <div
            className="relative w-64 h-64 md:w-80 md:h-80 animate-float"
            data-depth="-16"
          >
            {/* glow */}
            <div className="absolute -inset-8 rounded-full bg-brand-violet/25 blur-3xl" />
            {/* rotating gradient ring */}
            <div className="absolute -inset-2 rounded-full bg-[conic-gradient(from_0deg,#8b5cf6,#22d3ee,#d946ef,#8b5cf6)] animate-spin-slow" />
            <div className="absolute inset-0 rounded-full p-[3px]">
              <img
                src={avt}
                alt="Nhu Tu"
                className="w-full h-full object-cover rounded-full border border-white/15"
              />
            </div>

            {/* floating tech badges */}
            {floatBadges.map((b) => (
              <div
                key={b.label}
                data-depth={b.depth}
                className={`absolute ${b.className} animate-float`}
                style={{ animationDelay: b.delay }}
              >
                <div className="glass rounded-2xl p-2.5 shadow-card flex items-center gap-2">
                  <img src={b.icon} alt={b.label} className="w-7 h-7" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ---- Stats band ---- */}
      <div className="absolute bottom-6 inset-x-0 px-5 hidden md:block">
        <div className="max-w-screen-lg mx-auto">
          <div className="glass rounded-2xl px-8 py-5 grid grid-cols-4 gap-4">
            {stats.map((s) => (
              <Stat key={s.label} {...s} />
            ))}
          </div>
        </div>
      </div>

      {/* scroll cue */}
      <a
        href="#about"
        aria-label="Scroll to about"
        className="absolute bottom-2 left-1/2 -translate-x-1/2 md:hidden text-[var(--muted)]"
      >
        <ArrowDownIcon className="w-6 h-6 animate-bounce" />
      </a>
    </section>
  );
};

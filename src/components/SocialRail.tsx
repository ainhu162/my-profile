import React from "react";
import iconGithub from "../assets/icon-github.svg";
import iconLinkedin from "../assets/icon-linkedin.svg";
import iconLeetcode from "../assets/icon-leetcode.png";
import { profile } from "../constants/data";

const links = [
  { href: profile.linkedin, icon: iconLinkedin, label: "LinkedIn" },
  { href: profile.github, icon: iconGithub, label: "GitHub" },
  { href: profile.leetcode, icon: iconLeetcode, label: "LeetCode" },
];

/** Fixed vertical social rail on the left (large screens only). */
export const SocialRail: React.FC = () => (
  <div className="hidden lg:flex fixed left-5 bottom-0 z-40 flex-col items-center gap-4">
    {links.map((l) => (
      <a
        key={l.label}
        href={l.href}
        target="_blank"
        rel="noreferrer"
        aria-label={l.label}
        className="group grid place-items-center w-11 h-11 rounded-full glass hover:-translate-y-1 hover:border-brand-violet/60 transition-all duration-300"
      >
        <img
          src={l.icon}
          alt={l.label}
          className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity"
        />
      </a>
    ))}
    <span className="w-px h-24 bg-gradient-to-b from-brand-violet/60 to-transparent" />
  </div>
);

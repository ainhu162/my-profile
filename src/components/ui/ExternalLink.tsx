import React from "react";

type Props = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

/** Underlined text link; opens off-site URLs in a new tab. */
export const ExternalLink: React.FC<Props> = ({ href, children, className = "" }) => {
  const offSite = /^https?:\/\//.test(href);
  return (
    <a
      href={href}
      className={`link ${className}`}
      {...(offSite ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      {children}
    </a>
  );
};

/** "https://www.linkedin.com/in/nhutu/" -> "linkedin.com/in/nhutu" */
export const prettyUrl = (url: string) =>
  url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");

import React from "react";

type Props = {
  id?: string;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
};

/** Consistent vertical rhythm + centered container for a page section. */
export const Section: React.FC<Props> = ({
  id,
  children,
  className = "",
  containerClassName = "",
}) => (
  <section id={id} className={`relative py-20 md:py-28 ${className}`}>
    <div className={`max-w-screen-lg mx-auto px-5 ${containerClassName}`}>
      {children}
    </div>
  </section>
);

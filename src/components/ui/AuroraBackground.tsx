import React from "react";

/** Fixed animated aurora gradient + dotted grid + cursor spotlight. */
export const AuroraBackground: React.FC = () => (
  <>
    <div className="aurora" aria-hidden="true">
      <div className="aurora__blob aurora__blob--1" />
      <div className="aurora__blob aurora__blob--2" />
      <div className="aurora__blob aurora__blob--3" />
      <div className="aurora__grid" />
    </div>
    <div className="spotlight" aria-hidden="true" />
  </>
);

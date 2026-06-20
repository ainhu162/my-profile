import React, { ReactNode } from "react";
import { AuroraBackground } from "./components/ui/AuroraBackground";
import { Cursor } from "./components/ui/Cursor";

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => (
  <div className="relative min-h-screen text-[var(--text)] overflow-x-clip">
    <AuroraBackground />
    <Cursor />
    {children}
  </div>
);

export default Layout;

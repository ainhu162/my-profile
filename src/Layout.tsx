import React, { ReactNode } from "react";

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => (
  <div className="min-h-screen bg-paper text-ink">{children}</div>
);

export default Layout;

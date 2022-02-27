import React, { ReactNode } from "react";

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <div className="dark:bg-slate-900">{children}</div>;
};

export default Layout;

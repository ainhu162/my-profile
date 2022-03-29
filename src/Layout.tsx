import React, { ReactNode } from "react";
import Widget from "./components/Widget.component";

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="dark:bg-slate-900 pb-5">
      <Widget />
      <div className="max-w-screen-lg mx-auto px-4">{children}</div>
    </div>
  );
};

export default Layout;

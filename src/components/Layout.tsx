import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className=" w-full h-screen overflow-auto ">
      <div className="w-full h-full bg-color1 overflow-auto">{children}</div>
    </div>
  );
};

export default Layout;

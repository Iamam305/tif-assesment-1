import React, { ReactNode } from "react";
import MainNav from "./main-nav";
import MainFooter from "./main-footer";

interface MainLayoutProps {
  children: ReactNode;
}
const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen relative flex flex-col justify-between bg-white overflow-x-hidden">
      <div className="max-w-[1440px] mx-auto relative w-full">
        <MainNav />
        <main  >{children}</main>
      </div>
      <MainFooter />
    </div>
  );
};

export default MainLayout;

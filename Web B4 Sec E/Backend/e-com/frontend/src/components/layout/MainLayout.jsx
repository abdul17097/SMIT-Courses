import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import MobileNav from "./MobileNav";
import Breadcrumb from "./Breadcrumb";

export const MainLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 font-sans text-slate-800 antialiased selection:bg-indigo-500 selection:text-white">
      <Header />
      <MobileNav />
      <Breadcrumb />
      <main className="flex-1 w-full">
        {children || <Outlet />}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;

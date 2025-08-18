import React from "react";
import { Header } from "./header";
import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";

export const PublicLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

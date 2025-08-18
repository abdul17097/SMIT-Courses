import React from "react";
import { Header } from "./header";
import { Outlet, Route } from "react-router-dom";

export const ProtectLayout = () => {
  const isAuthenticated = true; // Replace with actual authentication logic
  return (
    <div className="">
      {isAuthenticated == true ? (
        <div className="">
          <Header />
          <Outlet />
        </div>
      ) : (
        <div className="">your can't acces this route</div>
      )}
    </div>
  );
};

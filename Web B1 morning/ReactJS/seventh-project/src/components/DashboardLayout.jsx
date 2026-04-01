import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="flex w-full h-screen">
      <Sidebar />
      <div className="w-[80%] h-full p-5">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;

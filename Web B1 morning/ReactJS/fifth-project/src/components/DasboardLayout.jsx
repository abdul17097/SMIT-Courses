import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const DasboardLayout = () => {
  return (
    <div className="w-full flex h-screen">
      <Sidebar />
      <div className="p-4 w-[75%]">
        <Outlet />
      </div>
    </div>
  );
};

export default DasboardLayout;

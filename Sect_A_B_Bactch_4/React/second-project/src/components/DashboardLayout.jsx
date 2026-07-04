import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="border h-[100vh] overflow-hidden">
      <Navbar />
      <div className="grid grid-cols-5 w-full h-[90vh]">
        <Sidebar />
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;

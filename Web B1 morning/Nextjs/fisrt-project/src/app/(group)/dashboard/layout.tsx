import Navbar from "@/components/Navbar";
import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="">{children}</div>
    </div>
  );
};

export default DashboardLayout;

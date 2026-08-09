import React from "react";
import AdminSidebar from "../components/Sidebar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      <AdminSidebar />
      <main>{children}</main>
    </div>
  );
};

export default layout;

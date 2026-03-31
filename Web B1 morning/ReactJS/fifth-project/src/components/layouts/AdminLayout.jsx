import React from "react";
import AdminSidebar from "../sidebars/AdminSidebar";
import Dashboard from "../Dashboard";

const AdminLayout = ({ role }) => {
  return (
    <div className="w-full flex h-screen">
      <AdminSidebar />
      <div className="w-[80%] p-5">
        <Dashboard role={role} />
      </div>
    </div>
  );
};

export default AdminLayout;

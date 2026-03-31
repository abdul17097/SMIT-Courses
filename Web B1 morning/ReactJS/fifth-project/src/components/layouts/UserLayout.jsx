import React from "react";
import UserSidebar from "../sidebars/UserSidebar";
import Dashboard from "../Dashboard";

const UserLayout = ({ role }) => {
  return (
    <div className="w-full flex h-screen">
      <UserSidebar />
      <div className="w-[80%] p-5">
        <Dashboard role={role} />
      </div>
    </div>
  );
};

export default UserLayout;

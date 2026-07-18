import React from "react";
import Navbar from "../Navbar";
import { Outlet } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="w-full h-[100vh]">
      <Navbar />
      <div className="w-[100vw] flex h-full ">
        <div className="w-[15vw] h-full border"></div>
        <div className="w-[70vw] h-full">
          <Outlet />
        </div>
        <div className="w-[15vw] border h-full"></div>
      </div>
    </div>
  );
};

export default AdminDashboard;

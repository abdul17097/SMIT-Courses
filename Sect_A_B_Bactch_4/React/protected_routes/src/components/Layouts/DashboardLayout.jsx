import React, { useContext, useEffect } from "react";
import Sidebar from "../Sidebar";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

const DashboardLayout = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();
  if (!isAuthenticated) {
    return <Navigate to={"/home"} replace />;
  }
  return (
    <div className="w-full border h-[100vh] flex">
      <Sidebar />
      <div className="w-[80%] border">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;

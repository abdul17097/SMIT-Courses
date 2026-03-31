import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = ({ role }) => {
  let user = localStorage.getItem("user");
  user = JSON.parse(user);

  if (!user || user.role !== role) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default ProtectedRoutes;

// admin/dashboard
// user/dashboard
// vendor/dashboard

import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { APP_ROUTES } from "../constants/appRoutes";

export const ProtectedRoute = ({ children, allowedRoles }) => {
  const { isAuthenticated, user, loading } = useSelector((state) => state.auth);
  const location = useLocation();

  if (loading) {
    return null; // Or skeleton loader
  }

  if (!isAuthenticated) {
    return <Navigate to={APP_ROUTES.LOGIN} state={{ from: location }} replace />;
  }

  if (allowedRoles && allowedRoles.length > 0 && user) {
    if (!allowedRoles.includes(user.role)) {
      return <Navigate to={APP_ROUTES.HOME} replace />;
    }
  }

  return children;
};

export default ProtectedRoute;

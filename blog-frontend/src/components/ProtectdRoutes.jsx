import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";
export const ProtectRoutes = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  console.log(isAuthenticated);

  return isAuthenticated ? <Outlet /> : <Navigate to={"/login"} />;
};

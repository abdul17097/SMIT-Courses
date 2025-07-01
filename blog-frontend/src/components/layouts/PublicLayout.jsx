import { Outlet } from "react-router-dom";
import { Navbar } from "../Navbar";
export const PublicLayout = () => {
  return (
    <main>
      <Navbar />
      {/* children */}
      <Outlet />
    </main>
  );
};

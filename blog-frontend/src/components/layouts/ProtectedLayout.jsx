import { Outlet } from "react-router-dom";
import { Navbar } from "../Navbar";
import { Sidebar } from "../Sidebar";
export const ProtectedLayout = () => {
  return (
    <main className="flex ">
      <Sidebar />
      <div className="w-full py-10 px-10">
        <Outlet />
      </div>
    </main>
  );
};

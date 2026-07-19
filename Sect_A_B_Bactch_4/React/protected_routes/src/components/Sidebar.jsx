import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-[20%] h-full border p-10">
      <div className="flex flex-col gap-5">
        <Link
          className="border p-2 rounded-lg cursor-pointer"
          to={"/dashboard"}
        >
          Dashboard
        </Link>
        <Link className="border p-2 rounded-lg cursor-pointer" to={"/users"}>
          Users
        </Link>
        <Link className="border p-2 rounded-lg cursor-pointer" to={"/products"}>
          Products
        </Link>
        <Link className="border p-2 rounded-lg cursor-pointer" to={"/settings"}>
          Settings
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;

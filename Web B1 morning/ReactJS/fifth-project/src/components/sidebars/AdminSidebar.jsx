import React from "react";
import { Link, useNavigate } from "react-router-dom";

const AdminSidebar = () => {
  const navigate = useNavigate();
  return (
    <div className="w-[20%] p-5 border-r border-gray-300 h-screen flex flex-col justify-between gap-10">
      <h1 className="border-b text-xl font-semibold text-center text-blue-700">
        Admin Dashboard
      </h1>
      <ul className="flex flex-col gap-5">
        <li className="border p-3 rounded-2xl text-center shadow-2xl">
          <Link to="">Dashboard</Link>
        </li>
        <li className="border p-3 rounded-2xl text-center shadow-2xl">
          <Link to="">Profile</Link>
        </li>
        <li className="border p-3 rounded-2xl text-center shadow-2xl">
          <Link to="">Settings</Link>
        </li>
      </ul>
      <button
        onClick={() => {
          localStorage.clear("user");
          navigate("/login");
        }}
        className="border p-3 rounded-2xl text-center shadow-2xl"
        to=""
      >
        Logout
      </button>
    </div>
  );
};

export default AdminSidebar;

import React from "react";

const Sidebar = () => {
  return (
    <div className="w-[20%] border border-r h-screen flex flex-col justify-around p-5">
      <div className="p-4 border rounded-2xl shadow">Logo</div>
      <ul>
        <li className="p-2 hover:bg-gray-200 cursor-pointer">Dashboard</li>
        <li className="p-2 hover:bg-gray-200 cursor-pointer">Profile</li>
        <li className="p-2 hover:bg-gray-200 cursor-pointer">Settings</li>
      </ul>

      <button className="w-full p-2 bg-red-500 text-white hover:bg-red-600">
        Logout
      </button>
    </div>
  );
};

export default Sidebar;

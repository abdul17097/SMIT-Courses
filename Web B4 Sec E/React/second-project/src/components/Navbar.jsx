import { useState } from "react";

const Navbar = ({ setSearch }) => {
  return (
    <div className="w-[100%] border border-r flex justify-around  p-5">
      <div className="p-4 border rounded-2xl shadow">Logo</div>

      <input
        type="text"
        onChange={(e) => setSearch(e.target.value)}
        className="border py-1 px-2"
      />

      <ul className="flex items-center">
        <li className="p-2 hover:bg-gray-200 cursor-pointer">Dashboard</li>
        <li className="p-2 hover:bg-gray-200 cursor-pointer">Profile</li>
        <li className="p-2 hover:bg-gray-200 cursor-pointer">Settings</li>
      </ul>

      <button className=" p-2 bg-red-500 text-white hover:bg-red-600">
        Logout
      </button>
    </div>
  );
};

export default Navbar;

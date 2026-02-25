import React from "react";

const Navbar = () => {
  return (
    <div className="bg-gray-800 text-white p-4 flex items-center justify-between w-full">
      <h1 className="text-xl font-bold">My App</h1>
      <nav className="flex justify-between mt-4">
        <a
          href="#"
          className="block px-4 py-2 rounded hover:bg-gray-700 transition"
        >
          Dashboard
        </a>
        <a
          href="#"
          className="block px-4 py-2 rounded hover:bg-gray-700 transition"
        >
          Profile
        </a>
        <a
          href="#"
          className="block px-4 py-2 rounded hover:bg-gray-700 transition"
        >
          Settings
        </a>
        <a
          href="#"
          className="block px-4 py-2 rounded hover:bg-red-600 transition"
        >
          Logout
        </a>
      </nav>
    </div>
  );
};

export default Navbar;

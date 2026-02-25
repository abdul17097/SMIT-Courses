import React from "react";

const Sidebar = () => {
  return (
    <div className="w-[20%] border border-r h-screen">
      <nav className="space-y-2">
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

export default Sidebar;

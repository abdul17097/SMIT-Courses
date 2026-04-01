import React from "react";
import { Link } from "react-router-dom";
import { CiSettings } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { links } from "../constants/links";
import { CgProfile } from "react-icons/cg";

const Sidebar = () => {
  return (
    <div className="w-[20%] border-r h-screen p-5 flex flex-col justify-between">
      <div className="">
        <div className="flex flex-col items-center pb-4 gap-5">
          <h1 className="text-3xl font-semibold">Logo</h1>
          <div className="border border-gray-400 py-1 px-2 w-full flex items-center gap-2 rounded-2xl">
            <CiSearch className="" />
            <input
              type="search"
              className="focus:outline-none"
              placeholder="search..."
            />
          </div>
        </div>
        <ul className="flex flex-col gap-5 pt-5">
          {links.map((link) => (
            <li key={link.name}>
              <Link to={link.path}>
                <div className="flex items-center gap-2">
                  <link.icon className="text-2xl" />
                  <span>{link.name}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <CgProfile className="text-4xl" />
          <div className="flex flex-col">
            <span className="font-semibold">John Doe</span>
            <span className="text-sm text-gray-500">Admin</span>
          </div>
        </div>
        <Link to="/settings">
          <div className="flex items-center gap-2">
            <CiSettings className="text-2xl" />
            <span>Settings</span>
          </div>
        </Link>
        <button className="bg-red-500 w-full text-white py-2 px-4 rounded-md hover:bg-red-600">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;

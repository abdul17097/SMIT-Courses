import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { links } from "../constants/navlinks";

const Navabar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="flex justify-between items-center py-2 px-2 lg:px-5 border-b">
      {/* Desktop */}
      <div className="flex items-center gap-2">
        <div onClick={() => setIsMenuOpen(true)} className="">
          🍔
        </div>
        <h1>Logo</h1>
      </div>
      <ul className="hidden lg:flex gap-3 font-semibold ">
        {links.map((item) => (
          <li className="py-2 px-4 hover:bg-black hover:text-white rounded hover:shadow">
            <NavLink to={item.link} className="">
              {item.navTitle}
            </NavLink>
          </li>
        ))}
      </ul>
      {/* <ul className="flex gap-3 font-semibold">
        <li className="py-2 px-4 hover:bg-black hover:text-white rounded hover:shadow">
          <NavLink to="/" className="">
            Home
          </NavLink>
        </li>
        <li className="py-2 px-4 hover:bg-black hover:text-white rounded hover:shadow">
          <NavLink to="/about" className="">
            About
          </NavLink>
        </li>
        <li className="py-2 px-4 hover:bg-black hover:text-white rounded hover:shadow">
          <NavLink to="/services" className="">
            Services
          </NavLink>
        </li>
        <li className="py-2 px-4 hover:bg-black hover:text-white rounded hover:shadow">
          <NavLink to="/projects" className="">
            Projects
          </NavLink>
        </li>
      </ul> */}
      <NavLink
        to="/contact"
        className="border py-2 px-4 rounded bg-green-500 text-white hover:bg-white hover:text-green-900"
      >
        Contact Us
      </NavLink>
      {/* Mobile */}
      <ul
        className={`${isMenuOpen ? "flex" : "hidden"} flex-col w-[60%] lg:hidden fixed bg-white border top-0 left-0 h-screen gap-3 font-semibold z-20`}
      >
        {links.map((item) => (
          <li className="py-2 px-4 hover:bg-black hover:text-white rounded hover:shadow">
            <NavLink to={item.link} className="">
              {item.navTitle}
            </NavLink>
          </li>
        ))}
      </ul>
      <div
        onClick={() => setIsMenuOpen(false)}
        className={
          isMenuOpen
            ? "w-full h-screen bg-black opacity-25 fixed top-0 left-0 "
            : "hidden"
        }
      ></div>
    </nav>
  );
};

export default Navabar;

import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <ul className="border-r w-[25%] flex flex-col gap-5 justify-center py-3">
      <li>
        <Link to="/dashboard">Home</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
  );
};

export default Sidebar;

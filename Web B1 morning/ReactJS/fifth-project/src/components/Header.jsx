import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <ul className="border-b flex gap-5 justify-center py-3">
      <li>
        <Link to="/">Home</Link>
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

export default Header;

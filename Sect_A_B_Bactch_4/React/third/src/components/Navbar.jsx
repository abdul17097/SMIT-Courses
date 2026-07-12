import React from "react";
import { Link, useLocation } from "react-router-dom";
import { navLinks } from "../constants/navLinks";

const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <nav className="border py-5 px-10">
      <ul className="flex justify-center gap-10">
        {/* {navLinks.map((item) => {
          return (
            <li>
              <Link to="/">Home</Link>
            </li>
          );
        })} */}
        {navLinks.map(({ link, id, title }) => (
          <li key={id}>
            <Link
              className={`focus:text-blue-900 focus:font-extrabold ${pathname === link && "text-blue-900 font-extrabold"} `}
              to={link}
            >
              {title}
            </Link>
          </li>
        ))}

        {/* <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blogs">Blogs</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/favorite">Favorite</Link>
        </li> */}
      </ul>
    </nav>
  );
};

export default Navbar;

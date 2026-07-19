import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const Navbar = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  console.log(isAuthenticated);

  const navigate = useNavigate();
  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem("isAuthenticated", true);
    navigate("/");
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.setItem("isAuthenticated", false);
    navigate("/home");
  };
  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold">MyApp</h1>

        {/* Navigation Links */}
        <ul className="flex space-x-6 text-lg">
          <li>
            <Link to="/home" className="hover:text-gray-200 transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-gray-200 transition">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-200 transition">
              Contact
            </Link>
          </li>
          {isAuthenticated && (
            <li>
              <Link to="/" className="hover:text-gray-200 transition">
                Dashboard
              </Link>
            </li>
          )}
          {isAuthenticated ? (
            <li>
              <button
                onClick={handleLogout}
                className="bg-white cursor-pointer text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-100 transition"
              >
                Logout
              </button>
            </li>
          ) : (
            <li>
              <button
                onClick={handleLogin}
                className="bg-white cursor-pointer text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-100 transition"
              >
                Login
              </button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

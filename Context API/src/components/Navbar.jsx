import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
export const Navbar = () => {
  const navlinks = [
    {
      url: "/",
      title: "Home",
    },
    {
      url: "/products",
      title: "Products",
    },
    {
      url: "/login",
      title: "Login",
    },
    {
      url: "/signup",
      title: "Sign Up",
    },
    {
      url: "/test-form",
      title: "Test Form",
    },
    {
      url: "/counter",
      title: "Counter",
    },
  ];
  const { toggle, setToggle } = useContext(ThemeContext);
  console.log(toggle);

  return (
    <nav>
      <ul
        className={`flex border justify-center items-center py-5 ${
          toggle ? "bg-white" : "bg-green-600"
        } text-white gap-3`}
      >
        {navlinks.map((item, index) => {
          return (
            <li className="px-2 py-1 rounded-lg hover:bg-green-400 hover:text-green-900">
              <Link to={item.url}>{item.title}</Link>
            </li>
          );
        })}
        <div className="flex gap-2">
          <button
            onClick={() => setToggle((prev) => !prev)}
            className="border px-2 py-1 rounded-lg text-black "
          >
            {toggle ? "light" : "dark"}
          </button>
        </div>
      </ul>
    </nav>
  );
};

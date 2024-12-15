import { Link } from "react-router-dom";
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
  ];
  return (
    <nav>
      <ul className="flex border justify-center items-center py-5 bg-green-600 text-white gap-3">
        {navlinks.map((item, index) => {
          return (
            <li className="px-2 py-1 rounded-lg hover:bg-green-400 hover:text-green-900">
              <Link to={item.url}>{item.title}</Link>
            </li>
          );
        })}
        {/* <li className="px-2 py-1 rounded-lg hover:bg-green-400 hover:text-green-900">
          <Link to="/">Home</Link>
        </li>
        <li className="px-2 py-1 rounded-lg hover:bg-green-400 hover:text-green-900">
          <Link to="/products">Products</Link>
        </li>
        <li>Login</li>
        <li>Signup</li> */}
      </ul>
    </nav>
  );
};

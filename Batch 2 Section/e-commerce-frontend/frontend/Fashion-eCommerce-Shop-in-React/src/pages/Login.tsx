import { Link, useNavigate } from "react-router-dom";
import { Button } from "../components";
import { checkLoginFormData } from "../utils/checkLoginFormData";
import customFetch from "../axios/custom";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { setLoginStatus } from "../features/auth/authSlice";
import { store } from "../store";

const Login = () => {
  const navigate = useNavigate();

  // Initialize state for email and password
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(formData);

    // Check if form data is valid
    const response = await customFetch.post("/users/login", formData);
    console.log(response);

    if (response.data.success) {
      toast.success(response.data.message);
      localStorage.setItem("token", JSON.stringify(response.data.token));
      navigate("/");
      return;
    } else {
      toast.error(
        response.data.message || "An error occurred. Please try again"
      );
      return;
    }
  };

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      toast.success("You are already logged in");
      navigate("/user-profile");
    }
  }, [navigate]);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="max-w-screen-2xl mx-auto pt-24 flex items-center justify-center">
      <form
        onSubmit={handleLogin}
        className="max-w-5xl mx-auto flex flex-col gap-5 max-sm:gap-3 items-center justify-center max-sm:px-5"
      >
        <h2 className="text-5xl text-center mb-5 font-thin max-md:text-4xl max-sm:text-3xl max-[450px]:text-xl max-[450px]:font-normal">
          Welcome Back! Login here:
        </h2>
        <div className="flex flex-col gap-2 w-full">
          <div className="flex flex-col gap-1">
            <label htmlFor="email">Your email</label>
            <input
              type="email"
              className="bg-white border border-black text-xl py-2 px-3 w-full outline-none max-[450px]:text-base"
              placeholder="Enter email address"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="password">Your password</label>
            <input
              type="password"
              className="bg-white border border-black text-xl py-2 px-3 w-full outline-none max-[450px]:text-base"
              placeholder="Enter password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <Button type="submit" text="Login" mode="brown" />
        <Link
          to="/register"
          className="text-xl max-md:text-lg max-[450px]:text-sm"
        >
          Don’t have an account?{" "}
          <span className="text-secondaryBrown">Register now</span>.
        </Link>
      </form>
    </div>
  );
};

export default Login;

import { Link, useNavigate } from "react-router-dom";
import { Button } from "../components";
import customFetch from "../axios/custom";
import toast from "react-hot-toast";
import { useState } from "react";

const Register = () => {
  const navigate = useNavigate();

  // Initialize state with empty values for username, email, and password
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleRegister = async (e) => {
    e.preventDefault();

    // Check if form data is valid
    // if (!checkRegisterFormData(formData)) return;

    // Check if user with this email already exists
    // const users = await customFetch.get("/users");
    // const userExists = users.data.some((user) => user.email === formData.email);
    // if (userExists) {
    //   toast.error("User with this email already exists");
    //   return;
    // }

    // Register user
    const response = await customFetch.post("/users", formData);
    console.log(response);
    if (response.data.success) {
      toast.success("User registered successfully");
      navigate("/login");
    }

    // if (response.success) {
    //   toast.success("User registered successfully");
    //   navigate("/login");
    // } else {
    //   toast.error("An error occurred. Please try again");
    // }
  };

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
        onSubmit={handleRegister}
        className="max-w-5xl mx-auto flex flex-col gap-5 max-sm:gap-3 items-center justify-center max-sm:px-5"
      >
        <h2 className="text-5xl text-center mb-5 font-thin max-md:text-4xl max-sm:text-3xl max-[450px]:text-xl max-[450px]:font-normal">
          Welcome! Register here:
        </h2>
        <div className="flex flex-col gap-2 w-full">
          <div className="flex flex-col gap-1">
            <label htmlFor="username">Your username</label>
            <input
              type="text"
              className="bg-white border border-black text-xl py-2 px-3 w-full outline-none max-[450px]:text-base"
              placeholder="Enter username"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email">Your email</label>
            <input
              type="email"
              className="bg-white border border-black text-xl py-2 px-3 w-full outline-none max-[450px]:text-base"
              placeholder="Enter email address"
              id="email"
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
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <Button type="submit" text="Register" mode="brown" />
        <Link
          to="/login"
          className="text-xl max-md:text-lg max-[450px]:text-sm"
        >
          Already have an account?{" "}
          <span className="text-secondaryBrown">Login now</span>.
        </Link>
      </form>
    </div>
  );
};

export default Register;

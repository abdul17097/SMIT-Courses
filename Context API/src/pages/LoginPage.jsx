import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { userContext } from "../context/TestContext";
export const LoginPage = () => {
  const user = useContext(userContext);
  console.log(user);

  const [formData, setFormData] = useState({
    email: user?.email,
    password: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      email: "",
      password: "",
    });
  };
  return (
    <div className="flex justify-center items-center flex-col">
      <h1 className="my-10">Login Page</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 border border-black rounded-lg p-4 w-[500px]"
      >
        <div className="flex flex-col gap-2 ">
          <label htmlFor="">Email:</label>
          <input
            className="border border-black focus:outline-none rounded-md px-2 py-1"
            type="email"
            value={formData.email}
            onChange={handleChange}
            name="email"
          />
        </div>
        <div className="flex flex-col gap-2 ">
          <label htmlFor="">Password:</label>
          <input
            className="border border-black focus:outline-none rounded-md px-2 py-1"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-400 text-white rounded-md px-2 py-1"
        >
          Login
        </button>
      </form>

      {/* Form for user login */}
      {/* <button onClick={handleLogin}>Login</button> */}
    </div>
  );
};

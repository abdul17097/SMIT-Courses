import { useNavigate } from "react-router-dom";
import { useState } from "react";
export const TestForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  const handleChangeEmail = (e) => {
    setFormData({ ...formData, email: e.target.value });
  };

  const handleChangePassword = (e) => {
    setFormData({ ...formData, password: e.target.value });
  };

  return (
    <div className="flex justify-center items-center flex-col">
      <h1 className="my-10">Test Form Page</h1>
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
            onChange={handleChangeEmail}
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
            onChange={handleChangePassword}
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

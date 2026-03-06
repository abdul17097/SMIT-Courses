import React, { useState } from "react";

const LoginPro = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  let handleSignup = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  let handleEmail = (e) => {
    let { value } = e.target;
    setFormData({ ...formData, email: value });
  };
  let handlePassword = (e) => {
    let { value } = e.target;
    setFormData({ ...formData, password: value });
  };

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <form
        onSubmit={handleSignup}
        className="border rounded-2xl shadow-2xl w-[45%] py-5 px-7 flex flex-col gap-5"
      >
        <h1 className="text-3xl text-center font-bold mb-5">Login Form</h1>
        <div className="flex flex-col gap-2">
          <label className="font-semibold" htmlFor="">
            Email
          </label>
          <input
            className="border p-2 rounded-lg"
            placeholder="test@gmail.com"
            type="email"
            onChange={handleEmail}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-semibold" htmlFor="">
            Password
          </label>
          <input
            className="border p-2 rounded-lg"
            placeholder="xxxxxx"
            type="password"
            onChange={handlePassword}
          />
        </div>
        <button className="border p-2 rounded-lg shadow hover:shadow-2xl my-5 cursor-pointer">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default LoginPro;

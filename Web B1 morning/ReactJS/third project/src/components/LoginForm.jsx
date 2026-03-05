import React, { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let handleSignup = (e) => {
    e.preventDefault();

    console.log("email: ", email);
    console.log("password: ", password);
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
            onChange={(e) => setEmail(e.target.value)}
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
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="border p-2 rounded-lg shadow hover:shadow-2xl my-5 cursor-pointer">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default LoginForm;

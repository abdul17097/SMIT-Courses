import React from "react";
import { useState } from "react";

const FirstForm = () => {
  //   const [formData, setFormData] = useState({
  //     email: "",
  //     password: "",
  //   });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let handleEmail = (event) => {
    setEmail(event.target.value);
  };
  let handlePassword = (event) => {
    setPassword(event.target.value);
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    console.log("Email:" + email + " Password: " + password);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="border flex flex-col p-5 rounded shadow gap-5 w-[30%]"
      >
        <div className="flex flex-col gap-1">
          <label htmlFor="">Email</label>
          <input
            type="email"
            className="border focus:outline-none p-2 rounded shadow"
            placeholder="example@gmailcom"
            onChange={handleEmail}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="">Password</label>
          <input
            type="password"
            className="border focus:outline-none p-2 rounded shadow"
            onChange={handlePassword}
          />
        </div>
        <button className="border focus:outline-none p-2 rounded shadow bg-blue-700 text-white cursor-pointer">
          Login
        </button>
      </form>
    </div>
  );
};

export default FirstForm;

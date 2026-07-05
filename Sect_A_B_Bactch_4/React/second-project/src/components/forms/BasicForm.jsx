import React, { useState } from "react";

const BasicForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      console.log({ email, password });
    }, 2000);
  };

  return (
    <div className="w-[30vw] border rounded-2xl p-10 m-auto ">
      <h1 className="text-4xl font-bold text-center">Login Form</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label>Email:</label>
          <input
            className="border rounded-lg outline-none px-3 py-2"
            type="text"
            onChange={handleEmail}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label>Password:</label>
          <input
            onChange={handlePassword}
            className="border rounded-lg outline-none px-3 py-2"
            type="password"
          />
        </div>
        <button className="border rounded-lg outline-none px-3 py-2 cursor-pointer hover:bg-blue-900 hover:text-white">
          {isLoading ? "Login..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default BasicForm;

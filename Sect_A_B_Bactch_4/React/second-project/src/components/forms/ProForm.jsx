import React, { useState } from "react";

const ProForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      console.log({ email, password });
    }, 2000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name == "email") {
      setEmail(value);
    } else {
      setPassword(value);
    }
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
            onChange={handleChange}
            value={email}
            name="email"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label>Password:</label>
          <input
            onChange={handleChange}
            value={password}
            className="border rounded-lg outline-none px-3 py-2"
            type="password"
            name="password"
          />
        </div>
        <button className="border rounded-lg outline-none px-3 py-2 cursor-pointer hover:bg-blue-900 hover:text-white">
          {isLoading ? "Login..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default ProForm;

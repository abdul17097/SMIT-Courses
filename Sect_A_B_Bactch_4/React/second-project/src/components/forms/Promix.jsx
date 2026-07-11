import React, { useState } from "react";

const Promix = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    gender: "",
    profileImage: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      console.log(formData);
    }, 2000);
  };

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <div className="w-[30vw] border rounded-2xl p-10 m-auto ">
      <h1 className="text-4xl font-bold text-center">Registration Form</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label>Username:</label>
          <input
            className="border rounded-lg outline-none px-3 py-2"
            type="text"
            onChange={handleChange}
            value={formData.username}
            name="username"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label>Email:</label>
          <input
            className="border rounded-lg outline-none px-3 py-2"
            type="text"
            onChange={handleChange}
            value={formData.email}
            name="email"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label>Password:</label>
          <input
            onChange={handleChange}
            value={formData.password}
            className="border rounded-lg outline-none px-3 py-2"
            type="password"
            name="password"
          />
        </div>
        <div className="flex  gap-2">
          <label>Gender:</label>
          <input
            onChange={handleChange}
            value={formData.password}
            className="border rounded-lg outline-none px-3 py-2"
            type="radio"
            name="gender"
            value="male"
          />{" "}
          Male
          <input
            onChange={handleChange}
            value={formData.password}
            className="border rounded-lg outline-none px-3 py-2"
            type="radio"
            name="gender"
            value="female"
          />{" "}
          Female
        </div>
        <div className="flex flex-col gap-2">
          <label>Profile Image:</label>
          <input
            onChange={handleChange}
            value={formData.profileimage}
            className="border rounded-lg outline-none px-3 py-2"
            type="file"
            name="profileImage"
          />
        </div>

        <button className="border rounded-lg outline-none px-3 py-2 cursor-pointer hover:bg-blue-900 hover:text-white">
          {isLoading ? "Login..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Promix;

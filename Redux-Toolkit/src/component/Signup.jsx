import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../slices/userSlice";
export const Signup = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userInfo);
  console.log(user.userInfo);

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser(userData));
    console.log(userData);
  };

  return (
    <div className="flex flex-col justify-center mt-20">
      <form
        onSubmit={handleSubmit}
        className=" w-[30rem] flex flex-col p-5 rounded-lg border-black bg-cyan-100 gap-3"
      >
        <h1>Signup Page</h1>
        <div className="flex flex-col gap-2">
          <label htmlFor="">Name:</label>
          <input
            name="name"
            onChange={handleChange}
            type="text"
            value={userData.name}
            className="focus:outline-none border border-black px-2 py-1 rounded-lg "
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="">Email:</label>
          <input
            name="email"
            onChange={handleChange}
            type="email"
            value={userData.email}
            className="focus:outline-none border border-black px-2 py-1 rounded-lg "
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="">Password:</label>
          <input
            name="password"
            onChange={handleChange}
            type="password"
            value={userData.password}
            className="focus:outline-none border border-black px-2 py-1 rounded-lg "
          />
        </div>
        <button className="border p-2 rounded-lg">Signup</button>
      </form>
      <div className="border border-black">
        {user.userInfo.map((item) => {
          return <h1>{item.name}</h1>;
        })}
      </div>
    </div>
  );
};

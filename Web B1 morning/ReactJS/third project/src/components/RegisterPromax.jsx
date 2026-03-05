import React, { useState } from "react";

const RegisterPromax = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    dob: "",
  });

  let handleSignup = (e) => {
    e.preventDefault();

    if (formData.name.length > 0) {
      console.log(formData);
    }
  };

  let handleChange = (e) => {
    let { value, name } = e.target;
    // console.log(name, " :", value);
    // if(e.target.name === "username"){}
    // else if( e.target.name === "email")
    // const {username,email} = formData;
    setFormData({ ...formData, [name]: value });
  };
  console.log(formData);

  //   let handleUsername = (e) => {
  //     let { value } = e.target;
  //     setFormData({ ...formData, username: value });
  //   };
  //   let handleEmail = (e) => {
  //     let { value } = e.target;
  //     setFormData({ ...formData, email: value });
  //   };
  //   let handlePassword = (e) => {
  //     let { value } = e.target;
  //     setFormData({ ...formData, password: value });
  //   };
  //   let handleDob = (e) => {
  //     let { value } = e.target;
  //     setFormData({ ...formData, dob: value });
  //   };

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <form
        onSubmit={handleSignup}
        className="border rounded-2xl shadow-2xl w-[45%] py-5 px-7 flex flex-col gap-5"
      >
        <h1 className="text-3xl text-center font-bold mb-5">Login Form</h1>
        <div className="flex flex-col gap-2">
          <label className="font-semibold" htmlFor="">
            Username
          </label>
          <input
            className="border p-2 rounded-lg"
            placeholder="Username"
            type="text"
            name="username"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-semibold" htmlFor="">
            Email
          </label>
          <input
            className="border p-2 rounded-lg"
            placeholder="test@gmail.com"
            type="email"
            name="email"
            onChange={handleChange}
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
            name="password"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-semibold" htmlFor="">
            Date of Birth
          </label>
          <input
            className="border p-2 rounded-lg"
            placeholder="test@gmail.com"
            type="date"
            name="dob"
            onChange={handleChange}
          />
        </div>

        <button className="border p-2 rounded-lg shadow hover:shadow-2xl my-5 cursor-pointer">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default RegisterPromax;

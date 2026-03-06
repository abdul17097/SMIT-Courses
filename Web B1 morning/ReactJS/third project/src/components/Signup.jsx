import React, { useState } from "react";

const Signup = () => {
  let initialFormData = {
    username: "",
    email: "",
    password: "",
  };
  const [formData, setFormData] = useState(initialFormData);
  const [formErrors, setFormErrors] = useState(initialFormData);

  let handleSignup = (e) => {
    e.preventDefault();
    // console.log(formData);
    // setFormData(initialFormData);
    // when click button then show error if any field is empty

    if (formData.username.length === 0) {
      setFormErrors({ ...formErrors, username: "Username is required" });
    } else if (formData.username.length < 5) {
      setFormErrors({ ...formErrors, username: "At least 5 char" });
    } else {
      setFormErrors({ ...formErrors, username: "" });
    }
  };

  let handleChange = (e) => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (name === "username") {
      if (value.length === 0) {
        setFormErrors({ ...formErrors, username: "Username is required" });
      } else if (value.length < 5) {
        setFormErrors({ ...formErrors, username: "At least 5 char" });
      } else {
        setFormErrors({ ...formErrors, username: "" });
      }
    }

    // if (name === "email") {
    //   if (value.length === 0) {
    //     setFormErrors({ ...formErrors, email: "Email is required" });
    //   } else {
    //     setFormErrors({ ...formErrors, email: "" });
    //   }
    // }
    // if (name === "password") {
    //   if (value.length === 0) {
    //     setFormErrors({ ...formErrors, password: "Password is required" });
    //   } else {
    //     setFormErrors({ ...formErrors, password: "" });
    //   }
    // }
  };

  console.log(formErrors.username);

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <form
        onSubmit={handleSignup}
        className="border rounded-2xl shadow-2xl w-[45%] py-5 px-7 flex flex-col gap-5"
      >
        <h1 className="text-3xl text-center font-bold mb-5">Signup Form</h1>
        <div className="flex flex-col gap-2">
          <label className="font-semibold" htmlFor="">
            Username*
          </label>
          <input
            className="border p-2 rounded-lg"
            placeholder="your name"
            type="text"
            onChange={handleChange}
            name="username"
            value={formData.username}
            // value={""}
          />
          <p className="text-red-500">
            {formErrors.username && formErrors.username}
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-semibold" htmlFor="">
            Email*
          </label>
          <input
            className="border p-2 rounded-lg"
            placeholder="test@gmail.com"
            type="email"
            onChange={handleChange}
            name="email"
            value={formData.email}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-semibold" htmlFor="">
            Password*
          </label>
          <input
            className="border p-2 rounded-lg"
            placeholder="xxxxxx"
            type="password"
            onChange={handleChange}
            name="password"
            value={formData.password}
          />
        </div>
        <button className="border p-2 rounded-lg shadow hover:shadow-2xl my-5 cursor-pointer">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Signup;

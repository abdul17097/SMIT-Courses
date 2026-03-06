import React, { useState } from "react";

const initialFormData = {
  username: "",
  email: "",
  password: "",
};

const initialErrors = {
  username: "",
  email: "",
  password: "",
};

const SignupPro = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [formErrors, setFormErrors] = useState(initialErrors);

  // validation function
  const validate = (data) => {
    let errors = {};

    if (!data.username) {
      errors.username = "Username is required";
    } else if (data.username.length < 5) {
      errors.username = "Username must be at least 5 characters";
    }

    if (!data.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = "Invalid email format";
    }

    if (!data.password) {
      errors.password = "Password is required";
    } else if (data.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }

    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    const updatedForm = {
      ...formData,
      [name]: value,
    };

    setFormData(updatedForm);

    // live validation
    const errors = validate(updatedForm);
    setFormErrors(errors);
  };

  const handleSignup = (e) => {
    e.preventDefault();

    const errors = validate(formData);
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      console.log("Form Submitted:", formData);

      setFormData(initialFormData);
    }
  };

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <form
        onSubmit={handleSignup}
        className="border rounded-2xl shadow-2xl w-[45%] py-5 px-7 flex flex-col gap-5"
      >
        <h1 className="text-3xl text-center font-bold mb-5">Signup Form</h1>

        {/* Username */}
        <div className="flex flex-col gap-2">
          <label className="font-semibold">Username*</label>
          <input
            className="border p-2 rounded-lg"
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="your name"
          />
          {formErrors.username && (
            <p className="text-red-500">{formErrors.username}</p>
          )}
        </div>

        {/* Email */}
        <div className="flex flex-col gap-2">
          <label className="font-semibold">Email*</label>
          <input
            className="border p-2 rounded-lg"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="test@gmail.com"
          />
          {formErrors.email && (
            <p className="text-red-500">{formErrors.email}</p>
          )}
        </div>

        {/* Password */}
        <div className="flex flex-col gap-2">
          <label className="font-semibold">Password*</label>
          <input
            className="border p-2 rounded-lg"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="xxxxxx"
          />
          {formErrors.password && (
            <p className="text-red-500">{formErrors.password}</p>
          )}
        </div>

        <button className="border p-2 rounded-lg shadow hover:shadow-2xl my-5 cursor-pointer">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignupPro;

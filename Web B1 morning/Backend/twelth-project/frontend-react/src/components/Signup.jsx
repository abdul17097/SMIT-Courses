import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toast";

export default function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    check: false,
  });
  const navigate = useNavigate();

  const [errors, setErrors] = useState({});

  // VALIDATION
  const validate = (name, value) => {
    let error = "";

    if (name === "name") {
      if (!value) error = "Name is required";
      else if (value.length < 5) error = "Min 3 characters";
    }

    if (name === "email") {
      if (!value) error = "Email is required";
      else if (!/\S+@\S+\.\S+/.test(value)) error = "Enter valid email";
    }

    if (name === "password") {
      if (!value) error = "Password required";
      else if (value.length < 6) error = "Min 6 characters";
    }

    if (name === "confirmPassword") {
      if (value !== form.password) error = "Passwords do not match";
    }

    if (name === "check") {
      if (!value) error = "You must agree";
    }

    return error;
  };

  // REAL TIME
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    const val = type === "checkbox" ? checked : value;

    setForm({ ...form, [name]: val });

    const error = validate(name, val);

    setErrors({ ...errors, [name]: error });
  };

  // SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();

    let newErrors = {};

    Object.keys(form).forEach((key) => {
      newErrors[key] = validate(key, form[key]);
    });

    setErrors(newErrors);

    const response = await fetch("http://localhost:5000/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await response.json();
    console.log(data);

    if (response.success) {
      toast.success("Registration successful ✅");
      navigate("/login");
    } else {
      toast.error(data.message || "Registration failed ❌");
    }
    // const hasError = Object.values(newErrors).some((e) => e);

    // if (!hasError) {
    //   alert("Registration Successful ✅");
    // }
  };

  // DISABLE BUTTON
  const isDisabled =
    Object.values(errors).some((e) => e) ||
    !form.name ||
    !form.email ||
    !form.password ||
    !form.confirmPassword ||
    !form.check;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-sm w-[380px] border border-gray-200"
      >
        <h2 className="text-xl font-semibold text-gray-800 mb-6">
          Create your account
        </h2>

        {/* NAME */}
        <div className="mb-4">
          <label className="block text-sm text-gray-600 mb-1">Full Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className={`w-full p-2.5 border rounded-md text-sm outline-none transition ${
              errors.name
                ? "border-red-500 focus:ring-1 focus:ring-red-500"
                : "border-gray-300 focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            }`}
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name}</p>
          )}
        </div>

        {/* EMAIL */}
        <div className="mb-4">
          <label className="block text-sm text-gray-600 mb-1">
            Email address
          </label>
          <input
            type="text"
            name="email"
            value={form.email}
            onChange={handleChange}
            className={`w-full p-2.5 border rounded-md text-sm outline-none transition ${
              errors.email
                ? "border-red-500 focus:ring-1 focus:ring-red-500"
                : "border-gray-300 focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
          )}
        </div>

        {/* PASSWORD */}
        <div className="mb-4">
          <label className="block text-sm text-gray-600 mb-1">Password</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            className={`w-full p-2.5 border rounded-md text-sm outline-none transition ${
              errors.password
                ? "border-red-500 focus:ring-1 focus:ring-red-500"
                : "border-gray-300 focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            }`}
          />
          {errors.password && (
            <p className="text-red-500 text-xs mt-1">{errors.password}</p>
          )}
        </div>

        {/* CONFIRM PASSWORD */}
        <div className="mb-4">
          <label className="block text-sm text-gray-600 mb-1">
            Confirm password
          </label>
          <input
            type="password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            className={`w-full p-2.5 border rounded-md text-sm outline-none transition ${
              errors.confirmPassword
                ? "border-red-500 focus:ring-1 focus:ring-red-500"
                : "border-gray-300 focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            }`}
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-xs mt-1">
              {errors.confirmPassword}
            </p>
          )}
        </div>

        {/* CHECKBOX */}
        <div className="flex items-start mb-5">
          <input
            type="checkbox"
            name="check"
            onChange={handleChange}
            className="mt-1 mr-2 accent-blue-600"
          />
          <label className="text-sm text-gray-600">
            I agree to the Terms and Conditions
          </label>
        </div>
        {errors.check && (
          <p className="text-red-500 text-xs mb-3">{errors.check}</p>
        )}

        {/* BUTTON */}
        <button
          disabled={isDisabled}
          className={`w-full py-2.5 rounded-md text-sm font-medium transition ${
            isDisabled
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          Create account
        </button>
      </form>
    </div>
  );
}

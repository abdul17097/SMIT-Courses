import React, { useState } from "react";
import { supabase } from "../supabase/supabase";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  // Handle Input
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Validation
  const validate = () => {
    let newErrors = {};

    if (formData.username.trim().length < 3) {
      newErrors.username = "Username must be at least 3 characters";
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validate()) {
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            name: formData.username,
          },
        },
      });

      if (error) {
        alert(error.message);
      } else {
        console.log(data);

        alert("user registered successfully!");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-500 via-purple-600 to-indigo-700 p-4">
      <div className="w-full max-w-md bg-white/20 backdrop-blur-lg border border-white/30 rounded-3xl shadow-2xl p-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white">Create Account 🚀</h1>

          <p className="text-white/80 mt-2">Sign up to get started</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Username */}
          <div>
            <label className="block text-white mb-2 font-medium">
              Username
            </label>

            <input
              type="text"
              name="username"
              placeholder="Enter username"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-white/30 text-white placeholder-white/70 border border-white/40 outline-none focus:ring-2 focus:ring-white"
            />

            {errors.username && (
              <p className="text-red-200 text-sm mt-1">{errors.username}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-white mb-2 font-medium">Email</label>

            <input
              type="email"
              name="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-white/30 text-white placeholder-white/70 border border-white/40 outline-none focus:ring-2 focus:ring-white"
            />

            {errors.email && (
              <p className="text-red-200 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-white mb-2 font-medium">
              Password
            </label>

            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-white/30 text-white placeholder-white/70 border border-white/40 outline-none focus:ring-2 focus:ring-white"
            />

            {errors.password && (
              <p className="text-red-200 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          {/* Signup Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-white text-purple-700 font-bold hover:scale-105 transition duration-300 shadow-lg"
          >
            Sign Up
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3">
            <div className="flex-1 h-[1px] bg-white/40"></div>
            <span className="text-white text-sm">OR</span>
            <div className="flex-1 h-[1px] bg-white/40"></div>
          </div>

          {/* Google Signup */}
          <button
            type="button"
            className="w-full flex items-center justify-center gap-3 py-3 rounded-xl bg-white text-gray-700 font-semibold hover:bg-gray-100 transition"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/281/281764.png"
              alt="google"
              className="w-5 h-5"
            />
            Continue with Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;

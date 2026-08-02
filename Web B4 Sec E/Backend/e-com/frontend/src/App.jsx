import { Mail, Lock } from "lucide-react";
import { useState } from "react";
import { toast } from "react-toastify";

function App() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
      credentials: "include", // Include cookies in the request
    });

    const data = await response.json();
    console.log("Response Data:", data);
    if (data.success) {
      toast.success(data.message || "Login successful!");
    } else {
      toast.error(data.message || "Login failed!");
    }

    // Here you can add your login logic, e.g., API call
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-blue-500 to-cyan-400 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 mx-auto rounded-full bg-indigo-100 flex items-center justify-center mb-4">
            <Lock className="text-indigo-600" size={30} />
          </div>

          <h1 className="text-3xl font-bold text-gray-800">Welcome Back</h1>
          <p className="text-gray-500 mt-2">
            Sign in to continue to your account
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Email
            </label>

            <div className="flex items-center border rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-indigo-500">
              <Mail className="text-gray-400 mr-3" size={20} />
              <input
                onChange={handleChange}
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full outline-none"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Password
            </label>

            <div className="flex items-center border rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-indigo-500">
              <Lock className="text-gray-400 mr-3" size={20} />
              <input
                name="password"
                onChange={handleChange}
                type="password"
                placeholder="Enter your password"
                className="w-full outline-none"
              />
            </div>
          </div>

          {/* Remember */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="accent-indigo-600"
                onChange={handleChange}
                name="remember"
              />
              Remember me
            </label>

            <a
              href="#"
              className="text-indigo-600 hover:text-indigo-800 font-medium"
            >
              Forgot Password?
            </a>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-semibold transition duration-300 shadow-lg hover:shadow-xl"
          >
            Login
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-gray-500 mt-8">
          Don't have an account?{" "}
          <a href="#" className="text-indigo-600 font-semibold hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;

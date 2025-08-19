import { useState } from "react";

const inputStyle = (hasError) =>
  `w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ${
    hasError ? "border-red-500" : ""
  }`;
const errorStyle = "text-red-500 text-sm mt-2";

// Register Form Component
export const RegisterForm = ({ onToggle }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Validate the form for registration
  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid.";
    }
    if (!formData.password) {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long.";
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Register form is valid:", formData);

      //   --- API INTEGRATION POINT ---
      //   This is where you would integrate your registration API call.
      try {
        const response = await fetch("/api/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
        const data = await response.json();
        console.log("API response:", data);
        // Handle success (e.g., redirect user)
      } catch (err) {
        console.error("API call failed:", err);
        // Handle error
      }

      setFormData({ email: "", password: "", confirmPassword: "" });
      setErrors({});
    }
  };

  return (
    <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-2xl transition-all duration-500 ease-in-out transform hover:scale-105">
      <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-6">
        Register
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-semibold mb-2"
            htmlFor="registerEmail"
          >
            Email Address
          </label>
          <input
            type="email"
            id="registerEmail"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={inputStyle(errors.email)}
            placeholder="you@example.com"
          />
          {errors.email && <p className={errorStyle}>{errors.email}</p>}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-semibold mb-2"
            htmlFor="registerPassword"
          >
            Password
          </label>
          <input
            type="password"
            id="registerPassword"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className={inputStyle(errors.password)}
            placeholder="••••••••"
          />
          {errors.password && <p className={errorStyle}>{errors.password}</p>}
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 font-semibold mb-2"
            htmlFor="confirmPassword"
          >
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className={inputStyle(errors.confirmPassword)}
            placeholder="••••••••"
          />
          {errors.confirmPassword && (
            <p className={errorStyle}>{errors.confirmPassword}</p>
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-bold p-4 rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-300 transform hover:scale-105"
        >
          Register
        </button>
      </form>
      <p className="text-center text-gray-600 mt-6">
        Already have an account?{" "}
        <button
          onClick={onToggle}
          className="text-blue-600 font-semibold hover:underline focus:outline-none"
        >
          Login
        </button>
      </p>
    </div>
  );
};

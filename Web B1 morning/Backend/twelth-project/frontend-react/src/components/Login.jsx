import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toast";
import { api } from "../utils/axiosConfig";

export default function Login({ onLogin }) {
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const validate = (name, value) => {
    if (name === "email") {
      if (!value) return "Email is required";
      if (!/\S+@\S+\.\S+/.test(value)) return "Enter a valid email";
    }

    if (name === "password") {
      if (!value) return "Password is required";
      if (value.length < 2) return "Min 6 characters";
    }

    return "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setErrors({ ...errors, [name]: validate(name, value) });
    setServerError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {
      email: validate("email", form.email),
      password: validate("password", form.password),
    };
    setErrors(newErrors);

    const hasError = Object.values(newErrors).some(Boolean);
    if (hasError) return;

    // const response = await fetch("http://localhost:5000/auth/login", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(form),
    // });

    // const data = await response.json();

    const { data } = await api.post("/auth/login", {
      email: form.email,
      password: form.password,
    });
    console.log(data);

    if (data.success) {
      localStorage.setItem("token", data.token);
      toast.success("Login successful ✅");
      navigate("/dashboard");
    } else {
      toast.error(data.message || "Login failed ❌");
    }

    setIsSubmitting(true);
    setServerError("");

    try {
      const response = await fetch("http://localhost:5000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      localStorage.setItem("token", data.token);
      onLogin?.();
    } catch (error) {
      setServerError(error.message || "Unable to login");
    } finally {
      setIsSubmitting(false);
    }
  };

  const isDisabled =
    !form.email || !form.password || Object.values(errors).some(Boolean);

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-10">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md rounded-3xl bg-white p-8 shadow-lg shadow-slate-200"
      >
        <h2 className="mb-3 text-2xl font-semibold text-slate-900">
          Login to your account
        </h2>
        <p className="mb-6 text-sm text-slate-500">
          Use your email and password to sign in.
        </p>

        <div className="mb-4">
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Email address
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition focus:ring-2 focus:ring-blue-200 ${
              errors.email ? "border-red-400" : "border-slate-200"
            }`}
          />
          {errors.email && (
            <p className="mt-2 text-xs text-red-500">{errors.email}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition focus:ring-2 focus:ring-blue-200 ${
              errors.password ? "border-red-400" : "border-slate-200"
            }`}
          />
          {errors.password && (
            <p className="mt-2 text-xs text-red-500">{errors.password}</p>
          )}
        </div>

        {serverError && (
          <p className="mb-4 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
            {serverError}
          </p>
        )}

        <button
          type="submit"
          disabled={isDisabled || isSubmitting}
          className={`w-full rounded-xl px-4 py-3 text-sm font-semibold text-white transition ${
            isDisabled || isSubmitting
              ? "bg-slate-300 text-slate-600 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {isSubmitting ? "Signing in..." : "Login"}
        </button>
      </form>
    </div>
  );
}

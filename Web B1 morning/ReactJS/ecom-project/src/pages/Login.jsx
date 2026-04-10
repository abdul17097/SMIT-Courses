import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/slices/authSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector(state => state.auth)

  useEffect(() => {
    if (auth.email && auth.password) {
      navigate("/");
    }
  }, [auth])

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login(formData))
    navigate("/");
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-4">
      <div className="relative w-full max-w-md">
        {/* Decorative Blobs */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>

        {/* Login Card */}
        <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-2xl transition-all duration-300 hover:shadow-cyan-500/20">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-2 tracking-tight">Welcome Back</h1>
            <p className="text-purple-200/80">Please enter your details to sign in</p>
          </div>

          <form className="space-y-6" onSubmit={handleLogin}>
            <div className="group">
              <label className="block text-sm font-medium text-purple-100 mb-2 transition-colors group-focus-within:text-pink-400">
                Email Address
              </label>
              <input
                name="email"
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                type="email"
                value={formData.email}
                placeholder="name@company.com"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 outline-none transition-all duration-300 focus:border-pink-500/50 focus:bg-white/10 focus:ring-4 focus:ring-pink-500/10"
              />
            </div>

            <div className="group">
              <label className="block text-sm font-medium text-purple-100 mb-2 transition-colors group-focus-within:text-indigo-400">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                placeholder="••••••••"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 outline-none transition-all duration-300 focus:border-indigo-500/50 focus:bg-white/10 focus:ring-4 focus:ring-indigo-500/10"
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center text-purple-200/70 hover:text-white cursor-pointer transition-colors">
                <input type="checkbox" className="mr-2 rounded border-white/10 bg-white/5 accent-pink-500" />
                Remember me
              </label>
              <a href="#" className="text-pink-400 hover:text-pink-300 transition-colors font-medium">
                Forgot password?
              </a>
            </div>

            <button className="w-full py-3 px-4 bg-gradient-to-r from-pink-500 to-indigo-600 hover:from-pink-600 hover:to-indigo-700 text-white font-bold rounded-xl shadow-lg transform transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] focus:ring-4 focus:ring-pink-500/30">
              Sign In
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-white/10 text-center">
            <p className="text-purple-200/60 text-sm">
              Don't have an account?{" "}
              <a href="#" className="text-white font-semibold hover:underline">
                Register now
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

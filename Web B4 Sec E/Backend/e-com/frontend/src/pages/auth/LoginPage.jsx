import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Mail, Lock, Eye, EyeOff, Sparkles, ArrowRight } from "lucide-react";
import { toast } from "react-toastify";
import Container from "../../components/common/Container";
import Button from "../../components/common/Button";
import Input from "../../components/common/Input";
import { APP_ROUTES } from "../../constants/appRoutes";
import { loginAsync, clearAuthError } from "../../store/slices/authSlice";

export const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const { loading, error } = useSelector((state) => state.auth);

  const fromPath = location.state?.from?.pathname || APP_ROUTES.HOME;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: "" }));
    }
    if (error) {
      dispatch(clearAuthError());
    }
  };

  const validate = () => {
    const errors = {};
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }

    if (!formData.password) {
      errors.password = "Password is required";
    }
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    const resultAction = await dispatch(loginAsync(formData));

    if (loginAsync.fulfilled.match(resultAction)) {
      toast.success(resultAction.payload.message || "Welcome back! Login successful.");
      navigate(fromPath, { replace: true });
    } else if (loginAsync.rejected.match(resultAction)) {
      toast.error(resultAction.payload || "Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="py-12 md:py-20 bg-slate-50/50 flex items-center justify-center">
      <Container>
        <div className="mx-auto max-w-md">
          {/* Main Form Card */}
          <div className="rounded-3xl bg-white p-8 sm:p-10 shadow-xl border border-slate-100">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 mb-4 shadow-sm">
                <Sparkles size={28} />
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Welcome Back
              </h1>
              <p className="text-sm text-slate-500 mt-2">
                Sign in to manage your cart, orders, and account.
              </p>
            </div>

            {/* General Server Error Alert */}
            {error && (
              <div className="mb-6 rounded-2xl bg-rose-50 border border-rose-100 p-4 text-xs font-semibold text-rose-700">
                {error}
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <Input
                label="Email Address"
                name="email"
                type="email"
                placeholder="name@example.com"
                value={formData.email}
                onChange={handleChange}
                leftIcon={Mail}
                error={formErrors.email}
                autoComplete="email"
              />

              <div>
                <Input
                  label="Password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  leftIcon={Lock}
                  rightIcon={showPassword ? EyeOff : Eye}
                  error={formErrors.password}
                  autoComplete="current-password"
                />
                <div className="mt-2 flex justify-end">
                  <span className="text-xs font-semibold text-indigo-600 hover:text-indigo-700 cursor-pointer">
                    Forgot password?
                  </span>
                </div>
              </div>

              <Button
                type="submit"
                variant="primary"
                fullWidth
                size="lg"
                isLoading={loading}
                rightIcon={ArrowRight}
                className="mt-2"
              >
                Sign In
              </Button>
            </form>

            {/* Footer */}
            <div className="mt-8 pt-6 border-t border-slate-100 text-center">
              <p className="text-xs text-slate-500">
                Don't have an account yet?{" "}
                <Link
                  to={APP_ROUTES.SIGNUP}
                  className="font-bold text-indigo-600 hover:text-indigo-700 hover:underline"
                >
                  Create an account
                </Link>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default LoginPage;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  Store,
  Sparkles,
  ArrowRight,
  ShoppingBag,
} from "lucide-react";
import { toast } from "react-toastify";
import Container from "../../components/common/Container";
import Button from "../../components/common/Button";
import Input from "../../components/common/Input";
import { APP_ROUTES } from "../../constants/appRoutes";
import { signupAsync, clearAuthError } from "../../store/slices/authSlice";

export const SignupPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    role: "BUYER",
    shopName: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.auth);

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

  const handleRoleSelect = (selectedRole) => {
    setFormData((prev) => ({
      ...prev,
      role: selectedRole,
      shopName: selectedRole === "BUYER" ? "" : prev.shopName,
    }));
    if (formErrors.role || formErrors.shopName) {
      setFormErrors((prev) => ({ ...prev, role: "", shopName: "" }));
    }
  };

  const validate = () => {
    const errors = {};
    if (!formData.username.trim()) {
      errors.username = "Username is required";
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }

    if (!formData.password) {
      errors.password = "Password is required";
    } else if (formData.password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
    }

    if (formData.role === "SELLER" && !formData.shopName.trim()) {
      errors.shopName = "Shop name is required for seller registration";
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

    const payload = {
      username: formData.username.trim(),
      email: formData.email.trim(),
      password: formData.password,
      role: formData.role,
      shopName: formData.role === "SELLER" ? formData.shopName.trim() : undefined,
      authProvider: "LOCAL",
    };

    const resultAction = await dispatch(signupAsync(payload));

    if (signupAsync.fulfilled.match(resultAction)) {
      toast.success(resultAction.payload.message || "Account registered successfully!");
      navigate(APP_ROUTES.HOME);
    } else if (signupAsync.rejected.match(resultAction)) {
      toast.error(resultAction.payload || "Registration failed. Please try again.");
    }
  };

  return (
    <div className="py-12 md:py-16 bg-slate-50/50 flex items-center justify-center">
      <Container>
        <div className="mx-auto max-w-lg">
          {/* Main Form Card */}
          <div className="rounded-3xl bg-white p-8 sm:p-10 shadow-xl border border-slate-100">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 mb-4 shadow-sm">
                <Sparkles size={28} />
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Create Your Account
              </h1>
              <p className="text-sm text-slate-500 mt-2">
                Join AuraStore to start shopping or selling products.
              </p>
            </div>

            {/* General Server Error Alert */}
            {error && (
              <div className="mb-6 rounded-2xl bg-rose-50 border border-rose-100 p-4 text-xs font-semibold text-rose-700">
                {error}
              </div>
            )}

            {/* Role Selection Toggle */}
            <div className="mb-6">
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
                Select Account Type
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => handleRoleSelect("BUYER")}
                  className={`flex flex-col items-center justify-center p-3.5 rounded-2xl border-2 transition-all cursor-pointer ${
                    formData.role === "BUYER"
                      ? "border-indigo-600 bg-indigo-50/50 text-indigo-700 shadow-sm"
                      : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
                  }`}
                >
                  <ShoppingBag size={22} className="mb-1" />
                  <span className="text-xs font-bold">Shopper / Buyer</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleRoleSelect("SELLER")}
                  className={`flex flex-col items-center justify-center p-3.5 rounded-2xl border-2 transition-all cursor-pointer ${
                    formData.role === "SELLER"
                      ? "border-indigo-600 bg-indigo-50/50 text-indigo-700 shadow-sm"
                      : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
                  }`}
                >
                  <Store size={22} className="mb-1" />
                  <span className="text-xs font-bold">Seller Merchant</span>
                </button>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                label="Full Username"
                name="username"
                type="text"
                placeholder="e.g. johndoe"
                value={formData.username}
                onChange={handleChange}
                leftIcon={User}
                error={formErrors.username}
                autoComplete="username"
              />

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

              {formData.role === "SELLER" && (
                <Input
                  label="Shop Name"
                  name="shopName"
                  type="text"
                  placeholder="e.g. John's Tech Store"
                  value={formData.shopName}
                  onChange={handleChange}
                  leftIcon={Store}
                  error={formErrors.shopName}
                  helperText="Required for merchant accounts to display on product listings."
                />
              )}

              <Input
                label="Password"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="At least 6 characters"
                value={formData.password}
                onChange={handleChange}
                leftIcon={Lock}
                rightIcon={showPassword ? EyeOff : Eye}
                error={formErrors.password}
                autoComplete="new-password"
              />

              <Button
                type="submit"
                variant="primary"
                fullWidth
                size="lg"
                isLoading={loading}
                rightIcon={ArrowRight}
                className="mt-4"
              >
                Register Account
              </Button>
            </form>

            {/* Footer */}
            <div className="mt-8 pt-6 border-t border-slate-100 text-center">
              <p className="text-xs text-slate-500">
                Already have an account?{" "}
                <Link
                  to={APP_ROUTES.LOGIN}
                  className="font-bold text-indigo-600 hover:text-indigo-700 hover:underline"
                >
                  Sign In instead
                </Link>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SignupPage;

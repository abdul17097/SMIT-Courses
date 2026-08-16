import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  User,
  Mail,
  Lock,
  Store,
  Shield,
  Package,
  LogOut,
  Save,
  Key,
  CheckCircle,
} from "lucide-react";
import { toast } from "react-toastify";
import Container from "../../components/common/Container";
import Button from "../../components/common/Button";
import Input from "../../components/common/Input";
import Badge from "../../components/common/Badge";
import { APP_ROUTES } from "../../constants/appRoutes";
import { setUser, logoutAsync } from "../../store/slices/authSlice";
import userService from "../../services/userService";

export const ProfilePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);

  const [activeTab, setActiveTab] = useState("overview"); // 'overview' | 'edit' | 'security'
  const [formData, setFormData] = useState({
    username: user?.username || "",
    email: user?.email || "",
    shopName: user?.shopName || "",
    password: "",
    confirmPassword: "",
  });
  const [isUpdating, setIsUpdating] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    const errors = {};

    if (!formData.username.trim()) errors.username = "Username cannot be empty";
    if (!formData.email.trim()) errors.email = "Email cannot be empty";
    if (user?.role === "SELLER" && !formData.shopName.trim()) {
      errors.shopName = "Shop name is required for seller accounts";
    }

    if (formData.password) {
      if (formData.password.length < 6) {
        errors.password = "Password must be at least 6 characters long";
      }
      if (formData.password !== formData.confirmPassword) {
        errors.confirmPassword = "Passwords do not match";
      }
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    try {
      setIsUpdating(true);
      const payload = {
        username: formData.username.trim(),
        email: formData.email.trim(),
        shopName: user?.role === "SELLER" ? formData.shopName.trim() : undefined,
      };

      if (formData.password) {
        payload.password = formData.password;
      }

      const response = await userService.updateProfile(payload);

      if (response.success && response.data) {
        dispatch(setUser(response.data));
        toast.success("Profile updated successfully!");
        setFormData((prev) => ({ ...prev, password: "", confirmPassword: "" }));
        setActiveTab("overview");
      }
    } catch (err) {
      const msg = err.response?.data?.message || err.message || "Failed to update profile.";
      toast.error(msg);
    } fontFinally: {
      setIsUpdating(false);
    }
  };

  const handleLogout = async () => {
    await dispatch(logoutAsync());
    toast.success("Logged out successfully.");
    navigate(APP_ROUTES.HOME);
  };

  if (!user) {
    return (
      <Container className="py-16 text-center">
        <p className="text-sm font-bold text-slate-500">
          Please log in to view your profile.
        </p>
      </Container>
    );
  }

  return (
    <div className="py-8 bg-slate-50/50 min-h-screen">
      <Container>
        <div className="mb-8">
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Account Profile
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Manage your personal details, shop settings, and account security.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Card */}
          <div className="lg:col-span-1 space-y-6">
            <div className="rounded-3xl bg-white p-6 shadow-sm border border-slate-100 text-center space-y-4">
              {/* Avatar Circle */}
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-tr from-indigo-600 to-violet-500 text-white font-extrabold text-2xl mx-auto shadow-md shadow-indigo-200">
                {user.username ? user.username.charAt(0).toUpperCase() : "U"}
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900">{user.username}</h3>
                <p className="text-xs text-slate-500 truncate">{user.email}</p>
                <div className="mt-2 flex justify-center gap-1.5">
                  <Badge variant={user.role === "SELLER" ? "warning" : "primary"}>
                    {user.role}
                  </Badge>
                  <Badge variant="outline">{user.authProvider || "LOCAL"}</Badge>
                </div>
              </div>

              {/* Navigation Menu */}
              <div className="pt-4 border-t border-slate-100 space-y-1 text-left">
                <button
                  onClick={() => setActiveTab("overview")}
                  className={`flex w-full items-center space-x-3 px-3.5 py-2.5 text-xs font-semibold rounded-xl transition-all cursor-pointer ${
                    activeTab === "overview"
                      ? "bg-indigo-600 text-white shadow-sm"
                      : "text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  <User size={16} />
                  <span>Overview</span>
                </button>

                <button
                  onClick={() => setActiveTab("edit")}
                  className={`flex w-full items-center space-x-3 px-3.5 py-2.5 text-xs font-semibold rounded-xl transition-all cursor-pointer ${
                    activeTab === "edit"
                      ? "bg-indigo-600 text-white shadow-sm"
                      : "text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  <Save size={16} />
                  <span>Edit Profile</span>
                </button>

                <Link
                  to={APP_ROUTES.ORDERS}
                  className="flex w-full items-center space-x-3 px-3.5 py-2.5 text-xs font-semibold text-slate-600 hover:bg-slate-50 rounded-xl transition-all"
                >
                  <Package size={16} />
                  <span>My Orders</span>
                </Link>

                <button
                  onClick={handleLogout}
                  className="flex w-full items-center space-x-3 px-3.5 py-2.5 text-xs font-semibold text-rose-600 hover:bg-rose-50 rounded-xl transition-all cursor-pointer"
                >
                  <LogOut size={16} />
                  <span>Sign Out</span>
                </button>
              </div>
            </div>
          </div>

          {/* Main Content Pane */}
          <div className="lg:col-span-3">
            {activeTab === "overview" && (
              <div className="rounded-3xl bg-white p-6 sm:p-8 shadow-sm border border-slate-100 space-y-6">
                <h3 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-4">
                  Profile Details
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
                    <span className="text-xs text-slate-400 font-medium block">Username</span>
                    <span className="font-bold text-slate-900">{user.username}</span>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
                    <span className="text-xs text-slate-400 font-medium block">Email Address</span>
                    <span className="font-bold text-slate-900">{user.email}</span>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
                    <span className="text-xs text-slate-400 font-medium block">Account Role</span>
                    <span className="font-bold text-slate-900">{user.role}</span>
                  </div>

                  {user.role === "SELLER" && (
                    <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-100 space-y-1">
                      <span className="text-xs text-amber-600 font-medium block">Shop Name</span>
                      <span className="font-bold text-slate-900">{user.shopName || "N/A"}</span>
                    </div>
                  )}
                </div>

                <div className="pt-4 flex justify-end">
                  <Button variant="primary" onClick={() => setActiveTab("edit")} leftIcon={Save}>
                    Edit Details
                  </Button>
                </div>
              </div>
            )}

            {activeTab === "edit" && (
              <div className="rounded-3xl bg-white p-6 sm:p-8 shadow-sm border border-slate-100 space-y-6">
                <h3 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-4">
                  Edit Account Information
                </h3>

                <form onSubmit={handleUpdateProfile} className="space-y-4 max-w-lg">
                  <Input
                    label="Username"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    leftIcon={User}
                    error={formErrors.username}
                  />

                  <Input
                    label="Email Address"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    leftIcon={Mail}
                    error={formErrors.email}
                  />

                  {user.role === "SELLER" && (
                    <Input
                      label="Shop Name"
                      name="shopName"
                      value={formData.shopName}
                      onChange={handleInputChange}
                      leftIcon={Store}
                      error={formErrors.shopName}
                    />
                  )}

                  <div className="pt-4 border-t border-slate-100 space-y-4">
                    <h4 className="text-sm font-bold text-slate-800">Change Password (Optional)</h4>
                    <Input
                      label="New Password"
                      name="password"
                      type="password"
                      placeholder="Leave blank to keep current password"
                      value={formData.password}
                      onChange={handleInputChange}
                      leftIcon={Lock}
                      error={formErrors.password}
                    />

                    {formData.password && (
                      <Input
                        label="Confirm New Password"
                        name="confirmPassword"
                        type="password"
                        placeholder="Re-enter new password"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        leftIcon={Lock}
                        error={formErrors.confirmPassword}
                      />
                    )}
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button
                      type="submit"
                      variant="primary"
                      isLoading={isUpdating}
                      leftIcon={Save}
                    >
                      Save Changes
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setActiveTab("overview")}
                    >
                      Cancel
                    </Button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProfilePage;

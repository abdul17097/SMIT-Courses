import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  ShoppingBag,
  Search,
  Menu,
  User,
  LogOut,
  ChevronDown,
  Store,
  Sparkles,
} from "lucide-react";
import { useUI } from "../../context/UIContext";
import Container from "../common/Container";
import Button from "../common/Button";
import Badge from "../common/Badge";
import { APP_ROUTES } from "../../constants/appRoutes";
import { logoutUser } from "../../store/slices/authSlice";

export const Header = () => {
  const { toggleMobileMenu } = useUI();
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  const { items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const totalCartCount = items.reduce((sum, item) => sum + (item.quantity || 1), 0);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`${APP_ROUTES.PRODUCTS}?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const handleLogout = () => {
    dispatch(logoutUser());
    setIsProfileOpen(false);
    navigate(APP_ROUTES.HOME);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur-md border-b border-slate-100 transition-all">
      <Container>
        <div className="flex h-20 items-center justify-between gap-4">
          {/* Mobile Menu Toggle & Brand */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden flex h-10 w-10 items-center justify-center rounded-xl text-slate-600 hover:bg-slate-100 transition-colors"
              aria-label="Open navigation menu"
            >
              <Menu size={22} />
            </button>

            <Link to={APP_ROUTES.HOME} className="flex items-center gap-2.5 group">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-500 text-white shadow-md shadow-indigo-200 group-hover:scale-105 transition-transform">
                <Sparkles size={20} />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold text-slate-900 tracking-tight leading-none">
                  AuraStore
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-indigo-600">
                  Premium Commerce
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Search Bar */}
          <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-md mx-4">
            <div className="relative w-full">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products, brands, categories..."
                className="w-full rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-2.5 pl-10 text-sm text-slate-800 placeholder-slate-400 focus:bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition-all"
              />
              <Search size={18} className="absolute left-3.5 top-3 text-slate-400" />
            </div>
          </form>

          {/* Navigation Links & Actions */}
          <div className="flex items-center gap-4">
            <nav className="hidden lg:flex items-center space-x-6 text-sm font-semibold text-slate-700">
              <Link to={APP_ROUTES.HOME} className="hover:text-indigo-600 transition-colors">
                Home
              </Link>
              <Link to={APP_ROUTES.PRODUCTS} className="hover:text-indigo-600 transition-colors">
                Products
              </Link>
            </nav>

            {/* Cart Icon Button */}
            <Link
              to={APP_ROUTES.CART}
              className="relative flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 hover:border-indigo-500 hover:text-indigo-600 shadow-sm transition-all"
              aria-label="View Shopping Cart"
            >
              <ShoppingBag size={20} />
              {totalCartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 flex h-5 min-w-[20px] items-center justify-center rounded-full bg-indigo-600 px-1 text-[11px] font-bold text-white shadow-sm animate-scale-up">
                  {totalCartCount}
                </span>
              )}
            </Link>

            {/* Auth Buttons / User Profile */}
            {isAuthenticated && user ? (
              <div className="relative">
                <button
                  onClick={() => setIsProfileOpen((prev) => !prev)}
                  className="flex items-center space-x-2 rounded-2xl border border-slate-200 bg-white p-1.5 pr-3 hover:border-indigo-500 transition-all cursor-pointer"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-indigo-600 text-white font-bold text-sm">
                    {user.username ? user.username.charAt(0).toUpperCase() : "U"}
                  </div>
                  <span className="hidden sm:inline text-xs font-bold text-slate-800">
                    {user.username}
                  </span>
                  <ChevronDown size={14} className="text-slate-400" />
                </button>

                {/* Profile Dropdown */}
                {isProfileOpen && (
                  <div
                    className="absolute right-0 mt-2 w-56 rounded-2xl bg-white p-2 shadow-xl border border-slate-100 animate-scale-up z-50"
                    onMouseLeave={() => setIsProfileOpen(false)}
                  >
                    <div className="px-3 py-2 border-b border-slate-100">
                      <p className="text-xs font-bold text-slate-800">{user.username}</p>
                      <p className="text-[11px] text-slate-500 truncate">{user.email}</p>
                      <Badge variant="primary" size="sm" className="mt-1">
                        {user.role}
                      </Badge>
                    </div>

                    <Link
                      to={APP_ROUTES.PROFILE}
                      onClick={() => setIsProfileOpen(false)}
                      className="flex items-center space-x-2 px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-xl transition-colors"
                    >
                      <User size={16} />
                      <span>Account Profile</span>
                    </Link>

                    {user.role === "SELLER" && (
                      <Link
                        to={APP_ROUTES.SELLER_DASHBOARD}
                        onClick={() => setIsProfileOpen(false)}
                        className="flex items-center space-x-2 px-3 py-2 text-xs font-semibold text-amber-700 hover:bg-amber-50 rounded-xl transition-colors"
                      >
                        <Store size={16} />
                        <span>Seller Dashboard</span>
                      </Link>
                    )}

                    <button
                      onClick={handleLogout}
                      className="flex w-full items-center space-x-2 px-3 py-2 text-xs font-semibold text-rose-600 hover:bg-rose-50 rounded-xl transition-colors cursor-pointer"
                    >
                      <LogOut size={16} />
                      <span>Sign Out</span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => navigate(APP_ROUTES.LOGIN)}
                  className="hidden sm:inline-flex"
                >
                  Sign In
                </Button>
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => navigate(APP_ROUTES.SIGNUP)}
                >
                  Register
                </Button>
              </div>
            )}
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;

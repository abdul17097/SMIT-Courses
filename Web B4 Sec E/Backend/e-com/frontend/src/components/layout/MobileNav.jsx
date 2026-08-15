import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { ShoppingBag, User, LogOut, Search, Store } from "lucide-react";
import { useUI } from "../../context/UIContext";
import Drawer from "../common/Drawer";
import Button from "../common/Button";
import Input from "../common/Input";
import Badge from "../common/Badge";
import { APP_ROUTES } from "../../constants/appRoutes";
import { logoutUser } from "../../store/slices/authSlice";

export const MobileNav = () => {
  const { isMobileMenuOpen, closeMobileMenu } = useUI();
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  const { items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const totalCartCount = items.reduce((sum, item) => sum + (item.quantity || 1), 0);

  const handleLogout = () => {
    dispatch(logoutUser());
    closeMobileMenu();
    navigate(APP_ROUTES.HOME);
  };

  return (
    <Drawer isOpen={isMobileMenuOpen} onClose={closeMobileMenu} title="Menu" position="left">
      <div className="flex flex-col h-full space-y-6">
        {/* Search */}
        <div>
          <Input
            placeholder="Search products..."
            leftIcon={Search}
          />
        </div>

        {/* User Card */}
        {isAuthenticated && user ? (
          <div className="flex items-center space-x-3 p-3.5 bg-slate-50 rounded-2xl border border-slate-100">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 text-white font-bold">
              {user.username ? user.username.charAt(0).toUpperCase() : "U"}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-slate-800 truncate">{user.username}</p>
              <p className="text-xs text-slate-500 truncate">{user.email}</p>
            </div>
            <Badge variant={user.role === "SELLER" ? "warning" : "primary"} size="sm">
              {user.role}
            </Badge>
          </div>
        ) : (
          <div className="flex gap-2">
            <Button
              variant="outline"
              fullWidth
              onClick={() => {
                closeMobileMenu();
                navigate(APP_ROUTES.LOGIN);
              }}
            >
              Sign In
            </Button>
            <Button
              variant="primary"
              fullWidth
              onClick={() => {
                closeMobileMenu();
                navigate(APP_ROUTES.SIGNUP);
              }}
            >
              Register
            </Button>
          </div>
        )}

        {/* Links */}
        <nav className="flex-1 space-y-1">
          <Link
            to={APP_ROUTES.HOME}
            onClick={closeMobileMenu}
            className="flex items-center px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-xl transition-colors"
          >
            Home
          </Link>
          <Link
            to={APP_ROUTES.PRODUCTS}
            onClick={closeMobileMenu}
            className="flex items-center px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-xl transition-colors"
          >
            All Products
          </Link>
          <Link
            to={APP_ROUTES.CART}
            onClick={closeMobileMenu}
            className="flex items-center justify-between px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-xl transition-colors"
          >
            <span className="flex items-center space-x-2">
              <ShoppingBag size={18} />
              <span>Shopping Cart</span>
            </span>
            {totalCartCount > 0 && <Badge variant="primary">{totalCartCount}</Badge>}
          </Link>

          {isAuthenticated && (
            <>
              <Link
                to={APP_ROUTES.PROFILE}
                onClick={closeMobileMenu}
                className="flex items-center space-x-2 px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-xl transition-colors"
              >
                <User size={18} />
                <span>My Profile</span>
              </Link>
              {user?.role === "SELLER" && (
                <Link
                  to={APP_ROUTES.SELLER_DASHBOARD}
                  onClick={closeMobileMenu}
                  className="flex items-center space-x-2 px-4 py-3 text-sm font-semibold text-amber-700 hover:bg-amber-50 rounded-xl transition-colors"
                >
                  <Store size={18} />
                  <span>Seller Dashboard</span>
                </Link>
              )}
            </>
          )}
        </nav>

        {/* Footer Logout */}
        {isAuthenticated && (
          <div className="pt-4 border-t border-slate-100">
            <Button
              variant="ghost"
              leftIcon={LogOut}
              fullWidth
              className="text-rose-600 hover:bg-rose-50 hover:text-rose-700 justify-start"
              onClick={handleLogout}
            >
              Log Out
            </Button>
          </div>
        )}
      </div>
    </Drawer>
  );
};

export default MobileNav;

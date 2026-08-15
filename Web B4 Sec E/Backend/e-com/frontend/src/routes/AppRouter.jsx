import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import { APP_ROUTES } from "../constants/appRoutes";

// Pages
import HomePage from "../pages/home/HomePage";
import ProductListingPage from "../pages/products/ProductListingPage";
import ProductDetailsPage from "../pages/products/ProductDetailsPage";
import CartPage from "../pages/cart/CartPage";
import CheckoutPage from "../pages/checkout/CheckoutPage";
import LoginPage from "../pages/auth/LoginPage";
import SignupPage from "../pages/auth/SignupPage";
import ProfilePage from "../pages/profile/ProfilePage";
import NotFoundPage from "../pages/NotFoundPage";

import ProtectedRoute from "./ProtectedRoute";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path={APP_ROUTES.HOME} element={<HomePage />} />
          <Route path={APP_ROUTES.PRODUCTS} element={<ProductListingPage />} />
          <Route path={APP_ROUTES.PRODUCT_DETAILS} element={<ProductDetailsPage />} />
          <Route path={APP_ROUTES.CART} element={<CartPage />} />
          <Route path={APP_ROUTES.LOGIN} element={<LoginPage />} />
          <Route path={APP_ROUTES.SIGNUP} element={<SignupPage />} />

          {/* Protected Routes */}
          <Route
            path={APP_ROUTES.CHECKOUT}
            element={
              <ProtectedRoute allowedRoles={["BUYER", "SELLER", "ADMIN"]}>
                <CheckoutPage />
              </ProtectedRoute>
            }
          />
          <Route
            path={APP_ROUTES.PROFILE}
            element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            }
          />

          {/* Fallback 404 */}
          <Route path={APP_ROUTES.NOT_FOUND} element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;

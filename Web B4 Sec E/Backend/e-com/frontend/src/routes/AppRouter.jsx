import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import { APP_ROUTES } from "../constants/appRoutes";
import Spinner from "../components/common/Spinner";
import ProtectedRoute from "./ProtectedRoute";

// Lazy-loaded route components for optimal bundle splitting
const HomePage = lazy(() => import("../pages/home/HomePage"));
const ProductListingPage = lazy(() => import("../pages/products/ProductListingPage"));
const ProductDetailsPage = lazy(() => import("../pages/products/ProductDetailsPage"));
const CartPage = lazy(() => import("../pages/cart/CartPage"));
const CheckoutPage = lazy(() => import("../pages/checkout/CheckoutPage"));
const LoginPage = lazy(() => import("../pages/auth/LoginPage"));
const SignupPage = lazy(() => import("../pages/auth/SignupPage"));
const ProfilePage = lazy(() => import("../pages/profile/ProfilePage"));
const OrderHistoryPage = lazy(() => import("../pages/orders/OrderHistoryPage"));
const OrderDetailsPage = lazy(() => import("../pages/orders/OrderDetailsPage"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));

const RouteLoader = () => (
  <div className="flex h-[60vh] w-full items-center justify-center">
    <Spinner size="lg" color="primary" />
  </div>
);

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<RouteLoader />}>
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
              path={APP_ROUTES.ORDERS}
              element={
                <ProtectedRoute>
                  <OrderHistoryPage />
                </ProtectedRoute>
              }
            />
            <Route
              path={APP_ROUTES.ORDER_DETAILS}
              element={
                <ProtectedRoute>
                  <OrderDetailsPage />
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
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRouter;

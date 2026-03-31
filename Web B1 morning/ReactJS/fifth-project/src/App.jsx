import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import DasboardLayout from "./components/DasboardLayout";
import UserLayout from "./components/layouts/UserLayout";
import AdminLayout from "./components/layouts/AdminLayout";
import VendorLayout from "./components/layouts/VendorLayout";
import Login from "./pages/Login";
import Dashboard from "./components/Dashboard";
import ProtectedRoutes from "./components/ProtectedRoutes";

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes> */}

      {/* <Routes>
        <Route path="/" element={<DasboardLayout />}>
          <Route path="/dashboard" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes> */}
      {/* <UserLayout /> */}
      {/* <AdminLayout /> */}
      {/* <VendorLayout /> */}
      {/* <Home /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />

        <Route element={<ProtectedRoutes role="user" />}>
          <Route path="/user/dashboard" element={<UserLayout role="user" />} />
        </Route>

        <Route element={<ProtectedRoutes role="admin" />}>
          <Route
            path="/admin/dashboard"
            element={<AdminLayout role="admin" />}
          />
        </Route>

        <Route element={<ProtectedRoutes role="vendor" />}>
          <Route
            path="/vendor/dashboard"
            element={<VendorLayout role="vendor" />}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

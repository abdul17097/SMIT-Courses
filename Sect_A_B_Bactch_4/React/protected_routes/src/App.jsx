import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./pages/public/Home";
import Contact from "./pages/public/Contact";
import About from "./pages/public/About";
import Login from "./pages/public/Login";
import DashboardLayout from "./components/Layouts/DashboardLayout";
import Dahsboard from "./pages/protected/Dahsboard";
import Users from "./pages/protected/Users";
import Products from "./pages/protected/Products";
import Setting from "./pages/protected/Setting";
import Navbar from "./components/Navbar";
import Counter from "./components/Counter";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Counter />
      {/* <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dahsboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/products" element={<Products />} />
          <Route path="/settings" element={<Setting />} />
        </Route>
      </Routes> */}
    </>
  );
}

export default App;

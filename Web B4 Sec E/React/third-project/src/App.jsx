import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import React from "react";
import Navabar from "./components/Navabar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import ProductDetails from "./pages/ProductDetails";
import Parent from "./components/Parent";
import CounterReducer from "./components/CounterReducer";
import SearchBar from "./components/SearchBar";
import UploadFile from "./components/UploadFile";

function App() {
  const [count, setCount] = useState(0);
  const handleSaveData = () => {
    // localStorage.setItem("role", "admin");
    localStorage.setItem("user", JSON.stringify({ name: "John Doe", age: 30 }));
  };

  const handleDeleteData = () => {
    // localStorage.removeItem("role");
    localStorage.removeItem("user");
  };

  const handleGetData = () => {
    // const role = localStorage.getItem("role");
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user.name);
  };

  const handleUpdateData = () => {
    // localStorage.setItem("role", "superadmin");
    localStorage.setItem(
      "users",
      JSON.stringify({ name: "Jane Doe", age: 25 }),
    );
  };

  return (
    <React.Fragment>
      <Navabar />
      <button
        onClick={handleSaveData}
        className="bg-blue-500 text-white p-2 rounded"
      >
        Save Data
      </button>
      <button
        onClick={handleDeleteData}
        className="bg-blue-500 text-white p-2 rounded"
      >
        Delete Data
      </button>
      <button
        onClick={handleGetData}
        className="bg-blue-500 text-white p-2 rounded"
      >
        Get Data
      </button>
      <button
        onClick={handleUpdateData}
        className="bg-blue-500 text-white p-2 rounded"
      >
        Update Data
      </button>
      {/* <Parent /> */}
      {/* <CounterReducer /> */}
      {/* <SearchBar /> */}
      {/* <UploadFile /> */}
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Product />} />
        <Route path="/product-details/:id" element={<ProductDetails />} />
      </Routes> */}
    </React.Fragment>
  );
}

export default App;

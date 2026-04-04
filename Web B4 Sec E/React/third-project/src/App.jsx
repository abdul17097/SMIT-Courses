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

function App() {
  const [count, setCount] = useState(0);

  return (
    <React.Fragment>
      <Navabar />
      {/* <Parent /> */}
      <CounterReducer />
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

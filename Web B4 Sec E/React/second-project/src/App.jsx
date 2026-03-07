import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import DisplayProducts from "./components/DisplayProducts";

function App() {
  const [search, setSearch] = useState("");
  console.log(search);

  return (
    <Routes>
      <Route path="/trainer" element={<h1>Home Page</h1>} />
      <Route path="/dashboard" element={<DisplayProducts />} />
    </Routes>
  );
}

export default App;

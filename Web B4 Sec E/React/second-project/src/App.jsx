import { useState } from "react";
import "./App.css";
import DashboardLayout from "./components/DashboardLayout";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Products from "./components/Products";

function App() {
  const [search, setSearch] = useState("");
  console.log(search);

  return (
    <div className="">
      {/* <DashboardLayout>
        <div className="p-10">asdf</div>
      </DashboardLayout> */}
      <Navbar setSearch={setSearch} />
      {/* <Hero search={search} /> */}
      <Products />
    </div>
  );
}

export default App;

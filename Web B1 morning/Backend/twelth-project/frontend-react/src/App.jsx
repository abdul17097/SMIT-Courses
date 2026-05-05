import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import { Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import MyPost from "./pages/MyPost";
import { ToastContainer } from "react-toast";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <Navbar
        isLoggedIn={isLoggedIn}
        onLogin={() => setIsLoggedIn(true)}
        onLogout={() => setIsLoggedIn(false)}
      />
      <main className="px-4 py-6 sm:px-6 lg:px-8">
        <Routes>
          <Route path="/my-posts" element={<MyPost />} />
          <Route
            path="/about"
            element={<h1 className="text-2xl font-bold">About Page</h1>}
          />
          <Route
            path="/contact"
            element={<h1 className="text-2xl font-bold">Contact Page</h1>}
          />

          <Route path="/signup" element={<Signup />} />
          <Route
            path="/login"
            element={<Login onLogin={() => setIsLoggedIn(true)} />}
          />
        </Routes>
      </main>
      <ToastContainer />
    </>
  );
}

export default App;

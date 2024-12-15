import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { UserProvider } from "./context/TestContext.jsx";
import { ThemeToggle } from "./context/ThemeContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ThemeToggle>
      <UserProvider>
        <App />
      </UserProvider>
    </ThemeToggle>
  </BrowserRouter>
);

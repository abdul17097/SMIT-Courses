import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Toaster } from "@/components/ui/toaster";
import FirbaseProvider from "./context/firebaseContext";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <FirbaseProvider>
        <Provider store={store}>
          <Toaster />
          <ToastContainer />
          <App />
        </Provider>
      </FirbaseProvider>
    </BrowserRouter>
  </StrictMode>
);

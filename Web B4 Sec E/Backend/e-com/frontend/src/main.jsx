import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store";
import { UIProvider } from "./context/UIContext";
import "./index.css";
import App from "./App.jsx";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <UIProvider>
        <ToastContainer position="top-right" autoClose={3000} />
        <App />
      </UIProvider>
    </Provider>
  </StrictMode>,
);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { ThemeProvider } from "./contexts/ThemeContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <Provider store={store}> */}
    <ThemeProvider>
      <App />
    </ThemeProvider>
    {/* </Provider> */}
  </StrictMode>,
);

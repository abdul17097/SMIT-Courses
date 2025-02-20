import "./App.css";
import { Navbar } from "./components/Navbar";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { ProductDetail } from "./pages/ProductDetail";
import { ProductPage } from "./pages/ProductPage";
import { SignupPage } from "./pages/SignupPage";
import { Routes, Route } from "react-router-dom";
import { TestForm } from "./pages/TestForm";
function App() {
  const user = {
    id: 1,
  };
  return (
    <>
      <Navbar />
      <div className="p-5">
        <Routes>
          <Route path="/" element={<HomePage user={user} />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/test-form" element={<TestForm />} />
          <Route
            path="/product-detail/:productId"
            element={<ProductDetail />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ProductDetails } from "./pages/ProductDetails";
import { PublicLayout } from "./components/PublicLayout";
import { ProtectLayout } from "./components/ProtectLayout";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signu";

function App() {
  return (
    <>
      <Routes>
        {/* public routes */}
        <Route element={<PublicLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/product-detail" element={<ProductDetails />} />
          <Route path="*" element={<div>Not Found</div>} />
        </Route>

        {/* protected routes */}
        <Route element={<ProtectLayout />}>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/product-detail" element={<ProductDetails />} />
          <Route path="/checkout" element={<div>Checkout Page</div>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

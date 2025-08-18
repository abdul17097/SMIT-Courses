import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/home";
import { ProductDetails } from "./pages/ProductDetails";
import { PublicLayout } from "./components/PublicLayout";
import { ProtectLayout } from "./components/ProtectLayout";

function App() {
  return (
    <>
      <Routes>
        {/* public routes */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/product-detail" element={<ProductDetails />} />
          <Route path="*" element={<div>Not Found</div>} />
        </Route>

        {/* protected routes */}
        <Route element={<ProtectLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/product-detail" element={<ProductDetails />} />
          <Route path="/checkout" element={<div>Checkout Page</div>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

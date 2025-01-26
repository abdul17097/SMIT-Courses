import { useDispatch, useSelector } from "react-redux";
import { Carousel } from "./components/ui/carousel";
import FeaturedProduct from "./customComponents/FeaturedProduct";
import { CarouselPlugin } from "./customComponents/HeroSection";
import LatestProduct from "./customComponents/LatestProduct";
import Navabar from "./customComponents/Navabar";
import { useEffect } from "react";
import { fetchProducts, setProduct } from "./slices/ProductSlice";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Favorite from "./pages/Favorite";
import Cart from "./pages/Cart";
import { FilterProduct } from "./customComponents/FilterProduct";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ProductForm from "./pages/ProductForm";
import { app } from "./firebaseConfig";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { toast } from "react-toastify";
// import { setProduct } from "./slices/ProductSlice";

function App() {
  const dispatch = useDispatch();
  const auth = getAuth(app);
  // Alternative for createASyncThunk
  // const fetchProducts = async () => {
  //   const response = await axios.get(
  //     "https://api.escuelajs.co/api/v1/products"
  //   );
  //   console.log(response.data);

  //   dispatch(setProduct(response.data));
  // };
  // useEffect(() => {
  //   fetchProducts();
  // }, []);
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  const handleResetPassword = async () => {
    const response = await sendPasswordResetEmail(auth, "abdul17097@gmail.com");
    sendPasswordResetEmail(auth, "abdul17097@gmail.com")
      .then(() => {
        toast.success("Email sent successfully");
        // Password reset email sent!
        // ..
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };
  return (
    <>
      <Navabar />
      <button onClick={handleResetPassword} className="">
        Reset Password
      </button>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product" element={<FilterProduct />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/productForm" element={<ProductForm />} />
      </Routes>
    </>
  );
}

export default App;

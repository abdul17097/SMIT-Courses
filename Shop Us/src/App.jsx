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
// import { setProduct } from "./slices/ProductSlice";

function App() {
  const dispatch = useDispatch();
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
  return (
    <>
      <Navabar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;

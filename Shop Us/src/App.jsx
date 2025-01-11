import { useDispatch, useSelector } from "react-redux";
import { Carousel } from "./components/ui/carousel";
import FeaturedProduct from "./customComponents/FeaturedProduct";
import { CarouselPlugin } from "./customComponents/HeroSection";
import LatestProduct from "./customComponents/LatestProduct";
import Navabar from "./customComponents/Navabar";
import { useEffect } from "react";
import { fetchProducts } from "./slices/ProductSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <>
      <Navabar />
      <div className="">
        <CarouselPlugin />
        <div className="">
          <FeaturedProduct />
          <LatestProduct />
        </div>
      </div>
    </>
  );
}

export default App;

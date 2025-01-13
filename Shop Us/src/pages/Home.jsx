import FeaturedProduct from "@/customComponents/FeaturedProduct";
import { CarouselPlugin } from "@/customComponents/HeroSection";
import LatestProduct from "@/customComponents/LatestProduct";
import React from "react";

const Home = () => {
  return (
    <div className="">
      <CarouselPlugin />
      <div className="">
        <FeaturedProduct />
        <LatestProduct />
      </div>
    </div>
  );
};

export default Home;

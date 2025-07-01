import React, { useEffect, useState } from "react";
import { HeroSection } from "../components/HeroSection";
import { Category } from "../components/Category";
import { Card } from "../components/Card";

export const Home = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
      console.log("Products fetched successfully:", data);
    } catch (error) {
      console.log("Error fetching products:", error.message);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <HeroSection />
      <Category />
      {/* Featured Product */}
      <div className="">
        <h2 className="">Featured Products</h2>
        <div className="flex flex-wrap justify-around gap-3">
          {products.map((product) => (
            <Card data={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

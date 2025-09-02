import React, { useEffect } from "react";
import ProductItem from "./ProductItem";
import { nanoid } from "nanoid";
import customFetch from "../axios/custom";

const ProductGrid = ({ products }: { products?: Product[] }) => {
  useEffect(() => {
    const getProducts = async () => {
      const response = await customFetch.get("/products");

      console.log(response.data);
    };
    getProducts();
  }, []);
  return (
    <div
      id="gridTop"
      className="max-w-screen-2xl flex flex-wrap justify-between items-center gap-y-8 mx-auto mt-12 max-xl:justify-start max-xl:gap-5 px-5 max-[400px]:px-3"
    >
      {products &&
        products.map((product: Product) => (
          <ProductItem
            key={nanoid()}
            id={product.id}
            image={product.image}
            title={product.title}
            category={product.category}
            price={product.price}
            popularity={product.popularity}
            stock={product.stock}
          />
        ))}
    </div>
  );
};
// Memoize the component to prevent unnecessary re-renders because of React.cloneElement
export default React.memo(ProductGrid);

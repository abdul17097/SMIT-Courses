import React, { useMemo } from "react";
import { products } from "../constants/products";

const ProductList = ({ search }) => {
  const filteredProduct = products.filter((product) =>
    product.name.toLowerCase().includes(search),
  );

  const totalProducts = useMemo(() => {
    console.log("total");

    const total = products.length;
    return total;
  }, []);
  const finalProducts = filteredProduct.length > 0 ? filteredProduct : products;

  return (
    <div>
      <h1>Product List</h1>
      <h2 className="">Total Product: {totalProducts}</h2>
      <div className="flex flex-wrap gap-5">
        {finalProducts.map((product) => (
          <div class="max-w-sm rounded-xl border border-gray-200 bg-white shadow-md overflow-hidden hover:shadow-lg transition">
            <img
              src="https://via.placeholder.com/400x250"
              alt="Wireless Mouse"
              class="h-56 w-full object-cover"
            />

            <div class="p-5">
              <span class="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
                {product.category}
              </span>

              <h2 class="mt-3 text-xl font-semibold text-gray-900">
                {product.name}
              </h2>

              <p class="mt-2 text-sm text-gray-600">
                Ergonomic wireless mouse with long battery life and silent
                clicks.
              </p>

              <div class="mt-4 flex items-center justify-between">
                <div>
                  <p class="text-2xl font-bold text-indigo-600">
                    ${product.price}
                  </p>
                  <p class="text-sm text-green-600">In Stock {product.stock}</p>
                </div>

                <button class="rounded-lg bg-indigo-600 px-4 py-2 text-white transition hover:bg-indigo-700">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;

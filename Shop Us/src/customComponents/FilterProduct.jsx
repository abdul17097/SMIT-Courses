import { setCategory, setSearchQuery } from "@/slices/ProductSlice";
import React, { useState } from "react";
import { CiHeart, CiShoppingCart } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { Checkbox } from "@/components/ui/checkbox";

export const FilterProduct = () => {
  const { filterProducts, searchQuery, category } = useSelector(
    (state) => state.products
  );
  const dispatch = useDispatch();
  const handleSearch = (event) => {
    dispatch(setSearchQuery(event.target.value));
  };
  const handleCategory = (event) => {
    event ? dispatch(setCategory("Electronics")) : dispatch(setCategory(""));
  };
  console.log(category);

  return (
    <div className="px-12">
      <h1 className="">FilterProduct</h1>
      <div className="">
        <input
          type="text"
          className="border border-black"
          onChange={handleSearch}
        />
      </div>
      <div className="">
        <div className="flex items-center space-x-2">
          <Checkbox
            id="terms"
            // value={category}
            onCheckedChange={handleCategory}
          />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Electronics
          </label>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-5 gap-y-8 md:gap-x-8">
        {/* {isLoading ? (
                    <p>Loading...</p>
                  ) : ( */}
        {filterProducts?.map((product) => (
          <div
            key={product.id} // Add a unique key for each product
            className="flex flex-col border rounded-lg hover:shadow-2xl shadow-xl group cursor-pointer h-[24rem]"
          >
            <div className="border flex justify-center py-0 bg-[#f6f7fb] group-hover:bg-[#f7f7f7] rounded-t-lg h-[18rem]">
              <img src={product?.images[0]} alt={product.name} />{" "}
              {/* Add alt text */}
            </div>
            <div className="flex flex-col h-[8rem] justify-center items-center py-3 gap-1 rounded-b-lg group-hover:bg-blue-950">
              <h3 className="text-xl font-semibold group-hover:text-white text-red-400">
                {product.name}
              </h3>
              <p className="group-hover:text-white text-blue-950 font-semibold">
                {product.title}
              </p>
              <span className="group-hover:text-white text-blue-950 font-semibold">
                ${product.price}
              </span>
              <div className="flex gap">
                <span className="group-hover:text-white text-blue-950 font-semibold">
                  <CiHeart
                    //   onClick={() => handleFavorite(product)}
                    className="text-[1.3rem] lg:text-[1.5rem] hover:text-red-800 shadow-2xl shadow-red-800 cursor-pointer"
                  />
                </span>
                <span className="group-hover:text-white text-blue-950 font-semibold">
                  <CiShoppingCart
                    //   onClick={() => handleAddToCart(product)}
                    className="text-[1.3rem] lg:text-[1.5rem] hover:text-red-800 shadow-2xl shadow-red-800 cursor-pointer"
                  />
                </span>
              </div>
            </div>
          </div>
        ))}
        {/* )} */}
      </div>
    </div>
  );
};

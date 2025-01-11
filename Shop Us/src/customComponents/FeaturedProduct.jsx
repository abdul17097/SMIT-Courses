import React from "react";
// import image1 from "../assets/featured_product/image1.png";
// import image2 from "../assets/featured_product/image2.png";
// import image3 from "../assets/featured_product/image3.png";
// import image4 from "../assets/featured_product/image4.png";
import { useSelector } from "react-redux";
const FeaturedProduct = () => {
  // const featuredProduct = [
  //   {
  //     id: 1,
  //     image: image1,
  //     title: "Cantilever Chair",
  //     code: "Y523201",
  //     price: "$42.00",
  //   },
  //   {
  //     id: 2,
  //     image: image2,
  //     title: "Office Chair",
  //     code: "W321456",
  //     price: "$35.00",
  //   },
  //   {
  //     id: 3,
  //     image: image3,
  //     title: "Office Table",
  //     code: "X123456",
  //     price: "$50.00",
  //   },
  //   {
  //     id: 4,
  //     image: image4,
  //     title: "Bookshelf",
  //     code: "Z789123",
  //     price: "$25.00",
  //   },
  // ];
  const { isLoading, products, message } = useSelector(
    (state) => state.products
  );

  return (
    <div className="flex flex-col px-8 gap-5 md:gap-10 py-5 xl:px-[12rem] md:py-10">
      <h1 className="text-center font-bold text-blue-950 text-xl md:text-3xl">
        Featured Products
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-5 gap-y-8 md:gap-x-8">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          products.slice(0, 4).map((product) => (
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
                  Code - {product.code}
                </p>
                <span className="group-hover:text-white text-blue-950 font-semibold">
                  ${product.price}
                </span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default FeaturedProduct;

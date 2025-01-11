import React from "react";
import image1 from "../assets/latest_product/image1.png";
import image2 from "../assets/latest_product/image2.png";
import image3 from "../assets/latest_product/image3.png";
import image4 from "../assets/latest_product/image4.png";
import image5 from "../assets/latest_product/image5.png";
import image6 from "../assets/latest_product/image6.png";
const LatestProductData = [
  {
    id: "1",
    image: image1,
    title: "Office Chair",
    newPrice: "$1000",
    oldPrice: "$2000",
  },
  {
    id: "2",
    image: image2,
    title: "Dining Chair",
    newPrice: "$1200",
    oldPrice: "$2400",
  },
  {
    id: "3",
    image: image3,
    title: "Lounge Chair",
    newPrice: "$1400",
    oldPrice: "$2800",
  },
  {
    id: "4",
    image: image4,
    title: "Recliner Chair",
    newPrice: "$1600",
    oldPrice: "$3200",
  },
  {
    id: "5",
    image: image5,
    title: "Wooden Chair",
    newPrice: "$1800",
    oldPrice: "$3600",
  },
  {
    id: "6",
    image: image6,
    title: "Gaming Chair",
    newPrice: "$2000",
    oldPrice: "$4000",
  },
];

const LatestProduct = () => {
  return (
    <div className="flex flex-col px-8 gap-5 md:gap-10 py-5 xl:px-[14rem] md:py-10">
      <h1 className="text-center font-bold text-blue-950 text-xl md:text-3xl">
        Latest Products
      </h1>
      <div className="grid grid-cols-1 justify-items-center md:grid-cols-2 gap-10 lg:grid-cols-3">
        {LatestProductData.map((item) => (
          <div className="w-[22rem] md:[20rem] lg:w-[20rem] hover:shadow-lg rounded-lg group">
            <div className="flex rounded-t-lg justify-center py-5  h-[14rem] lg:h-[18rem] group-hover:bg-white bg-[#f6f7fb]">
              <img src={item.image} alt="" className="bg-transparent" />
            </div>
            <div className="flex justify-between items-center py-2 px-4 ">
              <h2 className="font-semibold text-blue-950 text-lg">
                {item.title}
              </h2>
              <p className="text-sm font-medium text-gray-600">
                <div className="flex gap-2 items-center">
                  <span className="text-blue-950 ">{item.newPrice}</span>
                  <span className="text-red-700 line-through text-xs">
                    {item.oldPrice}
                  </span>
                </div>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestProduct;

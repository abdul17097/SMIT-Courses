import React from "react";
import { motion } from "motion/react";

const ProductList = () => {
  const products = [
    1, 2, 4, 6, 7, 8, 8, 8, 6, 2, 4, 6, 7, 8, 8, 8, 6, 5, 4, 3, 33, 2, 2,
  ];
  return (
    <div className="flex flex-wrap justify-center gap-5">
      {products.map((product, index) => (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{
            opacity: 1,
            scale: 1,
            transition: { duration: 0.4 * (index + 1) },
          }}
          className="border w-[100px] h-[100px] bg-black flex justify-center items-center text-white"
        >
          Product
        </motion.div>
      ))}
    </div>
  );
};

export default ProductList;

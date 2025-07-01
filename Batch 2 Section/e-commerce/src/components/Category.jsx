import React from "react";
import { CategoryCard } from "./CategoryCard";

export const Category = () => {
  // create array of categories list
  const categories = [
    { id: 1, name: "Electronics" },
    { id: 2, name: "Fashion" },
    { id: 3, name: "Home & Kitchen" },
    { id: 4, name: "Books" },
    { id: 5, name: "Sports & Outdoors" },
  ];
  return (
    <div>
      <h1 className="text-[3rem] font-bold text-center py-5">Category Page</h1>
      {/* CategoryCard component will be rendered here */}
      <div className="flex flex-wrap justify-around">
        {categories.map((category) => (
          <div key={category.id} className="mb-4">
            <CategoryCard />
          </div>
        ))}
      </div>
    </div>
  );
};

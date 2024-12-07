import { useState } from "react";

export const ListAndKeys = () => {
  const data = [
    { id: 1, name: "Product 1", price: 100 },
    { id: 2, name: "Product 2", price: 200 },
    { id: 3, name: "Product 3", price: 300 },
  ];
  const [products, setProducts] = useState(data);

  return (
    <>
      <h1>Products</h1>
      {products.map((item, index) => (
        <div className="" key={item.id}>
          <div className="">
            <span>Product Name: </span>
            <span className="">{item.name}</span>
          </div>
          <div className="">
            <span>Product Price: </span>
            <span className="">{item.price}</span>
          </div>
        </div>
      ))}
    </>
  );
};

import React, { useEffect, useState } from "react";

const DisplayProducts = () => {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    id: 0,
    tilte: "",
    description: "",
    price: 0,
  });

  let getProducts = async () => {
    let response = await fetch("https://api.escuelajs.co/api/v1/products");
    let data = await response.json();
    setProducts(data);
  };

  useEffect(() => {
    getProducts();
    console.log("Added New Product");
  }, [newProduct]);

  //   useEffect(() => {
  //     console.log("hello world");
  //   }, [count]);

  //   useEffect(() => {
  //     setTimeout(() => {
  //       setCount(count + 1);
  //     }, 2000);
  //   }, []);

  return (
    <div>
      <h1>Display Productss d asd </h1>
      <p>count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button
        onClick={() =>
          setNewProduct({
            id: 234234,
            description: "234234",
            tilte: "2q23qwer",
            price: 234234,
          })
        }
        className="border"
      >
        Create New Product
      </button>
      <div className="border p-5 flex flex-wrap gap-5">
        {products.map((product) => (
          <div className="flex flex-col gap-1 border p-2 rounded-2xl">
            <h2>Title: {product.title} </h2>
            <p>Description: {product.description}</p>
            <p>Price: {product.price} </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisplayProducts;

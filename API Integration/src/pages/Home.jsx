import React, { useEffect, useState } from "react";
import axios from "axios";
const Home = () => {
  const [products, setProducts] = useState([]);

  const fetchProduct = async () => {
    //   with Promises
    // const response =  fetch("https://fakestoreapi.com/products")
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((data) => {
    //     console.log(data);
    //   });
    // return response;
    // With Async/await
    // const response = await fetch("https://fakestoreapi.com/products", {
    //   method: "GET",
    // });
    // const productsData = await response.json();
    // console.log(products);
    //   Axios
    const { data } = await axios.get("https://fakestoreapi.com/products");
    console.log(data);

    setProducts(data);
  };
  useEffect(() => {
    fetchProduct();
  }, []);
  return (
    <>
      <div className="text-xl">Products</div>
      <ul>
        {products?.map((product) => (
          <li>{product.title}</li>
        ))}
      </ul>
    </>
  );
};

export default Home;

import { useState } from "react";
import "./App.css";
import FirstForm from "./components/FirstForm";
import SecondForm from "./components/SecondForm";
import ThirdForm from "./components/ThirdForm";

function App() {
  const [names, setNames] = useState(["Alice", "Bob", "Charlie"]);
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "title 1",
      description: "description 1",
      stock: 0,
    },
    {
      id: 2,
      title: "title 2",
      description: "description 2",
      stock: 3,
    },
    {
      id: 3,
      title: "title 3",
      description: "description 3",
      stock: 2,
    },
    {
      id: 4,
      title: "title 4",
      description: "description 4",
      stock: 0,
    },
    {
      id: 5,
      title: "title 5",
      description: "description 5",
      stock: 1,
    },
  ]);

  let filterProduct = products.filter(({ stock }) => stock > 0);
  console.log(filterProduct);

  return (
    <>
      {/* <FirstForm /> */}
      {/* <SecondForm /> */}
      <ThirdForm />
      {/* <h2>All Students</h2>
      <ul>
        {names.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul> */}

      <h3>Products</h3>
      {/* <ol className="flex flex-col gap-5">
        {products.map(({ title, description, stock }) => (
          <li className="border ">
            Title: {title} <br />
            Description: {description} <br />
            Stock: {stock}
          </li>
        ))}
      </ol> */}

      {/* <ol className="flex flex-col gap-5">
        {products
          .filter(({ stock }) => stock > 0)
          .map(({ title, description, stock, id }) => (
            <li className="border" key={id}>
              Title: {title} <br />
              Description: {description} <br />
              Stock: {stock}
            </li>
          ))}
      </ol> */}
    </>
  );
}

export default App;

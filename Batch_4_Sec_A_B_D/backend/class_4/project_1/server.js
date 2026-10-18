import express, { json } from "express";

const app = express();

app.use(express.json());

app.get("/products", (req, res) => {
  const { category, price, page } = req.query;

  let products = [
    {
      id: 1,
      name: "iPhone 15",
      category: "Electronics",
      price: 799,
      stock: 25,
      description: "Apple smartphone with 128GB storage",
      inStock: true,
    },
    {
      id: 2,
      name: "Samsung Galaxy S24",
      category: "Electronics",
      price: 899,
      stock: 15,
      description: "Samsung smartphone with AMOLED display",
      inStock: true,
    },
    {
      id: 3,
      name: "Nike Air Max",
      category: "Shoes",
      price: 150,
      stock: 0,
      description: "Comfortable running shoes",
      inStock: false,
    },
    {
      id: 4,
      name: "MacBook Air M3",
      category: "Laptops",
      price: 1099,
      stock: 10,
      description: "Apple laptop with M3 chip",
      inStock: true,
    },
    {
      id: 5,
      name: "Sony WH-1000XM5",
      category: "Headphones",
      price: 349,
      stock: 20,
      description: "Wireless noise-canceling headphones",
      inStock: true,
    },
    {
      id: 6,
      name: "Logitech MX Master 3S",
      category: "Accessories",
      price: 99,
      stock: 30,
      description: "Wireless ergonomic computer mouse",
      inStock: true,
    },
    {
      id: 7,
      name: "Dell UltraSharp Monitor",
      category: "Monitors",
      price: 450,
      stock: 8,
      description: "27-inch 4K UHD monitor",
      inStock: true,
    },
    {
      id: 8,
      name: "Adidas Hoodie",
      category: "Clothing",
      price: 65,
      stock: 12,
      description: "Cotton fleece casual hoodie",
      inStock: true,
    },
    {
      id: 9,
      name: "Mechanical Keyboard",
      category: "Accessories",
      price: 120,
      stock: 0,
      description: "RGB backlit mechanical keyboard",
      inStock: false,
    },
    {
      id: 10,
      name: "Canon EOS R50",
      category: "Cameras",
      price: 680,
      stock: 5,
      description: "Mirrorless camera for photography",
      inStock: true,
    },
  ];
  if (category) {
    products = products.filter((item) => {
      return item.category === category;
    });
  }
  res.json({ products: products });
});

app.get("/products/:productId", (req, res) => {
  const { productId } = req.params;

  const products = [
    {
      id: 1,
      name: "iPhone 15",
      category: "Electronics",
      price: 799,
      stock: 25,
      description: "Apple smartphone with 128GB storage",
      inStock: true,
    },
    {
      id: 2,
      name: "Samsung Galaxy S24",
      category: "Electronics",
      price: 899,
      stock: 15,
      description: "Samsung smartphone with AMOLED display",
      inStock: true,
    },
    {
      id: 3,
      name: "Nike Air Max",
      category: "Shoes",
      price: 150,
      stock: 0,
      description: "Comfortable running shoes",
      inStock: false,
    },
    {
      id: 4,
      name: "MacBook Air M3",
      category: "Laptops",
      price: 1099,
      stock: 10,
      description: "Apple laptop with M3 chip",
      inStock: true,
    },
    {
      id: 5,
      name: "Sony WH-1000XM5",
      category: "Headphones",
      price: 349,
      stock: 20,
      description: "Wireless noise-canceling headphones",
      inStock: true,
    },
    {
      id: 6,
      name: "Logitech MX Master 3S",
      category: "Accessories",
      price: 99,
      stock: 30,
      description: "Wireless ergonomic computer mouse",
      inStock: true,
    },
    {
      id: 7,
      name: "Dell UltraSharp Monitor",
      category: "Monitors",
      price: 450,
      stock: 8,
      description: "27-inch 4K UHD monitor",
      inStock: true,
    },
    {
      id: 8,
      name: "Adidas Hoodie",
      category: "Clothing",
      price: 65,
      stock: 12,
      description: "Cotton fleece casual hoodie",
      inStock: true,
    },
    {
      id: 9,
      name: "Mechanical Keyboard",
      category: "Accessories",
      price: 120,
      stock: 0,
      description: "RGB backlit mechanical keyboard",
      inStock: false,
    },
    {
      id: 10,
      name: "Canon EOS R50",
      category: "Cameras",
      price: 680,
      stock: 5,
      description: "Mirrorless camera for photography",
      inStock: true,
    },
  ];
  const product = products.find((item) => item.id === Number(productId));

  res.json({ product_details: product });
});

app.post("/newProduct", (req, res) => {
  const products = [
    {
      id: 1,
      name: "iPhone 15",
      category: "Electronics",
      price: 799,
      stock: 25,
      description: "Apple smartphone with 128GB storage",
      inStock: true,
    },
    {
      id: 2,
      name: "Samsung Galaxy S24",
      category: "Electronics",
      price: 899,
      stock: 15,
      description: "Samsung smartphone with AMOLED display",
      inStock: true,
    },
    {
      id: 3,
      name: "Nike Air Max",
      category: "Shoes",
      price: 150,
      stock: 0,
      description: "Comfortable running shoes",
      inStock: false,
    },
    {
      id: 4,
      name: "MacBook Air M3",
      category: "Laptops",
      price: 1099,
      stock: 10,
      description: "Apple laptop with M3 chip",
      inStock: true,
    },
    {
      id: 5,
      name: "Sony WH-1000XM5",
      category: "Headphones",
      price: 349,
      stock: 20,
      description: "Wireless noise-canceling headphones",
      inStock: true,
    },
    {
      id: 6,
      name: "Logitech MX Master 3S",
      category: "Accessories",
      price: 99,
      stock: 30,
      description: "Wireless ergonomic computer mouse",
      inStock: true,
    },
    {
      id: 7,
      name: "Dell UltraSharp Monitor",
      category: "Monitors",
      price: 450,
      stock: 8,
      description: "27-inch 4K UHD monitor",
      inStock: true,
    },
    {
      id: 8,
      name: "Adidas Hoodie",
      category: "Clothing",
      price: 65,
      stock: 12,
      description: "Cotton fleece casual hoodie",
      inStock: true,
    },
    {
      id: 9,
      name: "Mechanical Keyboard",
      category: "Accessories",
      price: 120,
      stock: 0,
      description: "RGB backlit mechanical keyboard",
      inStock: false,
    },
    {
      id: 10,
      name: "Canon EOS R50",
      category: "Cameras",
      price: 680,
      stock: 5,
      description: "Mirrorless camera for photography",
      inStock: true,
    },
  ];
  const data = req.body;
  products.push(data);

  res.json({ products });
});

app.put("/products/:productId", (req, res) => {
  const products = [
    {
      id: 1,
      name: "iPhone 15",
      category: "Electronics",
      price: 799,
      stock: 25,
      description: "Apple smartphone with 128GB storage",
      inStock: true,
    },
    {
      id: 2,
      name: "Samsung Galaxy S24",
      category: "Electronics",
      price: 899,
      stock: 15,
      description: "Samsung smartphone with AMOLED display",
      inStock: true,
    },
    {
      id: 3,
      name: "Nike Air Max",
      category: "Shoes",
      price: 150,
      stock: 0,
      description: "Comfortable running shoes",
      inStock: false,
    },
    {
      id: 4,
      name: "MacBook Air M3",
      category: "Laptops",
      price: 1099,
      stock: 10,
      description: "Apple laptop with M3 chip",
      inStock: true,
    },
    {
      id: 5,
      name: "Sony WH-1000XM5",
      category: "Headphones",
      price: 349,
      stock: 20,
      description: "Wireless noise-canceling headphones",
      inStock: true,
    },
    {
      id: 6,
      name: "Logitech MX Master 3S",
      category: "Accessories",
      price: 99,
      stock: 30,
      description: "Wireless ergonomic computer mouse",
      inStock: true,
    },
    {
      id: 7,
      name: "Dell UltraSharp Monitor",
      category: "Monitors",
      price: 450,
      stock: 8,
      description: "27-inch 4K UHD monitor",
      inStock: true,
    },
    {
      id: 8,
      name: "Adidas Hoodie",
      category: "Clothing",
      price: 65,
      stock: 12,
      description: "Cotton fleece casual hoodie",
      inStock: true,
    },
    {
      id: 9,
      name: "Mechanical Keyboard",
      category: "Accessories",
      price: 120,
      stock: 0,
      description: "RGB backlit mechanical keyboard",
      inStock: false,
    },
    {
      id: 10,
      name: "Canon EOS R50",
      category: "Cameras",
      price: 680,
      stock: 5,
      description: "Mirrorless camera for photography",
      inStock: true,
    },
  ];
  const body = req.body;
  const { productId } = req.params;

  const findProductIndex = products.findIndex(
    (item) => item.id === Number(productId),
  );
  console.log(findProductIndex);
  products[findProductIndex].id = body.id;
  products[findProductIndex].name = body.name;
  products[findProductIndex].category = body.category;
  products[findProductIndex].price = body.price;
  products[findProductIndex].stock = body.stock;
  products[findProductIndex].description = body.description;
  products[findProductIndex].inStock = body.inStock;

  res.json({ products });
});

app.delete("/", (req, res, next) => {
  let admin = false;
  try {
    if (!admin) {
      next(new Error("you are not an admin! asdf"));
    }
  } catch (error) {
    next();
  }
});

app.patch("/", (req, res) => {
  res.send("patch Method");
});

const handleError = (error, req, res, next) => {
  console.log(error.message);

  res.status(500).json({
    success: false,
    message: error.message,
  });
};

app.use(handleError);
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});

// fetch("http://localhost:3000/newProduct", {
//     method: "POST",
//     body: JSON.stringify({
//         productId: 234,
//         title: "xyz",
//         description: "test description",
//     })
// });

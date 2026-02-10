// Product Class
class Product {
  constructor(id, title, price, description) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.description = description;
    this.allProducts = [];
  }

  createProduct() {
    const product = {
      id: this.id,
      title: this.title,
      price: this.price,
      description: this.description,
    };
    this.allProducts.push(product);
  }

  getAllProducts() {
    console.log(this.allProducts);
  }
}

let product1 = new Product(1, "Laptop", 1000, "A high-performance laptop");
product1.createProduct();
product1.getAllProducts();

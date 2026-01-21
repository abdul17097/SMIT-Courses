let products = [
  {
    title: "Wireless Headphones",
    productImage: "https://picsum.photos/seed/headphones/400/400",
  },
  {
    title: "Smart Watch",
    productImage: "https://picsum.photos/seed/smartwatch/400/400",
  },
  {
    title: "Running Shoes",
    productImage: "https://picsum.photos/seed/shoes/400/400",
  },
  {
    title: "Laptop Backpack",
    productImage: "https://picsum.photos/seed/backpack/400/400",
  },
  {
    title: "Coffee Maker",
    productImage: "https://picsum.photos/seed/coffeemaker/400/400",
  },
  {
    title: "Bluetooth Speaker",
    productImage: "https://picsum.photos/seed/speaker/400/400",
  },
  {
    title: "Digital Camera",
    productImage: "https://picsum.photos/seed/camera/400/400",
  },
  {
    title: "Office Chair",
    productImage: "https://picsum.photos/seed/chair/400/400",
  },
  {
    title: "Gaming Mouse",
    productImage: "https://picsum.photos/seed/mouse/400/400",
  },
  {
    title: "Table Lamp",
    productImage: "https://picsum.photos/seed/lamp/400/400",
  },
];

let contianer = document.createElement("div");
contianer.setAttribute("class", "container");
document.body.appendChild(contianer);

for (let productIndex = 0; productIndex < products.length; productIndex++) {
  let productCard = document.createElement("div");
  productCard.setAttribute("class", "productCard");

  let cardImage = document.createElement("img");
  cardImage.setAttribute("class", "cardImage");
  cardImage.setAttribute("src", products[productIndex].productImage);
  cardImage.setAttribute("alt", products[productIndex].title);
  productCard.appendChild(cardImage);

  let title = document.createElement("h3");
  title.setAttribute("class", "title");
  title.innerText = products[productIndex].title;
  productCard.appendChild(title);

  let cardBtn = document.createElement("button");
  cardBtn.setAttribute("onclick", "buy()");
  cardBtn.innerText = "Buy Now";
  productCard.appendChild(cardBtn);

  contianer.appendChild(productCard);
}

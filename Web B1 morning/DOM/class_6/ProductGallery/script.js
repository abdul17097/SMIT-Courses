// The Task: "Dynamic Product Gallery"
// The Scenario: You are building a shopping website. Instead of writing every product in HTML, you must create a "Product Card" using only JavaScript when a button is clicked.
// Requirements for Students:
// 1.	Create the Structure: Use document.createElement to create a div (the card), an img (the product photo), an h3 (the name), and a button (the "Buy" button).
// 2.	Attribute Manipulation:
// o	Set the src and alt attributes for the image.
// o	Add a title attribute to the button that says "Add to Cart."
// 3.	ClassList Power:
// o	Add a class product-card to the main div.
// o	Add a class btn-primary to the button.
// o	The Logic Task: Make the card "glow" (toggle a class called featured) if the user clicks on the card itself.
// 4.	Placement: Append the finished card into a container with the ID #gallery.

let addCardBtn = document.createElement("button");
addCardBtn.innerText = "Add New Card";
addCardBtn.setAttribute("onclick", "addNewCard()");

// append add Card Button
document.body.appendChild(addCardBtn);

let galleryContainer = document.createElement("div");
galleryContainer.setAttribute("id", "gallery");

// append add gallery Container
document.body.appendChild(galleryContainer);

function addNewCard() {
  let card = document.createElement("div");
  let image = document.createElement("img");
  let h3 = document.createElement("h3");
  let btnBuy = document.createElement("button");

  // image
  image.setAttribute("src", "../../images/monastery-9939590_1280.jpg");
  image.setAttribute("alt", "monastery");
  image.setAttribute("class", "card-img");
  card.appendChild(image);

  //   h3
  h3.innerText = "Product Title";
  h3.setAttribute("class", "card-title");
  card.appendChild(h3);

  //   btnBuy
  btnBuy.innerText = "Buy";
  btnBuy.setAttribute("class", "btnBuy");
  btnBuy.setAttribute("title", "Add to Cart");
  card.appendChild(btnBuy);

  //   append card to gallery
  galleryContainer.appendChild(card);
}

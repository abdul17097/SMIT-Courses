let product_form = document.getElementById("product_form");
let product_list = document.getElementById("product_list");
let products = [];

product_form.addEventListener("submit", (e) => {
  e.preventDefault();
  let formData = new FormData(product_form);
  formData.get("product_url");
  formData.get("title");
  formData.get("desc");
  formData.get("price");

  let product_data = Object.fromEntries(formData.entries());
  products.push(product_data);
  localStorage.setItem("products", JSON.stringify(products));

  displayProducts();
});

function displayProducts() {
  let products = JSON.parse(localStorage.getItem("products")) || [];
  product_list.innerHTML = "";

  for (product of products) {
    let product_card = ` <div class="product-card">
        <img src="${product.product_url}" alt="${product.title}" />
        <div class="product-info">
          <h3 class="product-title">${product.title}</h3>
          <p class="product-price">$${product.price}</p>
          <button>Add to Cart</button>
        </div>
      </div>`;

    product_list.innerHTML += product_card;
    // product_list = product_list + product_card;
  }
}

displayProducts();

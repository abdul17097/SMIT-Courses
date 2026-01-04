// let searchInput = document.getElementById("search");
// let btnsearch = document.getElementById("btnsearch");
// let displayContent = document.getElementById("displayContent");

// btnsearch.addEventListener("click", () => {
//   alert(searchInput.value);
// });

// searchInput.addEventListener("input", () => {
//   displayContent.innerHTML = searchInput.value;
// });

let form = document.getElementById("form");

form.addEventListener("submit", () => {
  event.preventDefault();
  console.log("form");

  let username = form.elements["username"];
  let email = form.elements["email"];
  let password = form.elements["password"];

  console.log(username, email, password);
  //   console.log(form.elements["username"].value);
});
// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   console.log("form");

//   console.log(event.target.username.value);
//   console.log(event.target.email.value);
//   console.log(event.target.password.value);

// });

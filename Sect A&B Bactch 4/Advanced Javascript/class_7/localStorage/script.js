// localStorage.setItem("theme", "light");

const btn = document.getElementById("btn");
const remvoebtn = document.getElementById("removetheme");
const themeData = document.getElementById("themeData");

let data = localStorage.getItem("theme");

themeData.innerText = data || "light";

btn.addEventListener("click", () => {
  let data = localStorage.getItem("theme");

  localStorage.setItem("theme", data === "light" ? "dark" : "light");

  let newdata = localStorage.getItem("theme");

  themeData.innerText = newdata;
});

remvoebtn.addEventListener("click", () => {
  //   localStorage.removeItem("theme");
  localStorage.clear();
});

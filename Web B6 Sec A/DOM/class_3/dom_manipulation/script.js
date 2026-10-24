let paragraph = document.getElementById("para");

// paragraph.textContent = "Welcome To ReactJS";
// paragraph.innerHTML = "Welcome To ReactJS";
// paragraph.textContent = "<strong>Welcome To ReactJS</strong>";
// paragraph.innerHTML = "<strong>Welcome To ReactJS</strong>";

// console.log(paragraph.textContent);
// console.log(paragraph.innerHTML);

let container = document.querySelector(".container");
// console.log(container.textContent);
// console.log(container.innerHTML);

// console.log(paragraph.innerText);
// console.log(paragraph.textContent);
// console.log(paragraph.innerHTML);

// css Styling
paragraph.style.color = "red";
paragraph.style.backgroundColor = "black";
paragraph.style.padding = "10px";
paragraph.style.borderRadius = "10px";

// set and change attribute value
let heart = document.getElementById("heart");
// console.log(heart.getAttribute("src"));
// console.log(heart.getAttribute("alt"));

// let heartAttributeValue = heart.getAttribute("alt");

// if (!heartAttributeValue) {
//   heart.setAttribute("alt", "Heart Icon");
// } else {
//   alert("Alt attribute value alredy exist!");
// }

// heart.removeAttribute("src");

let description = document.getElementById("desc");

// console.log(description.classList);

// console.log(description.classList.contains("xyz"));

// description.classList.add("jkl");
// description.classList.remove("xyz");
// description.classList.toggle("rty");

// description.classList.add("highlight");

let toggleBtn = document.getElementById("toggle-btn");

let isExist = toggleBtn.classList.contains("highlight");
toggleBtn.addEventListener("click", function () {
  description.classList.toggle("highlight");
});

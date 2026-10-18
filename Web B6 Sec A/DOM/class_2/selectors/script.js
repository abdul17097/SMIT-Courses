const heading = document.getElementById("heading");

heading.innerText = "Welcome To DOM";

// console.log(heading.innerText);

const messages = document.getElementsByClassName("message");
console.log(messages.length);

messages[1].innerText = "Second Paragraph with extr content";

console.log(messages[1]);

const paras = document.getElementsByTagName("p");

for (let i = 0; i < paras.length; i++) {
  paras[i].style.color = "white";
  paras[i].style.fontSize = "20px";
  paras[i].style.backgroundColor = "black";
}

console.log(paras.length);

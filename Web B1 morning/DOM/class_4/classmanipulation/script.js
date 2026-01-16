let parentEle = document.getElementById("parentEle");

// parentEle.style.backgroundColor = "lightblue";
// parentEle.style.width = "400px";
// parentEle.style.height = "400px";

function addClass() {
  parentEle.classList.add("box");
  //   parentEle.setAttribute("class", "box");
}

function removeClass() {
  parentEle.classList.remove("box");
}

function toggleClass() {
  let toggle = document.getElementById("toggle");
  toggle.classList.toggle("block");
}

let changeModeBtn = document.getElementById("changeModeBtn");
function changeMode() {
  let body = document.body;
  let isLight = body.classList.contains("light-mode");
  if (isLight == true) {
    changeModeBtn.innerText = "Light Mode";
    body.classList.add("dark-mode");
    body.classList.remove("light-mode");
  } else {
    changeModeBtn.innerText = "Dark Mode";
    body.classList.add("light-mode");
    body.classList.remove("dark-mode");
  }
}

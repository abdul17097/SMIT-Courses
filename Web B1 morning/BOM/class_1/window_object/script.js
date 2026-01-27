// console.log(window);

// a = 10;
// console.log(window.a);

// function test() {
//   console.log("hello world");
// }

// window.test();

// window.setTimeout(() => {
//   alert("welcome");
// }, 3000);

let notify = document.getElementById("notify");
function showNotification() {
  notify.style.display = "block";
  setTimeout(() => {
    notify.style.display = "none";
  }, 10000);
}

function removeNotification() {
  notify.style.display = "none";
}

let clock = document.getElementById("clock");
let clockInterval = setInterval(() => {
  let date = new Date();
  let mints = date.getMinutes();
  let hours = date.getHours();
  let second = date.getSeconds();
  console.log(mints, " ", hours, " ", second);
  clock.innerText = `${hours} : ${mints} : ${second}`;
}, 1000);

let alertTimeout = setTimeout(() => {
  alert("This is a delayed alert!");
}, 5000);

function stopAlert() {
  clearTimeout(alertTimeout);
}
function stopTime() {
  clearInterval(clockInterval);
}

// setTimeout
// clearTimeout
// syntax:
// setTimeout(callback, delay)
// console.log("first log");

// setTimeout(function () {
//   console.log("Run after 5 sec");
// }, 5000);

// setTimeout(function () {
//   console.log("Run after 0 sec");
// }, 0);

// console.log("second log");

// setTimeout(function () {
//   console.log("Run after 3 sec");
// }, 3000);
// let clearTimeOutBtn = document.getElementById("btn");
// let para = document.getElementById("para");

// const xyz = setTimeout(function () {
//   para.innerHTML = "Welcome to Javascrpt";
//   console.log("Run after 7 sec");
// }, 7000);

// clearTimeOutBtn.addEventListener("click", function () {
//   para.innerHTML = "By By Javascrpt";
//   clearTimeout(xyz);
// });

// setInterval()
// clearInterval()

// syntax
// setInterval(callback, delay);

// let clearIntervalBtn = document.getElementById("btn");
// const clearIntervalFn = setInterval(function () {
//   console.log("Hello world");
// }, 1000);

// clearIntervalBtn.addEventListener("click", function () {
//   clearInterval(clearIntervalFn);
// });

let para = document.getElementById("para");

setInterval(function () {
  let date = new Date().toLocaleString();
  para.innerHTML = date;
}, 1000);

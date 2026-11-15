// localStorage.setItem("theme", "light");
// localStorage.setItem("username", "Ahmed");

// const clearbtn = document.getElementById("clearbtn");
// const updatebtn = document.getElementById("updatebtn");
// const clearallbtn = document.getElementById("clearallbtn");

// clearbtn.addEventListener("click", function () {
//   localStorage.removeItem("theme");
// });
// updatebtn.addEventListener("click", function () {
//   localStorage.setItem("theme", "dark");
// });
// clearallbtn.addEventListener("click", function () {
//   localStorage.clear();
// });

// localStorage.setItem(
//   "userDetails",
//   JSON.stringify({
//     username: "test",
//     age: 23,
//     admin: false,
//     city: "peshawar",
//   }),
// );
// sessionStorage.setItem("test", "asdf");

const userData = JSON.parse(localStorage.getItem("userDetails"));
console.log(userData);

let count = document.getElementById("count");
let increment = document.getElementById("increment");
let decrement = document.getElementById("decrement");

let counter = 0;

increment.addEventListener("click", function () {
  counter++;
  count.innerText = counter;
});
decrement.addEventListener("click", function () {
  if (counter > 0) {
    counter--;
    count.innerText = counter;
  }
});

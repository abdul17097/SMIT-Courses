// console.log("Hello, World!");
// // document.write("Hello, World!");
// var heading = document.getElementById("heading");
// console.log(heading.textContent);

function findMax(array) {
  let max = array[0]; // 23
  for (let item of array) {
    if (max < item) {
      // 3 < 3
      // 3 < 6
      // 6 < 8
      // 8 < 23
      // 23 < 1 false
      // 23 < 0
      max = item;
    }
  }
  console.log(max);
}

findMax([3, 2896, 2348, 27643, 12, 0]);

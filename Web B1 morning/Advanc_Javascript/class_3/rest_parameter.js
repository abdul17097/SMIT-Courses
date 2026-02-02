// function printNum(a, b, c, d) {
//   console.log(a, b, c, d);
// }

// printNum(1, 3, 5, 7);

// rest Parameter
function printNum(...rest) {
  rest.forEach((element) => {
    if (element == 9) {
      console.log(element);
    }
  });
}

printNum(1, 3, 5, 7, 7, 9, 4, 2, 2);

let { password, isAdmin, ...rest } = {
  id: 1,
  name: "test",
  age: 24,
  password: "324kj23h4k",
  isAdmin: false,
};

console.log(rest);

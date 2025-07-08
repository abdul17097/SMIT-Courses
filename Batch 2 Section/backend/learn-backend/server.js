const { error } = require("console");
const fs = require("fs");
const os = require("os");

const { add, multiplication } = require("../learn-backend/utils/calculator");

fs.writeFileSync("hello.txt", "fs module");

const test = fs.readFileSync("hello.txt", "utf8");

console.log(test);

// fs.appendFileSync("hello.txt", "\n something");
fs.appendFile("hello.txt", "kuch bi", (error, data) => {
  if (error) console.log(error);
});

fs.unlink("hello.txt", (error, data) => {
  if (error) console.log(error);
  console.log("succesfully deleted file");
});

console.log(os.type());
console.log(os.arch());
console.log(os.version());

console.log(add(3, 4));
console.log(multiplication(3, 5));

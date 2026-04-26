const fs = require("fs");

// fs.writeFileSync("hello.txt", "welcom to FS Module!");

// fs.writeFile("test.txt", "hello world!", (error) => {
//   if (error) console.log(error.message);
//   console.log("File Created");
// });

// const data = fs.readFileSync("test.txt", "utf-8");
// console.log(data);

fs.readFile("hello.txt", "utf-8", (error, data) => {
  if (error) console.log(error.message);
  console.log(data);
});

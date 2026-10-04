const fs = require("fs");

// wirte operation
// fs.writeFileSync("hello.txt", "hello \nworld");
// fs.writeFileSync("world.txt", "\thello \nworld");

// fs.writeFile(
//   "test.html",
//   "<html>\n \t<head> \n </head> \n \t<body> \n </body> \n </html>",
//   (err) => {
//     if (err) console.log(err);
//     console.log("File created Successfully!");
//   },
// );

// Read operation

let data = fs.readFileSync("hello.txt", "utf8");
console.log(data);

fs.appendFileSync("hello.txt", "\nhow are you");
fs.appendFile("helo.txt", "\nhow are you", (err) => {
  if (err) console.log(err);
  console.log("Text appended");
});

// create directory
// fs.mkdirSync("parent");
// fs.mkdir("parent", (error) => {
//   if (error) console.log(error);
//   console.log("folder created");
// });

// nested directory
// fs.mkdirSync("parent/xyz");

// read Directory
let read_directory = fs.readdirSync("parent");

console.log(read_directory);

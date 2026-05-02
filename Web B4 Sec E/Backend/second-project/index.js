const { error } = require("console");
const fs = require("fs");
const path = require("path");

// fs.writeFileSync("hello.txt", "welcom to FS Module!");

// fs.writeFile("test.txt", "hello world!", (error) => {
//   if (error) console.log(error.message);
//   console.log("File Created");
// });

// const data = fs.readFileSync("test.txt", "utf-8");
// console.log(data);

// fs.readFile("hello.txt", "utf-8", (error, data) => {
//   if (error) console.log(error.message);
//   console.log(data);
// });

// fs.appendFile("hello.txt", "\nthis is new data", (error) => {
//   if (error) console.log(error);
//   console.log("File Append Successfully!");
// });

// fs.unlink("test123.html", (error) => {
//   if (error) console.log(error);
//   console.log("File deleted Successfully!");
// });

// fs.mkdir("folder1", (error) => {
//   if (error) console.log(error);
//   console.log("Folder Created Successfully!");
// });

// fs.rmdir("folder1", (error) => {
//   if (error) console.log(error);
//   console.log("folder delted successfully!");
// });

// const newFolder = path.join(__dirname, "folder1");
// const nestFolder = path.join(newFolder, "folder2");
// const newFile = path.join(newFolder, "test.txt");

// fs.mkdirSync(newFolder);
// fs.mkdirSync(nestFolder);

// fs.writeFile(newFile, "hello somthing", (error) => {
//   if (error) console.log(error);
//   console.log("File created Success!");
// });

const userDetail = {
  id: 1,
  name: "John Doe",
  email: "john@gmail.co",
};

let userLog = `${new Date()} , login, Email: ${userDetail.email} \n`;

fs.appendFile("logs.txt", userLog, (error) => {
  if (error) console.log(error);
  console.log("laksdjf");
});

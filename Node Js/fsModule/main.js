const fs = require("fs");
// console.log("start");

// fs.writeFileSync("hello.txt", "hello world");
// console.log("file created");

// fs.writeFile("hello.txt", "hello world 123", (err) => {
//   if (err) console.log(err);
//   console.log("file created");
// });

// console.log("end");

// fs.appendFileSync("hello.txt", "\n new data");

// fs.readFile("hello.txt", "utf8", (error, data) => {
//   if (error) console.log(error);
//   console.log("file read", data);
// });

// fs.unlink("hello.txt", (error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("file deleted");
//   }
// });

// if (fs.existsSync("hello.txt")) {
//   console.log("file exists");
// } else {
//   console.log("file does not exist");
// }

// fs.mkdir("kuchbi/index.js", (error) => {
//   if (error) console.log(error);
//   console.log("folder created");
// });
// fs.mkdir("parDir/slkdf", (error) => {
//   if (error) console.log(error);
//   console.log("folder created");
// });

// fs.writeFile("parDir/slkdf/index.txt", "hello world", (err) => {
//   if (err) console.log(err);
//   console.log("file created");
// });

function addLogs(message, userName, id) {
  const logFormate = `\n${new Date().toISOString()} - ${userName} - userID-> ${id} - ${message} \n`;
  fs.appendFile("logs.txt", logFormate, (error) => {
    if (error) {
      console.error(error);
    } else {
      console.log("Log created");
    }
  });
}
addLogs("user updated", "Ramzan", "sadkfjlkjlka34");

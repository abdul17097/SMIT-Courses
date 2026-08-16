const { error } = require("console");
const fs = require("fs");

// syncrhous
// fs.writeFileSync("test.txt", "Bhai Aap se ke buhat ...");

// Asyncrhous
// fs.writeFile("test123.txt", "Muje samj nahi lagi ... ", (error) => {
//   if (error) console.log(error);
//   console.log("File created Successfully");
// });

fs.readFile("test123.txt", "utf-8", (error, data) => {
  if (error) console.log(error);
  console.log(data);
});

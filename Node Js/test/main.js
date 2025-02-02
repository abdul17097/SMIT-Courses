const fs = require("fs");
console.log("create starting file");

// fs.writeFileSync("hello.txt", "hello world");
fs.writeFile("hello.txt", "hello world", (error) => {
  if (error) console.log(error);
  console.log("file created");
});

console.log("created starting file");

console.log("Reading file start");

// fs.writeFileSync("hello.txt", "hello world");
fs.readFile("hello.txt", "utf8", (error, data) => {
  if (error) console.log(error);
  console.log("file readed", data);
});

console.log("Reading file end");

fs.appendFileSync("hello.txt", "\n how are you");
fs.unlink("hello.txt", (error) => {
  if (error) console.log(error);
  console.log("file deleted");
});
if (fs.existsSync("hello.txt")) {
  console.log("File exsit");
} else {
  console.log("File not found");
}

fs.mkdir("parentDir", (error) => {
  if (error) console.log(error);
  console.log("parent directory created");
});
nested directory
fs.mkdir("parentDir/childDir", (error) => {
  if (error) console.log(error);
  console.log("parent directory created");
});
fs.writeFile("parentDir/childDir/index.txt", "I know", (error) => {
  if (error) console.log(error);
  console.log("file created");
});

fs.readdir("parentDir", (error, files) => {
  if (error) console.log(error);
  console.log("directory content:", files);
});

fs.rename("hello.txt", "index.txt", (error) => {
  if (error) console.log(error);
  console.log("file renamed");
});

function createLog(message) {
  fs.appendFile(
    "log.txt",
    `${new Date().toISOString()} - ${message}\n`,
    (error) => {
      if (error) console.log(error);
    }
  );
}

createLog("user created");
const config = {
  port: 3000,
  database: "mongodb",
};

fs.writeFileSync("config.json", JSON.stringify(config, null, 2));

const result = fs.readFileSync("config.json", "utf8");
console.log(result);

console.log(JSON.parse(result));

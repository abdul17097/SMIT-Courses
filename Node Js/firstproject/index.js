const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  const method = req.method;
  // const url = req.url;
  // console.log(url);
  const path = url.parse(req.url, true);

  console.log(path.pathname);

  if (method === "GET" && path.pathname === "/") {
    // res.writeHead(200, { "Content-Type": "text/html" });
    res.end(JSON.stringify({ hello: "world" }));
  } else if (method === "POST" && path.pathname === "/login") {
    // let response = {
    //   success: true,
    //   message: "Login successful",
    //   user: {
    //     id: 1,
    //     name: "John Doe",
    //     email: "john.doe@example.com",
    //   },
    // };
    let body = "";
    req.on("data", (data) => {
      body += data;
    });
    req.on("end", () => {
      const userData = JSON.parse(body);
      console.log(userData);
    });
    // res.end(JSON.stringify(response));
  } else if (method === "DELETE" && path.pathname === "/user-delete") {
    let response = {
      success: true,
      message: "User deleted successfully",
    };
    res.end(JSON.stringify(response));
  } else if (method === "PUT" && path.pathname === "/user-update") {
    let response = {
      success: true,
      message: "User updated successfully",
    };
    res.end(JSON.stringify(response));
  } else {
    res.end("page not found!");
  }
});

server.listen(5000, () => {
  console.log("Server is running on port 5000");
});

// http://localhost:4000

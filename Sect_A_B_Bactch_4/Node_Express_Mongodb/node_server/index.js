import http from "http";
import url from "url";

const server = http.createServer((req, res) => {
  let method = req.method;
  let parseUrl = url.parse(req.url);

  if (method === "POST" && parseUrl.pathname === "/create-blog") {
    res.end("Blog Created Successfully!");
  } else if (method === "POST" && parseUrl.pathname === "/login") {
    res.end("You have login Successfully!");
  } else {
    res.end("hello " + method);
  }
});

server.listen(3030, () => {
  console.log("http://localhost:3030");
});

const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  // Parse the URL and method from the request
  const parsedUrl = url.parse(req.url, true);
  const method = req.method;

  if (method === "GET") {
    // Example: Handling GET requests to the root path
    if (parsedUrl.pathname === "/") {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Hello! You made a GET request.");
    } else {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("404 Not Found");
    }
  } else if (method === "POST") {
    // Handle POST requests by collecting the data sent in the request body
    let body = "";

    // Collect data as it comes in
    req.on("data", (chunk) => {
      body += chunk;
    });

    // When all data is received, send a response
    req.on("end", () => {
      res.writeHead(200, { "Content-Type": "application/json" });
      // You can process the body further (e.g., parse JSON) if needed
      res.end(
        JSON.stringify({
          message: "Hello! You made a POST request.",
          receivedData: body,
        })
      );
    });

    // Handle potential errors during the data reception
    req.on("error", (err) => {
      console.error(err);
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Internal Server Error");
    });
  } else {
    // If the request method is not GET or POST, return a 405 Method Not Allowed
    res.writeHead(405, { "Content-Type": "text/plain" });
    res.end(`${method} method is not allowed.`);
  }
});

// Start the server on port 3000
server.listen(3000, () => {
  console.log("Server listening on port 3000");
});

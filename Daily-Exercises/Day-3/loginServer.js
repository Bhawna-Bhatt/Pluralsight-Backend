const http = require("http");
const PORT = 3000;
const host = "localhost";

const server = http.createServer((req, res) => {
  if (req.method === "POST" && req.url === "/login") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      const { username, password } = JSON.parse(body);
      if (username && password) {
        //console.log("Login Successful!");
        res.writeHead(200, { "Content-type": "text/plain" });
        res.end("Login Successful!");
      } else {
        res.writeHead(400, { "Content-type": "text/plain" });
        res.end("Login Failed: Username and password are required.");
      }
    });
  } else if (req.method === "GET") {
    let body = "";
    res.writeHead(200, { "Content-type": "text/plain" });
    res.end("Welcome to my Server");
  } else if (req.method === "PUT" && req.url === "/update") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      const { username, password } = JSON.parse(body);
      if (username) {
        //console.log("Login Successful!");
        res.writeHead(200, { "Content-type": "text/plain" });
        res.end("Update Successful!");
      } else {
        res.writeHead(400, { "Content-type": "text/plain" });
        res.end("Update Failed: Username is required.");
      }
    });
  } else if (req.method === "DELETE" && req.url === "/delete") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      const { username, password } = JSON.parse(body);
      if (username) {
        //console.log("Login Successful!");
        res.writeHead(200, { "Content-type": "text/plain" });
        res.end("Delete Successful!");
      } else {
        res.writeHead(400, { "Content-type": "text/plain" });
        res.end("Delete Failed: Username is required.");
      }
    });
  } else {
    res.writeHead(404, { "Content-type": "text/plain" });
    res.end("Route not found");
  }
});

server.listen(PORT, host, () => {
  console.log(`Server running on http://localhost:${PORT} host: ${host}`);
});

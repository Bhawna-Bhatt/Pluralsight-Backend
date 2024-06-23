const http = require("http");
const PORT = 3000;

const server = http.createServer((req, res) => {
  res.setHeader("Content-type", "text-plain");

  if (req.url === "/" && req.method === "GET") {
    res.statusCode = 200;
    res.end("Welcome to my Node.js server!\n");
  } else if (req.url === "/contact" && req.method === "GET") {
    res.statusCode = 200;
    res.end("Contact Us\n");
  } else if (req.url.startsWith("/about") && req.method === "GET") {
    res.statusCode = 200;
    res.end("About Us.\n");
  } else {
    res.statusCode = 404;
    res.end("404: File Not Found");
  }
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

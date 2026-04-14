const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Hello this is the first successful domain");
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
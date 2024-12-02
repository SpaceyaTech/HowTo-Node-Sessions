import { createServer } from "node:http";
const PORT = 3000;

const handleRequests = (req, res) => {
  console.log("Request received");

  // We have authenticated the request and now we can send back a response
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ message: "Hello World" }));
};

const server = createServer(handleRequests);

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`.yellow);
  console.log(`http://localhost:${PORT}`.green);
});

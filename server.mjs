import { createServer } from "node:http";

const arr = [1, 2, 3, 4, 5];

const user = {
  name: "John",
  age: 30,
};

const requestHandler = (req, res) => {
  console.log(req);
  res.end(JSON.stringify(user));
};

const server = createServer(requestHandler);
const port = 3000;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

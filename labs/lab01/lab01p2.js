// CRUD C-> POST(create something), R-> GET(read something ), U-> PUT(update), D->DELETE

import http from "http";
import fs from "fs";
const server = http.createServer((req, res) => {
  console.log(req.url);
  if (req.url === "/") {
    res.end("Hello world!!!");
  } else if (req.url === "/about") {
    res.end("Hello to the about page");
  } else if (req.url === "/contact") {
    const data = fs.readFileSync("./html/contact.html");
    res.end(data);
  } else if (req.url === "/methods") {
    if (req.method === "GET") {
      res.end("Hello to the GET method");
    } else if (req.method === "POST") {
      res.end("Hello to the POST method");
    } else if (req.method === "PUT") {
      res.end("Hello to the PUT method");
    }
  }
});

server.listen(8000, () => {
  console.log(`http://localhost:8000`);
});

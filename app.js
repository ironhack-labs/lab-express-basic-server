import Data from "./data/projects.json";
import Articles from "./data/articles.json";
const express = require("express");
const app = express;
const morgan = require("morgan");

app.use(express.static("public"));
app.use(express.json());
app.use(morgan("dev"));

app.listen(5005, () => {
  console.log("Running on port 5005");
});

// ROUTES
// Start defining your routes here:
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
});

app.get("/blog", (request, response) => {
  response.sendFile(__dirname + "/views/blog.html");
});

app.get("/api/projects", (req, res) => {
  res.json(Data);
});

app.get("/api/projects", (req, res) => {
  res.json(Articles);
});

app.get("/*", (req, res) => {
  res.send(
    res.status(404).sendFile(path.join(__dirname + "/views/not-found.html"))
  );
});

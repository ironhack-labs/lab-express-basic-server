const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(express.static("public"));
app.use(express.json());
app.use(morgan("dev"));

// ROUTES
// Start defining your routes here:
app.get("/", (req, res) => {
  console.log(req);
  res.sendFile(__dirname + "/views/home.html");
});

app.get("/blog", (req, res) => {
  res.sendFile(__dirname + "/views/blog.html");
});

const projects = require("./data/projects.json");
app.get("/api/projects", (req, res) => {
  res.json(projects);
});

const articles = require("./data/projects.json");
app.get("/api/articles", (req, res) => {
  res.json(articles);
});

app.use("*", (req, res, next) => {
  res.status(404).sendFile(__dirname + "views/not-found.html");
});

app.listen(5005, () => {
  console.log("Server listening on port 5005");
});

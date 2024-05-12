const express = require("express");
const morgan = require("morgan");
const projects = require("./data/projects.json");
const articles = require("./data/articles.json");

const app = express();

app.use(express.static("public"));
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res, next) => {
  res.sendFile(__dirname + "/views/home.html");
});

app.get("/blog", (req, res, next) => {
  res.sendFile(__dirname + "/views/blog.html");
});

app.get("/api/projects", (req, res, next) => {
  res.json(projects);
});

app.get("/api/articles", (req, res, next) => {
  res.json(articles);
});

app.get("*", (req, res, next) => {
  res.status(404).sendFile(__dirname + "/views/not-found.html");
});

app.listen(5005, () => console.log("Server running on port 5005"));

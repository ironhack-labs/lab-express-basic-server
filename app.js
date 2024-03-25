const express = require("express");
const logger = require("morgan");
const app = express();

const projects = require("./data/projects.json");
const articles = require("./data/articles.json");

app.use(express.static("public"));
app.use(express.json());
app.use(logger("dev"));

app.get("/", (req, res) => {
  console.log("test");
  res.sendFile(__dirname + "/views/home.html");
});

app.get("/blog", (req, res) => {
  res.sendFile(__dirname + "/views/blog.html");
});

app.get("/api/projects", (req, res) => {
  res.json(projects);
});

app.get("/api/articles", (req, res) => {
  res.json(articles);
});

app.get("*", (req, res) => res.sendFile(__dirname + "/views/not-found.html"));

app.listen(5005, () => console.log("listening on port 5005"));

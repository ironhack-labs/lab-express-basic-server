// IMPORT PACKAGES

const express = require("express");
const morgan = require("morgan");
const projects = require("./data/projects.json");
const articles = require("./data/articles.json");

// CREATE EXPRESS APP

const app = express();

// MIDDLEWARE

app.use(express.static("public"));
app.use(express.json());
app.use(morgan("dev"));

// ROUTES

app.get("/", (req, res) => {
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
app.get("*", (req, res) => {
  res.sendFile(__dirname + "/views/not-found-html");
});

// START THE SERVER

const port = 5005;
app.listen(port, () => {
  console.log("Server port 5005");
});

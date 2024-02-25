// IMPORT PACKAGES
const express = require("express");
const morgan = require("morgan");
const data = require("./data/projects.json");
const articles = require("./data/articles.json");

const PORT = process.env.PORT || 5005;

// CREATE EXPRESS APP
const app = express();

// MIDDLEWARE
// Here you should set up the required middleware:
app.use(express.static("public"));
app.use(express.json());
app.use(morgan("dev"));

// ROUTES
// Start defining your routes here:
app.get("/", (req, res, next) => {
  res.sendFile(__dirname + "/views/home.html");
});

app.get("/blog", (req, res, next) => {
  res.sendFile(__dirname + "/views/blog.html");
});

app.get("/api/projects", (req, res, next) => {
  res.json(data);
});
app.get("/api/articles", (req, res, next) => {
  res.json(articles);
});
app.get("/*", (req, res, next) => {
  res.sendFile(__dirname + "/views/not-found.html");
});

// START THE SERVER
app.listen(PORT, () => {
  console.log(`Port is listening on port ${PORT}`);
});

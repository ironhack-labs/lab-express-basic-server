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
// Iteration 3 | Create Home Route
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/home.html");
});

// Iteration 4 | Create Blog Route
app.get("/blog", (req, res) => {
  res.sendFile(__dirname + "/views/blog.html");
});

// Iteration 5 | JSON Data for Projects
app.get("/api/projects", (req, res) => {
  res.json(projects);
});

// Iteration 6 | JSON Data for Articles
app.get("/api/articles", (req, res) => {
  res.json(articles);
});

// Bonus: Iteration 7 | Create a 404 Route
app.get("*", (req, res) => {
  res.status(404).sendFile(__dirname + "/views/not-found.html");
});

// START THE SERVER
app.listen(5005, () => {
  console.log("Server listening on http://localhost:5005");
});

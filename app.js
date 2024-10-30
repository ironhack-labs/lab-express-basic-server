// IMPORT PACKAGES
const express = require("express");
const morgan = require("morgan");

// CREATE EXPRESS APP
const app = express();

// MIDDLEWARE
app.use(express.static("public"));
app.use(express.json());
app.use(morgan("dev"));

// Dummy data for projects and articles (replace with actual data)
const projects = require("./data/projects.json");

const articles = require("./data/articles.json");

// ROUTES
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/home.html");
});

app.get("/blog", (req, res) => {
  res.sendFile(__dirname + "/views/blog.html");
});

// Fix: Add leading slashes to API routes
app.get("/api/projects", (req, res) => {
  res.json(projects);
});

app.get("/api/articles", (req, res) => {
  res.json(articles);
});

// 404 Route
app.use((req, res, next) => {
  res.status(404).sendFile(__dirname + "/views/not-found.html");
});

// START THE SERVER
const PORT = 5005;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));

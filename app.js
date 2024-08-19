const express = require("express");
const morgan = require("morgan");
const path = require("path");
const projectsData = require("./data/projects.json");
const articlesData = require("./data/articles.json");

const app = express();

// Middleware
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(morgan("dev"));

// Routes
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "home.html"));
});

app.get("/blog", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "blog.html"));
});

app.get("/api/projects", (req, res) => {
  res.json(projectsData);
});

app.get("/api/articles", (req, res) => {
  res.json(articlesData);
});

// 404 Route
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "views", "not-found.html"));
});

// Server
const PORT = 5005;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:5005`);
});

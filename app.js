const express = require("express");
const morgan = require("morgan");
const path = require("path");
const projectsData = require("./data/projects.json");
const articlesData = require("./data/articles.json");
const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(morgan("dev"));

// ROUTES

// Iteration 3 | Home route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "home.html"));
});

// Iteration 4 | Blog route
app.get("/blog", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "blog.html"));
});

// Iteration 5 | Provide projects data as JSON
app.get("/api/projects", (req, res) => {
  res.json(projectsData);
});

// Iteration 6 | Provide articles data as JSON
app.get("/api/articles", (req, res) => {
  res.json(articlesData);
});

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "views", "not-found.html"));
});

// START THE SERVER
const PORT = 5005;
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
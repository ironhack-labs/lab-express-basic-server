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

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "views", "not-found.html"));
});

// START THE SERVER
const PORT = 5005;
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});

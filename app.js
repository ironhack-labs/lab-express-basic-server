const express = require("express");
const morgan = require("morgan");
const path = require("path");

const projects = require("./data/projects.json");
const articles = require("./data/articles.json");

// CREATE EXPRESS APP
const app = express();

// MIDDLEWARE
app.use(morgan("dev"));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// PORT
const PORT = 5005;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "home.html"));
});

app.get("/blog", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "blog.html"));
});

app.get("/api/projects", (req, res) => {
  res.json(projects);
});

app.get("/api/articles", (req, res) => {
  res.json(articles);
});

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "views", "not-found.html"));
});


// START THE SERVER
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});

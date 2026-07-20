// IMPORT PACKAGES
const express = require("express");
const morgan = require("morgan");

const projects = require("./data/projects.json");
const articles = require("./data/articles.json");

// CREATE EXPRESS APP
const app = express();

const PORT = 5005;

// MIDDLEWARE
app.use(express.static("public"));
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/home.html");
});

app.get("/blog", (req, res) => {
    res.sendFile(__dirname + "/views/blog.html");
});

// ROUTES
app.get("/api/projects", (req, res) => {
    res.json(projects);
});

app.get("/api/articles", (req, res) => {
    res.json(articles);
});

app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});

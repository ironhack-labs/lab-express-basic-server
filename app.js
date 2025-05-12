const express = require("express");
const morgan = require("morgan");
const app = express();
const PORT = 5005;

const projects = require("./data/projects.json");
const articles = require("./data/articles.json");

app.use(express.static("public"));
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
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

app.use((req, res) => {
  res.status(404).sendFile(__dirname + "/views/not-found.html");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

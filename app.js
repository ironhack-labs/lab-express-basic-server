// IMPORT PACKAGES
const dataProjects = require("./data/projects.json");
const dataArticles = require("./data/articles.json");

const express = require("express");
const morgan = require("morgan");

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
  res.sendFile(path.join(__dirname, "views", "blog.html"));
});

app.get("/api/projects", (req, res) => {
  res.json(dataProjects);
});
app.get("/api/articles", (req, res) => {
  res.json(datarticles);
});
// START THE SERVER
app.listen(5005, () => {
  console.log("Server listening on port 5005");
});

// IMPORT PACKAGES
const express = require("express");
const logger = require("morgan");
const projectsJSON = require("./data/projects.json");
const articlesJSON = require("./data/articles.json");

// CREATE EXPRESS APP
const app = express();

// MIDDLEWARE

app.use(express.static("public"));
app.use(express.json());
app.use(logger("dev"));

// ROUTES
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/home.html");
});
app.get("/blog", (req, res) => {
  res.sendFile(__dirname + "/views/blog.html");
});
app.get("/api/projects", (req, res) => {
  res.json(projectsJSON);
});
app.get("/api/articles", (req, res) => {
  res.json(articlesJSON);
});
// app.get("*", (req, res) => {
//   res.status(404).sendFile(__dirname + "/views/not-found.html");
// });
app.use((req, res, next) => {
  res.status(404).sendFile(__dirname + "/views/not-found.html");
});

// START THE SERVER
app.listen(5005, () => console.log("Server running on 5005."));

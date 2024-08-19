// IMPORT PACKAGES
const express = require("express");
const logger = require("morgan");
const projects = require("./data/projects.json");
const articles = require("./data/articles.json");

// CREATE EXPRESS APP
const app = express();

// MIDDLEWARE
// Here you should set up the required middleware:
app.use(express.static("public"));

app.use(express.json());

app.use(logger("dev"));

// ROUTES
// Start defining your routes here:
app.get("/", (request, response, next) => {
  response.sendFile(__dirname + "/views/home.html");
});

app.get("/blog", (request, response, next) => {
  response.sendFile(__dirname + "/views/blog.html");
});

app.get("/api/projects", (request, response) => {
  response.json(projects);
});

app.get("/api/articles", (request, response) => {
  response.json(articles);
});

app.get("*", (request, response, next) => {
  response.status(404).sendFile(__dirname + "/views/not-found.html");
});
// START THE SERVER
// Make your Express server listen on port 5005:
app.listen(5005, () => {
  console.log("App is running on port 5005");
});

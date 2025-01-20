// IMPORT PACKAGES
const projects = require("./data/projects.json");
const articles = require("./data/articles.json");

const express = require("express");
const morgan = require("morgan");
const port = 5005;


// CREATE EXPRESS APP
const app = express();


// MIDDLEWARE
app.use(express.static("public"));
app.use(express.json());
app.use(morgan("dev"));


// ROUTES

// get /home
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/home.html");
});

// get /blog
app.get("/blog", (req, res) => {
  res.sendFile(__dirname + "/views/blog.html");
});

// get projects.json
app.get("/api/projects", (req, res) => {
  res.json(projects);
});

// get articles.json
app.get("/api/articles", (req, res) => {
  res.json(articles);
});

// get /not-found
app.get("/", (req, res) => {
  res.status(404).sendFile(__dirname + "/views/not-found.html");
});


// START THE SERVER
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

const projects = require("./data/projects.json");
const articles = require("./data/articles.json");

// IMPORT PACKAGES
// Here you should import the required packages for your Express app: `express` and `morgan`

const express = require("express");
const logger = require("morgan");

// CREATE EXPRESS APP

const app = express();

// Here you should create your Express app:

// MIDDLEWARE
// Here you should set up the required middleware:init
// - `express.static()` to serve static files from the `public` folder
app.use(express.static("public"));
// - `express.json()` to parse incoming requests with JSON payloads
app.use(express.json());
// - `morgan` logger to log all incoming requests
app.use(logger("dev"));

// ROUTES
// Start defining your routes here:

app.get("/", (req, res, next) => {
  res.sendFile(__dirname + "/home.html");
});

app.get("/blog", (req, res, next) => {
  res.sendFile(__dirname + "/blog.html");
});

app.get("/api/projects", (req, res, next) => {
  res.json(projects);
});

app.get("/api/articles", (req, res, next) => {
  res.json(articles);
});

// START THE SERVER
// Make your Express server listen on port 5005:
app.listen(5005, () => {
  console.log("Express server listen on port 5005");
});

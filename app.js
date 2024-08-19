// IMPORT PACKAGES
// Here you should import the required packages for your Express app: `express` and `morgan`
const express = require("express");
const logger = require("morgan");
const projData = require("./data/projects.json");
const articles = require("./data/articles.json");

// CREATE EXPRESS APP
// Here you should create your Express app:

const server = express();

// MIDDLEWARE
// Here you should set up the required middleware:
// - `express.static()` to serve static files from the `public` folder
// - `express.json()` to parse incoming requests with JSON payloads
// - `morgan` logger to log all incoming requests
server.use(logger("dev"));
server.use(express.static("public"));
server.use(express.json());
// ROUTES
// Start defining your routes here:

server.get("/", (req, res, next) => {
  res.sendFile(__dirname + "/views/home.html");
});

server.get("/blog", (req, res, next) =>
  res.sendFile(__dirname + "/views/blog.html")
);

server.get("/api/projects", (req, res, next) => res.send(projData));

server.get("/api/articles", (req, res, next) => res.send(articles));

// START THE SERVER
// Make your Express server listen on port 5005:
server.listen(5005, () => console.log("Listening on port 5005"));

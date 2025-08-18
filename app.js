// IMPORT PACKAGES
// Here you should import the required packages for your Express app: `express` and `morgan`
const express = require("express");
const morgan = require("morgan");
const projects = require("./data/projects.json");
const articles = require("./data/articles.json");
// CREATE EXPRESS APP
// Here you should create your Express app:
const app = express();

// MIDDLEWARE
// Here you should set up the required middleware:
// - `express.static()` to serve static files from the `public` folder
app.use(express.static("public")); // ---middleware de terceiros pois ja vem prontos.

// - `express.json()` to parse incoming requests with JSON payloads
app.use(express.json()); // ---middleware de terceiros pois ja vem prontos.

// - `morgan` logger to log all incoming requests
app.use(morgan("dev")); // ---middleware de terceiros pois ja vem prontos.

// ROUTES
// Start defining your routes here:
//HOME - GET
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/home.html");
});

//BLOG - GET
app.get("/blog", (req, res) => {
  res.sendFile(__dirname + "/views/blog.html");
});

//PROJECT - JSON
app.get("/api/projects", (req, res) => {
  res.json(projects);
});

//ARTICLES- JSON
app.get("/api/articles", (req, res) => {
  res.json(articles);
});

//NOT-FOUND
app.use((req, res, next) => {
  res.status(404).sendFile(__dirname + "views/not-found.html");
});

// START THE SERVER
// Make your Express server listen on port 5005:
app.listen(5005, console.log("server is running!"));

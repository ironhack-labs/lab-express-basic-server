// IMPORT PACKAGES
const express = require("express");
const morgan = require("morgan");
const articles = require("./data/articles.json");
const projects = require("./data/projects.json");

// CREATE EXPRESS APP
const app = express();

// MIDDLEWARE
app.use(express.static("public"));
app.use(express.json());
app.use(morgan("dev"));

// ROUTES
// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

// GET / - Homepoage
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/home.html");
});

// GET / - Blogpost
app.get("/blog", (req, res) => {
  res.sendFile(__dirname + "/views/blog.html");
});

// GET / - /api/projects
app.get("/api/projects", (req, res) => {
  res.json(projects);
});
// GET / - /api/articles
app.get("/api/articles", (req, res) => {
  res.json(articles);
});
// 404 route not found
app.use((req, res) => {
  res.status(404).sendFile(__dirname + "/views/not-found.html");
});

// SERVER
app.listen(3000, () => {
  console.log("Server running on port 3000");
});

// Here you should import the required packages for your Express app: `express` and `morgan`

// CREATE EXPRESS APP
// Here you should create your Express app:

// MIDDLEWARE
// Here you should set up the required middleware:
// - `express.static()` to serve static files from the `public` folder
// - `express.json()` to parse incoming requests with JSON payloads
// - `morgan` logger to log all incoming requests

// ROUTES
// Start defining your routes here:

// START THE SERVER
// Make your Express server listen on port 5005:

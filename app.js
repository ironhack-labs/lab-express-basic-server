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
// - `express.json()` to parse incoming requests with JSON payloads
// - `morgan` logger to log all incoming requests
// GET /  - Home page
app.use(express.static("public"));
app.use(express.json());
app.use(morgan("dev"));

// ROUTES
// Start defining your routes here:
// Home page
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/home.html");
});

// Blog page
app.get("/blog", (req, res) => {
  res.sendFile(__dirname + "/views/blog.html");
});

// Projects API
app.get("/api/projects", (req, res) => {
  res.json(projects);
});

// Articles API
app.get("/api/articles", (req, res) => {
  res.json(articles);
});

// 404 Route
app.get("*", (req, res) => {
  res.sendFile(__dirname + "/views/not-found.html");
});


// START THE SERVER
// Make your Express server listen on port 5005:

app.listen(5005, () => {
  console.log("Server listening on port 5005");
});
// IMPORT PACKAGES
// Here you should import the required packages for your Express app: `express` and `morgan`

// Setup Express
const express = require("express");
const morgan = require("morgan");

// Data Import from JSON to variable
const projects = require("./data/projects.json");
const articles = require("./data/articles.json");

// Set app to express
const app = express();

// CREATE EXPRESS APP
// Here you should create your Express app:

// MIDDLEWARE
// Here you should set up the required middleware:
// - `express.static()` to serve static files from the `public` folder
// - `express.json()` to parse incoming requests with JSON payloads
// - `morgan` logger to log all incoming requests

app.use(express.static("public"));
app.use(express.json());
app.use(morgan("dev"));

// ROUTES
// Start defining your routes here:

// Home Page
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/home.html");
});

// Blog
app.get("/blog", (req, res) => {
  res.sendFile(__dirname + "/views/blog.html");
});

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/views/not-found.html");
});

// JSON Data
app.get("/api/projects", (req, res) => {
  res.json(projects);
});

app.get("/api/articles", (req, res) => {
  res.json(articles);
});

// START THE SERVER
// Make your Express server listen on port 5005:

app.listen(5005, () => {
  console.log("my server is running on: ", `http://localhost:5005`);
});

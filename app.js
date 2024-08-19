// IMPORT PACKAGES
// Here you should import the required packages for your Express app: `express` and `morgan`
const express = require("express");
const logger = require("morgan");

const articles = require("./data/articles.json");
// CREATE EXPRESS APP
// Here you should create your Express app:
const app = express();
// MIDDLEWARE
// Here you should set up the required middleware:
// - `express.static()` to serve static files from the `public` folder
// - `express.json()` to parse incoming requests with JSON payloads
// - `morgan` logger to log all incoming requests
app.use(logger("dev"));
app.use(express.json());
app.use(express.static("public"));

// ROUTES
// Start defining your routes here:

// Get homepage
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/home.html");
});

app.get("/blog", (rea, res) => {
  res.sendFile(__dirname + "/views/blog.html");
});

app.get("/api/projects", (req, res) => {
  res.sendFile(__dirname + "/data/projects.json");
});

app.get("/api/articles", (req, res) => {
  res.json(articles);
});

app.get("*", (req, res) => {
  res.json(__dirname + "views/not-found.html");
});
// START THE SERVER
// Make your Express server listen on port 5005:
app.listen(5005, () => {
  console.log("Server is running on port 3000");
});

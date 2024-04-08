// IMPORT PACKAGES
// Here you should import the required packages for your Express app: `express` and `morgan`

// CREATE EXPRESS APP
// Here you should create your Express app:

const express = require("express", 5005);
const path = require("path");

const projects = require("./data/projects.json");
const articles = require("./data/articles.json");

const app = express();
const morgan = require("morgan");

// MIDDLEWARE
// Here you should set up the required middleware:
// - `express.static()` to serve static files from the `public` folder
app.use(express.static("public"));
// - `express.json()` to parse incoming requests with JSON payloads
app.use(express.json());
// - `morgan` logger to log all incoming requests
app.use(morgan("dev"));

// ROUTES
// Start defining your routes here:

app.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "views", "home.html"));
});
app.get("/blog", (req, res, next) => {
  res.sendFile(path.join(__dirname, "views", "blog.html"));
});
app.get("/api/projects", (req, res, next) => {
  res.json(projects);
});
app.get("/api/articles", (req, res, next) => {
  res.json(articles);
});

app.get("*", (req, res, next) => {
  res.sendFile(path.join(__dirname, "views", "not-found.html"));
});

// START THE SERVER
// Make your Express server listen on port 5005:

app.listen(5005, () => {
  console.log("Server listening on port 5005");
});

// IMPORT PACKAGES
// Here you should import the required packages for your Express app: `express` and `morgan`
const express = require("express");
const morgan = require("morgan");
const app = express();
const path = require("path");

const projectsData = require("./data/projects.json");
const articlesData = require("./data/articles.json");

// CREATE EXPRESS APP
// Here you should create your Express app:
const PORT = process.env.PORT || 5005;

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
app.get("/", (req, res) => {
  console.log("inside the home route");
  res.sendFile(path.join(__dirname, "views", "home.html"));
});

//IT 4 Blog route
app.get("/blog", (req, res) => {
  console.log("inside blog");
  res.sendFile(path.join(__dirname, "views", "blog.html"));
});

//IT5 JSON DATA PROJECTS
app.get("/api/projects", (req, res) => {
  console.log("inside projects api");
  res.send(projectsData);
});

//IT6 JSON DATA for articles
app.get("/api/articles", (req, res) => {
  console.log("inside api/articles");
  res.send(articlesData);
});

//IT7 Create a 404 route
app.get("*", (req, res) => {
  console.log("inside page not found ");
  res.sendFile(path.join(__dirname, "views", "not-found.html"));
});

// START THE SERVER
// Make your Express server listen on port 5005:
app.listen(PORT, () => console.log(`server listening to the port ${PORT}`));

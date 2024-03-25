// IMPORT PACKAGES
const express = require("express");
const morgan = require("morgan");

// IMPORT JSON DATA
const projects = require("./data/projects.json");

// CREATE EXPRESS APP
const app = express();

// MIDDLEWARE
app.use(express.static("public"));
app.use(express.json());
app.use(morgan("dev"));

// ROUTES
// Start defining your routes here:

// Route to serve JSON data for projects
app.get("/api/projects", (req, res) => {
  res.json(projects);
});

// Route to serve the home page
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

// Route to serve the blog page
app.get("/blog", (req, res) => {
  res.sendFile(__dirname + "/views/blog.html");
});

// START THE SERVER
app.listen(5005, () => {
  console.log("Server listening on port 5005");
});

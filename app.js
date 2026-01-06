// IMPORT PACKAGES
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

// IMPORT PACKAGES
const express = require("express");
const morgan = require("morgan");
const path = require("path");

// IMPORT DATA
const projects = require("./data/projects.json");

// CREATE EXPRESS APP
const app = express();

// PORT
const PORT = 5005;

// MIDDLEWARE
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(morgan("dev"));

// ROUTES

// Home page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "home.html"));
});

// Blog page
app.get("/blog", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "blog.html"));
});

// API Projects
app.get("/api/projects", (req, res) => {
  res.json(projects);
});

// 404 Page
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "views", "not-found.html"));
});

// START THE SERVER
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

// IMPORT PACKAGES
// Here you should import the required packages for your Express app: `express` and `morgan`

const express = require("express");
const morgan = morgan("express");

// CREATE EXPRESS APP
// Here you should create your Express app:
const app = express();

// MIDDLEWARE
// Here you should set up the required middleware:
// - `express.static()` to serve static files from the `public` folder
// - `express.json()` to parse incoming requests with JSON payloads
// - `morgan` logger to log all incoming requests
app.use(express.static("public"));
app.use(express.json());
app.use(express("dev"));

// ROUTES
// Start defining your routes here:
// GET - Homepage
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});
//Get - Plog page
app.get("/blog", (req, res) => {
  res.sendFile(__dirname + "/views/blog.html");
});
// Get/api/ projects
app.get("/api/projects", (req, res) => {
  res.json(projects);
});
// Get /api/ articles
app.get("/api/articles", (req, res) => {
  res.json(articles);
});
// Get - 404 error / Route
app.get((req, res, next) => {
  res.status(404).sendFile(__dirname + "/views/not-found.html");
});

// START THE SERVER
// Make your Express server listen on port 5005:
app.listen(5005, () => {
  console.log("Server listenting in port 5005");
});

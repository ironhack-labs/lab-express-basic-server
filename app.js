// IMPORT PACKAGES
// Here you should import the required packages for your Express app: `express` and `morgan`
const express = require("express");
const morgan = require("morgan");
const app = express();
// CREATE EXPRESS APP
app.use(express.static("public"));
app.use(express.json());
app.use(morgan("dev"));
// Here you should create your Express app:

app.listen(5005, () => {
  console.log("Server listening on port 5005");
});
// MIDDLEWARE
// Here you should set up the required middleware:
// - `express.static()` to serve static files from the `public` folder
// - `express.json()` to parse incoming requests with JSON payloads
// - `morgan` logger to log all incomxng requests

// ROUTES
// Start defining your routes here:
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/home.html");
});
app.get("/blog", (req, res) => {
  res.sendFile(__dirname + "/views/blog.html");
});
app.get("/api/projects", (req, res) => {
  res.sendFile(__dirname + "/data/projects.json");
});
app.get("/api/articles", (req, res) => {
  res.sendFile(__dirname + "/data/articles.json");
});
app.use((req, res, next) => {
  res.status(404).sendFile(__dirname + "/views/not-found.html");
});
// START THE SERVER
// Make your Express server listen on port 5005:

// IMPORT PACKAGES
// Here you should import the required packages for your Express app: `express` and `morgan`
const express = require("express");
const logger = require("morgan");
const dataProject = require("./data/projects.json");
const dataArticle = require("./data/articles.json");


// CREATE EXPRESS APP
// Here you should create your Express app:
const app = express();

// MIDDLEWARE
// Here you should set up the required middleware:
// - `express.static()` to serve static files from the `public` folder
app.use(express.static("public"));
// - `express.json()` to parse incoming requests with JSON payloads
app.use(express.json());
// - `morgan` logger to log all incoming requests
app.use(logger("dev"));

// ROUTES
// Start defining your routes here:

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/home.html");
});

//Blog page
app.get("/blog", (req, res) => {
  res.sendFile(__dirname + "/views/blog.html");
});

app.get("/api/projects", (req, res) => {
  res.json(dataProject);
});

app.get("/api/articles", (req, res) => {
  res.json(dataArticle);
});

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/views/not-found.html");
});

// START THE SERVER
// Make your Express server listen on port 5005:
const PORT = 5005;
app.listen(PORT, () => {
  console.log(`The server is running on ${PORT}`);
});

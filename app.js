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

app.use(express.static("public"));
app.use(express.json());
app.use(morgan("dev"));

// ROUTES
// Start defining your routes here:

// START THE SERVER

app.get("*", (req, res) => {
  res.send("<h1> 404  </h1> <h3>page not found </h3>");
});

app.get("/blog", (req, res) => {
  res.sendFile(__dirname + "/views/blog.html");
});

app.get("/api/projects", (req, res) => {
  res.json(projects);
});

app.get("/api/articles", (req, res) => {
  res.json(articles);
});

app.get("*", (req, res) => {
  res.send("<h1> 404 page not found </h1>");
});

app.listen(5005, () => {
  console.log("Server is running on port 5005");
});

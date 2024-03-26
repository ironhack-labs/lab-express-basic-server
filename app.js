// IMPORT PACKAGES
// Here you should import the required packages for your Express app: `express` and `morgan`
const express = require("express");
const morgan = require("morgan");
const PORT = process.env.PORT || 5005;
const data = require("./data/projects.json");
const articles = require("./data/articles.json");
// CREATE EXPRESS APP
const app = express();

// MIDDLEWARE
// Here you should set up the required middleware:
app.use(express.static("public"));
app.use(express.json());
app.use(morgan("dev"));

// ROUTES
// Start defining your routes here:

// START THE SERVER
app.listen(5005, () => {
  console.log("Server listening on port", PORT);
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/home.html");
});

app.get("/blog", (req, res) => {
  res.sendFile(__dirname + "/views/blog.html");
});

app.get("/api/projects", (req, res) => {
  res.json(data);
});

app.get("/api/articles", (req, res) => {
  res.json(articles);
});

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/views/not-found.html");
});

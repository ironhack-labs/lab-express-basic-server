// IMPORT PACKAGES
// Here you should import the required packages for your Express app: `express` and `morgan`
const express = require("express");
const logger = require("morgan");
const PORT = process.env.PORT || 5005;
const projects = __dirname + "/data/projects.json";
const articles = __dirname + "/data/articles.json";
// CREATE EXPRESS APP
// Here you should create your Express app:
const app = express();
// MIDDLEWARE
// Here you should set up the required middleware:
app.use(express.static("public"));
app.use(express.json());
app.use(logger("dev"));

// ROUTES
// Start defining your routes here:
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/home.html");
});

app.get("/blog", (req, res) => {
  res.sendFile(__dirname + "/views/blog.html");
});

app.get("/api/projects", (req, res) => {
  res.sendFile(projects);
});

app.get("/api/articles", (req, res) => {
  res.sendFile(articles);
});

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/views/not-found.html");
});
// START THE SERVER
// Make your Express server listen on port 5005:
app.listen(PORT, () => {
  console.log("listening well on port ", PORT);
});

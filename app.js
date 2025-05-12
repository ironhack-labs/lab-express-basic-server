// IMPORT PACKAGES
// Here you should import the required packages for your Express app: `express` and `morgan`
const express = require("express");
const morgan = require("morgan");
const path = require("path");
const fs = require("fs");

// CREATE EXPRESS APP
// Here you should create your Express app:
const app = express();

// MIDDLEWARE
// Here you should set up the required middleware:
// - `express.static()` to serve static files from the `public` folder
// - `express.json()` to parse incoming requests with JSON payloads
// - `morgan` logger to log all incoming requests
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

// ROUTES
// Start defining your routes here:

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "home.html"));
});

app.get("/blog", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "blog.html"));
});

app.get("/api/projects", (req, res) => {
  const projectsData = JSON.parse(
    fs.readFileSync(path.join(__dirname, "data", "projects.json"), "utf8")
  );
  res.json(projectsData);
});

app.get("/api/articles", (req, res) => {
  const articlesData = JSON.parse(
    fs.readFileSync(path.join(__dirname, "data", "articles.json"), "utf8")
  );
  res.json(articlesData);
});

app.get("*", (req, res) => {
  res.status(404).sendFile(path.join(__dirname, "views", "not-found.html"));
});

// START THE SERVER
// Make your Express server listen on port 5005:
const PORT = 5005;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

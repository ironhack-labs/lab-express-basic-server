console.log("starting the server");

// IMPORT PACKAGES
// Here you should import the required packages for your Express app: `express` and `morgan`
const express = require("express");
const morgan = require("morgan");
const path = require("path");

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
app.use(morgan("dev"));

// ROUTES
// Start defining your routes here:
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "home.html"));
});

app.get("/blog", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "blog.html"));
});

//API routes
const projectsData = require("./data/projects.json");
app.get("/api/projects", (req, res) => {
  res.json(projectsData);
});

const articlesData = require("./data/articles.json");
app.get("/api/articles", (req, res) => {
  res.json(articlesData);
});

// advanced routing
// route to get one specific project based on its id
app.get("/api/projects/:id", (req, res) => {
  // route queries are not visible on the actual route, but only in request
  // add query with ?key=value&key2=value2 in the url
  console.log("Queries", req.query);

  // this create a route parameter called id
  const { id } = req.params;
  const project = projectsData.find((project) => project.id === id);
  if (project) {
    res.json(project);
  } else {
    res.status(404).json({ error: "Project not found" });
  }
});

//notfound route
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "views", "not-found.html"));
});

// START THE SERVER
// Make your Express server listen on port 5005:
const port = 5005;
app.listen(`${port}`, () => {
  console.log(`listening on port ${port}`);
});

// IMPORT PACKAGES
// Here you should import the required packages for your Express app: `express` and `morgan`
const express = require("express");
const morgan = require("morgan");
const articles = require("./data/articles.json");
const projects = require("./data/projects.json");

const PORT = 5005;
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
app.use(morgan("dev"));
// ROUTES
// Start defining your routes here:
app.get("/", (request, response, next) => {
  response.sendFile(__dirname + "/views/home.html");
});
app.get("/blog", (request, response, next) => {
  response.sendFile(__dirname + "/views/blog.html");
});
app.get("/api/projects", (request, response, next) => {
  response.json(projects);
});
app.get("/api/articles", (request, response, next) => {
  response.json(articles);
});

app.get("*", (request, response, next) => {
  response.sendFile(__dirname + "/views/not-found.html");
});

// START THE SERVER
// Make your Express server listen on port 5005:
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

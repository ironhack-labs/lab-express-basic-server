// IMPORT PACKAGES
// Here you should import the required packages for your Express app: `express` and `morgan`
const express = require("express");
const morgan = require("morgan");

// CREATE EXPRESS APP
const app = express();

// Here you should create your Express app:
app.get("/books", (req, res) => {
  res.json(allBooks);
});

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

// START THE SERVER
// Make your Express server listen on port 5005:
app.listen(5005, () => {
  console.log("server listening on part 5005");
});

app.get("/", (req, res) => {
  console.log(__dirname);
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/blog", (req, res) => {
  console.log(__dirname);
  res.sendFile(__dirname + "/views/blog.html");
});

app.get("/blog", (req, res) => {
  console.log(__dirname);
  res.sendFile(__dirname + "/views/blog.html");
});

app.get("/api/projects", (req, res) => {
  console.log(__dirname);
  res.sendFile(__dirname + "/data/projects.json");
});

app.get("/api/articles", (req, res) => {
  console.log(__dirname);
  res.sendFile(__dirname + "/data/articles.json");
});

app.get("*", (req, res) => {
  console.log(__dirname);
  res.sendFile(__dirname + "views/not-found.html");
});

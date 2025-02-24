// IMPORT PACKAGES
const express = require("express");
const morgan = require("morgan");
// Here you should import the required packages for your Express app: `express` and `morgan`

// CREATE EXPRESS APP
const app = express();
// Here you should create your Express app:

// MIDDLEWARE
app.use(express.static("public"));
app.use(express.json());
app.use(morgan("dev"));

// Here you should set up the required middleware:
// - `express.static()` to serve static files from the `public` folder
// - `express.json()` to parse incoming requests with JSON payloads
// - `morgan` logger to log all incoming requests

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

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/views/not-found.html");
});

app.get("/api/articles", (req, res) => {
  res.sendFile(__dirname + "/data/articles.json");
});

// START THE SERVER
const PORT = 5005;
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
// Make your Express server listen on port 5005:

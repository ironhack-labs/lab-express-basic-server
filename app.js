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
app.use(express.static("public"));

// - `express.json()` to parse incoming requests with JSON payloads
app.use(express.json());

// - `morgan` logger to log all incoming requests
app.use(morgan("dev"));

// ROUTES
// Start defining your routes here:
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "home.html"));
});

app.get("/blog", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "blog.html"));
});

app.get("/api/projects", (req, res) => {
  fs.readFile(
    path.join(__dirname, "data", "projects.json"),
    "utf8",
    (err, data) => {
      if (err) {
        res.status(500).send("Error reading projects data");
      } else {
        res.json(JSON.parse(data));
      }
    }
  );
});

app.get("/api/articles", (req, res) => {
  fs.readFile(
    path.join(__dirname, "data", "articles.json"),
    "utf8",
    (err, data) => {
      if (err) {
        res.status(500).send("Error reading articles data");
      } else {
        res.json(JSON.parse(data));
      }
    }
  );
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "not-found.html"));
});

// START THE SERVER
// Make your Express server listen on port 5005:
const PORT = 5005;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

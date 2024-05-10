// IMPORT PACKAGES
// Here you should import the required packages for your Express app: `express` and `morgan`
const express = require("express");
const morgan = require("morgan");
const fs = require("fs");
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
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/blog", (req, res) => {
  res.sendFile(__dirname + "/views/blog.html");
});

// GET api projects
app.get("/api/projects", (req, res) => {
  fs.readFile(
    path.join(__dirname, "data", "projects.json"),
    "utf8",
    (err, data) => {
      if (err) {
        console.error("Error reading projects file:", err);
        res.status(500).json({ error: "Internal Server Error" });
        return;
      }
      const projects = JSON.parse(data);
      res.json(projects);
    }
  );
});

app.get("/api/articles", (req, res) => {
  fs.readFile(
    path.join(__dirname, "data", "articles.json"),
    "utf8",
    (err, data) => {
      if (err) {
        console.error("Error reading articles file:", err);
        res.status(500).json({ error: "Internal Server Error" });
        return;
      }
      const projects = JSON.parse(data);
      res.json(projects);
    }
  );
});

// START THE SERVER
// Make your Express server listen on port 5005:
app.listen(5005, () => {
  console.log("Server listening on port 5005");
});

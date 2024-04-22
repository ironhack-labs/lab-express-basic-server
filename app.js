// IMPORT PACKAGES
const express = require("express");
const morgan = require("morgan");
const fs = require("fs"); // File system module to read files

// CREATE EXPRESS APP
const app = express();

// MIDDLEWARE
app.use(morgan("dev")); // Log all incoming requests
app.use(express.static("public")); // Serve static files from 'public' folder
app.use(express.json()); // Parse incoming JSON payloads

// ROUTES
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/home.html");
});
app.get("/blog", (req, res) => {
  res.sendFile(__dirname + "/views/blog.html");
});
app.get("/api/projects", (req, res) => {
  // Read the projects.json file from the data directory and parse it to JSON
  fs.readFile(__dirname + "/data/projects.json", "utf8", (err, data) => {
    if (err) {
      res.status(500).send("Error reading the projects file.");
      return;
    }
    res.json(JSON.parse(data));
  });
});
app.get("/api/articles", (req, res) => {
  // Read the articles.json file from the data directory and parse it to JSON
  fs.readFile(__dirname + "/data/articles.json", "utf8", (err, data) => {
    if (err) {
      res.status(500).send("Error reading the articles file.");
      return;
    }
    res.json(JSON.parse(data));
  });
});
// 404 error handling
app.use((req, res, next) => {
  res.status(404).sendFile(__dirname + "/views/not-found.html");
});

// START THE SERVER
app.listen(5005, () => console.log("My first app listening on port 5005!"));

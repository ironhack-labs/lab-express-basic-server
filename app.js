// Import required packages
const express = require("express");
const path = require("path");
const articles = require("./data/articles.json");

// Create an instance of Express
const app = express();

// Middleware setup
// Serve static files from the public folder
app.use(express.static("public"));

// Parse JSON payloads
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/home.html");
});

// Route handler for GET /api/projects
app.get("/api/projects", (req, res) => {
  // Send the JSON data for projects
  res.json({ articles: articles });
  res.json({ articles: articles });
});

// Route handler for GET /api/articles
app.get("/api/articles", (req, res) => {
  // Send the JSON data for articles
});

// Route handler for 404 (Not Found) errors
app.get("*", (req, res) => {
  // Send the not-found.html file as a response
  res.sendFile(path.join(__dirname, "views", "not-found.html"));
});

// Set up the server to listen on port 5005
const PORT = 5005;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

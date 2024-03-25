// IMPORT PACKAGES
const express = require("express");
const morgan = require("morgan");
const path = require("path");

// CREATE EXPRESS APP
const app = express();

// MIDDLEWARE
app.use(express.static("public"));
app.use(express.json());
app.use(morgan("dev"));

// ROUTES
// Route to serve the home.html file
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "home.html"));
});

// Route to serve the blog.html file
app.get("/blog", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "blog.html"));
});

// START THE SERVER
app.listen(5005, () => {
  console.log("Server listening on port 5005");
});

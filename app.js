// IMPORT PACKAGES
const express = require('express');
const morgan = require('morgan');
const path = require('path');

// Import the JSON data
const projects = require('./data/projects.json');
const articles = require('./data/articles.json');

// CREATE EXPRESS APP
const app = express();

// MIDDLEWARE
app.use(express.static('public')); // Serve static files from the 'public' folder
app.use(express.json()); // Parse incoming requests with JSON payloads
app.use(morgan('dev')); // Log all incoming requests


// ROUTES


app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/home.html");
});

app.get("/blog", (req, res) => {
  res.sendFile(__dirname + "/views/blog.html");
});


app.get("/api/projects", (req, res) => {
  res.json(projects); // Send JSON data
});

app.get("/api/articles", (req, res) => {
  res.json(articles); // Send JSON data
});


app.get('*', (req, res) => {
    res.status(404).sendFile(__dirname + '/views/not-found.html');
});


// START THE SERVER
const PORT = 5005;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

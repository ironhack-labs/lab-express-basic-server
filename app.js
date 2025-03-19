// IMPORT PACKAGES
const express = require('express');
const morgan = require('morgan');
const path = require('path'); // Import the 'path' module to handle file paths

// CREATE EXPRESS APP
const app = express();

// MIDDLEWARE
app.use(express.static('public')); // Serve static files from the 'public' folder
app.use(express.json()); // Parse incoming requests with JSON payloads
app.use(morgan('dev')); // Log all incoming requests using the 'dev' format

// IMPORT JSON DATA
const projects = require('./data/projects.json'); // Import projects data
const articles = require('./data/articles.json'); // Import articles data

// ROUTES
// Route handler for GET /
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'home.html'));
});

// Route handler for GET /blog
app.get('/blog', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'blog.html'));
});

// Route handler for GET /api/projects
app.get('/api/projects', (req, res) => {
  res.json(projects); // Respond with the projects JSON data
});

// Route handler for GET /api/articles
app.get('/api/articles', (req, res) => {
  res.json(articles); // Respond with the articles JSON data
});

// START THE SERVER
const PORT = 5005;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
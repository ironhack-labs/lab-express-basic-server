// IMPORT PACKAGES
const express = require('express');
const morgan = require('morgan');
const path = require('path');

// Import JSON data
const projects = require('./data/projects.json');
const articles = require('./data/articles.json');

// CREATE EXPRESS APP
const app = express();

// MIDDLEWARE
// Serve static files from the 'public' folder
app.use(express.static('public'));

// Parse incoming requests with JSON payloads
app.use(express.json());

// Morgan logger to log all incoming requests
app.use(morgan('dev'));

// ROUTES

// Home route - GET /
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'home.html'));
});

// Blog route - GET /blog
app.get('/blog', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'blog.html'));
});

// API route for projects - GET /api/projects
app.get('/api/projects', (req, res) => {
  res.json(projects);
});

// API route for articles - GET /api/articles
app.get('/api/articles', (req, res) => {
  res.json(articles);
});

// 404 catch-all route (must be last)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'not-found.html'));
});

// START THE SERVER
app.listen(5005, () => {
  console.log('Server is running on http://localhost:5005');
});
// IMPORT PACKAGES
const express = require('express');
const morgan = require('morgan');
const path = require('path');

// IMPORT DATA
const projects = require('./data/projects.json');
const articles = require('./data/articles.json');

// CREATE EXPRESS APP
const app = express();

// MIDDLEWARE
app.use(express.static('public'));
app.use(express.json());
app.use(morgan('dev'));

// ROUTES

// Iteration 3 | Home Route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'home.html'));
});

// Iteration 4 | Blog Route
app.get('/blog', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'blog.html'));
});

// Iteration 5 | JSON Data for Projects
app.get('/api/projects', (req, res) => {
  res.json(projects);
});

// Iteration 6 | JSON Data for Articles
app.get('/api/articles', (req, res) => {
  res.json(articles);
});

// Bonus: Iteration 7 | 404 Route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'not-found.html'));
});

// START THE SERVER
app.listen(5005, () => {
  console.log('Server listening on port 5005');
});

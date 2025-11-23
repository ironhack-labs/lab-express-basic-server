const express = require('express');
const morgan = require('morgan');
const path = require('path');

// Import JSON data
const projects = require('./data/projects.json');
const articles = require('./data/articles.json');

const app = express();
const PORT = 5005;

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'home.html'));
});

app.get('/blog', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'blog.html'));
});

// API routes
app.get('/api/projects', (req, res) => {
  res.json(projects);
});

app.get('/api/articles', (req, res) => {
  res.json(articles);
});

// 404 catch-all
app.get('*', (req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'views', 'not-found.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

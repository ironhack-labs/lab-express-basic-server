// IMPORT PACKAGES
const express = require('express');
const morgan = require('morgan');

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

// Home page
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/home.html');
});

// Blog page
app.get('/blog', (req, res) => {
  res.sendFile(__dirname + '/views/blog.html');
});

// Projects API
app.get('/api/projects', (req, res) => {
  res.json(projects);
});

// Articles API
app.get('/api/articles', (req, res) => {
  res.json(articles);
});

// START THE SERVER
app.listen(5005, () => {
  console.log('Server is listening on http://localhost:5005');
});
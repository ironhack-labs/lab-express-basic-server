// IMPORT PACKAGES
const express = require('express');
const logger = require('morgan');
const projects = require('./data/projects');
const articles = require('./data/articles');
const PORT = 5005;

// CREATE EXPRESS APP
const app = express();

// MIDDLEWARE
app.use(logger('dev'));
app.use(express.static('public'));
app.use(express.json());

// ROUTES
app.get('/', (req, res, next) => {
  res.sendFile(__dirname + '/views/home.html');
});

app.get('/api/projects', (req, res, next) => {
  res.json(projects);
});

app.get('/api/articles', (req, res, next) => {
  res.json(articles);
});

app.use((req, res) => {
  res.status(404).sendFile(__dirname + '/views/not-found.html');
});

// START THE SERVER
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

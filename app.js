// IMPORT PACKAGES
// Here you should import the required packages for your Express app: `express` and `morgan`

const express = require('express');
const morgan = require('morgan');
const path = require('path');
const projects = require('./data/projects.json');
const articles = require('./data/articles.json');
// CREATE EXPRESS APP
// Here you should create your Express app:

const app = express();

// MIDDLEWARE
// Here you should set up the required middleware:
// - `express.static()` to serve static files from the `public` folder
// - `express.json()` to parse incoming requests with JSON payloads
// - `morgan` logger to log all incoming requests

app.use(express.static('public')); // Serve static files from the 'public' directory
app.use(express.json());           // Parse incoming JSON requests
app.use(morgan('dev'));             // Log incoming requests

// ROUTES
// Route for GET /
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/views/home.html'));
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/views/blog.html'));
});

app.get('/api/projects', (req, res) => {
  res.json(projects);  // Send JSON data as a response
});

// Route for GET /api/articles
app.get('/api/articles', (req, res) => {
  res.json(articles);  // Send JSON data for articles as a response
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'not-found.html')); // Serve not-found.html
});
// Start defining your routes here:
const PORT = 5005;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});


// START THE SERVER
// Make your Express server listen on port 5005:

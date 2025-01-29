// IMPORT PACKAGES
// Here you should import the required packages for your Express app: `express` and `morgan`
const express = require('express');
const morgan = require('morgan');
const projects = require('./data/projects.json');
const articles = require('./data/articles.json');


// CREATE EXPRESS APP
// Here you should create your Express app:
const app = express();
const PORT = 5005;


// MIDDLEWARE
// Here you should set up the required middleware:
// - `express.static()` to serve static files from the `public` folder
// - `express.json()` to parse incoming requests with JSON payloads
// - `morgan` logger to log all incoming requests
app.use(express.static('public')); // serve static files from the `public` folder
app.use(express.json()); // parse incoming requests with JSON payloads
app.use(morgan('dev')); // logger to log all incoming requests


// ROUTES
// Start defining your routes here:
// Route to home.html
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/views/home.html");
});

// Route to blog.html
app.get('/blog', (req, res) => {
    res.sendFile(__dirname + "/views/blog.html");
});

// Route to serve data from the projects JSON
app.get('/api/projects', (req, res) => {
    res.json(projects);
});

// Route to serve data from the articles JSON
app.get('/api/articles', (req, res) => {
    res.json(articles);
});

// Route 404 - Page not found
app.use((req, res, next) => {
    res.status(404).sendFile(__dirname + "/views/not-found.html");
});


// START THE SERVER
// Make your Express server listen on port 5005:
app.listen(PORT, () => {
    console.log(`Server listening on port http://localhost:${PORT}`);
});
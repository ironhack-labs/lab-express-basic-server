// IMPORT PACKAGES
const express = require('express');
const morgan = require('morgan');
const projects = require('./data/projects.json'); // Import the JSON file
const articles = require('./data/articles.json'); // Import the JSON file

// CREATE EXPRESS APP
const app = express();

// MIDDLEWARE
// Serve static files from the public folder
app.use(express.static('public'));
// Parse incoming requests with JSON payloads
app.use(express.json());
// Log all incoming requests
app.use(morgan('dev'));

// ROUTES
// Define a route for the home page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/home.html');
});

// Define a route for the blog page
app.get('/blog', (req, res) => {
    res.sendFile(__dirname + '/views/blog.html');
});

// Define a route to return JSON data for projects
app.get('/api/projects', (req, res) => {
    res.json(projects); // Send the imported JSON data as the response
});

// Define a route to return JSON data for articles
app.get('/api/articles', (req, res) => {
    res.json(articles); // Send the imported JSON data as the response
});

// Define a route for 404 (Not Found)
app.use ('*', (req, res) => {
    res.status(404).sendFile(__dirname + '/views/not-found.html');
});

// START THE SERVER
// Make your Express server listen on port 5005
const PORT = 5005;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

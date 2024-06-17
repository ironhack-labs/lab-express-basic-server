// IMPORT PACKAGES
// Here you should import the required packages for your Express app: `express` and `morgan`
const express = require('express');
const morgan = require('morgan');

// CREATE EXPRESS APP
// Here you should create your Express app:
const app = express();
const port = process.env.PORT || 5005;

// MIDDLEWARE
// Here you should set up the required middleware:
// - `express.static()` to serve static files from the `public` folder
// - `express.json()` to parse incoming requests with JSON payloads
// - `morgan` logger to log all incoming requests
app.use(express.static('public'));
app.use(express.json());
app.use(morgan('dev'));

// ROUTES
// Start defining your routes here:

// home page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/home.html');
});

// blog page
app.get('/blog', (req, res) => {
    res.sendFile(__dirname + '/views/blog.html');
});

// get jason data for Projects
const projects = require('./data/projects.json');
app.get('/api/projects', (req, res) => {
    res.json(projects);
});

// get jason data for Articles
const articles = require('./data/articles.json');
app.get('/api/articles', (req, res) => {
    res.json(articles);
});

// 404 not Found
app.use('*', (req, res) => {
    res.sendFile(__dirname + '/views/not-found.html');
});


// START THE SERVER
// Make your Express server listen on port 5005:
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

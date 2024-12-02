// IMPORT PACKAGES
// Here you should import the required packages for your Express app: `express` and `morgan`
const express = require('express');
const morgan = require('morgan');
const path = require('path');


// CREATE EXPRESS APP
// Here you should create your Express app:
const app = express();


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
//home page
app.get('/', (req, res) => {

    res.sendFile(path.join(__dirname, '/views/home.html'));
});

//blog page
app.get('/blog', (req, res) => {
    console.log(__dirname);
    res.sendFile(path.join(__dirname, '/views/blog.html'));
});

//api/projects
app.get('/api/projects', (req, res) => {
    const projects = require('./data/projects.json');
    res.json(projects);
});

//api/articles
app.get('/api/articles', (req, res) => {
const articles = require('./data/articles.json');
    res.json(articles);
});

//not found page
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/not-found.html'));
});

// START THE SERVER
// Make your Express server listen on port 5005:
app.listen(5005, () => console.log('Server is running on port 5005'));
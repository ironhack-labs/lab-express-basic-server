// IMPORT PACKAGES
// Here you should import the required packages for your Express app: `express` and `morgan`
const express = require('express');
const log = require('morgan');
const path = require('path');

const projects = require('./data/projects.json');
const articles = require('./data/articles.json');
// CREATE EXPRESS APP
// Here you should create your Express app:
const portfolio = express();


// MIDDLEWARE
// Here you should set up the required middleware:
// - `express.static()` to serve static files from the `public` folder
// - `express.json()` to parse incoming requests with JSON payloads
// - `morgan` logger to log all incoming requests
portfolio.use(express.static('public'));
portfolio.use(log('dev'));
portfolio.use(express.json());

// ROUTES
// Start defining your routes here:
portfolio.get('/', (req, res) => {
    //console.log('inside / route');    
    res.sendFile(path.join(__dirname, '/views/home.html'));
});

portfolio.get('/blog', (req, res) => {
    //console.log('inside /blog route');    
    res.sendFile(path.join(__dirname, '/views/blog.html'));
});

portfolio.get('/api/projects', (req, res) => {
    //console.log('inside /blog route');    
    res.json(projects);
});
portfolio.get('/api/articles', (req, res) => {
    //console.log('inside /blog route');    
    res.json(articles);
});

portfolio.get('*', (req, res) => {
    //console.log('inside /blog route');    
    res.status(404).sendFile(path.join(__dirname, '/views/not-found.html'));
});

// START THE SERVER
// Make your Express server listen on port 5005:
portfolio.listen(5005, () => console.log(`express server running on port 5005!`));

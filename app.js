// IMPORT PACKAGES
// Here you should import the required packages for your Express app: `express` and `morgan`
const express = require('express');
const logger = require('morgan');

//Import files
const projects = require("./data/projects.json");
const articles = require("./data/articles.json");

// CREATE EXPRESS APP
// Here you should create your Express app:
const app = express();


// MIDDLEWARE
// Here you should set up the required middleware:
// - `express.static()` to serve static files from the `public` folder
app.use(express.static('public'));
// - `express.json()` to parse incoming requests with JSON payloads
app.use(express.json());
// - `morgan` logger to log all incoming requests
app.use(logger('dev'));


// ROUTES
// Start defining your routes here:

//Iteration 3
app.get('/', (req, res, next) => {
    /* console.log(req); */
    res.sendFile(__dirname + '/views/home.html');
});

//Iteration 4
app.get('/blog', (req, res) => {
    /* console.log(req); */
    res.sendFile(__dirname + '/views/blog.html');
});

//Iteration 5
app.get('/api/projects', (req, res) => {
    res.json(projects);
});

//Iteration 6
app.get('/api/articles', (req, res) => {
    res.json(articles);
});

//Iteration 7
app.get('*', (req, res) => {
    res.status(404).sendFile(__dirname + '/views/not-found.html');
});


// START THE SERVER
// Make your Express server listen on port 5005:
app.listen(5005, () => console.log("My first server listening on port 5005! "));

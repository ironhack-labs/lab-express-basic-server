// IMPORT PACKAGES
// Here you should import the required packages for your Express app: `express` and `morgan`
const express = require('express');
const { request } = require('http');
const logger = require('morgan');
const { dirname } = require('path');
const projects = require('./data/projects.json');
const articles = require('./data/articles.json')

// CREATE EXPRESS APP
// Here you should create your Express app:

const app = express();


   
  // Start the server
  app.listen(5005, () => console.log('Server listening on port 5005! '));
// MIDDLEWARE
// Here you should set up the required middleware:


// - `express.static()` to serve static files from the `public` folder
app.use(logger('dev')); //always before  the express.static() line,
app.use(express.static('public'));


// - `express.json()` to parse incoming requests with JSON payloads
app.use(express.json()); 
// - `morgan` logger to log all incoming requests



// ROUTES
// Start defining your routes here:

app.get('/home', (request, response, next) => {
    response.sendFile(__dirname +"/views/home.html")
});
 
app.get('/blog', (request, response, next) => {
    response.sendFile(__dirname + "/views/blog.html")
});

app.get('/api/projects', (request, response, next) => {
    response.json(projects);
  });

  
app.get('/api/articles', (request, response, next) => {
    response.json(articles);
  });

// START THE SERVER
// Make your Express server listen on port 5005:

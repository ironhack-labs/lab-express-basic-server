// IMPORT PACKAGES
// Here you should import the required packages for your Express app: `express` and `morgan`
const express = require('express');
const logger = require('morgan');
const projects = require('./data/projects.json')
const articles = require('./data/articles.json')




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

// Our home route:
app.get('/', (request, response, next) => {
    console.log(request);
    response.sendFile(__dirname + '/views/home.html');
  });

  // Our blog route:
app.get('/blog', (request, response, next) => {
    console.log(request);
    response.sendFile(__dirname + '/views/blog.html');
  });

    // Our Not-Found route:
app.get('/*', (request, response, next) => {
    console.log(request);
    response.status(404).sendFile(__dirname + '/views/not-found.html');
  });

   // Our api projects route:
app.get('/api/projects', (request, response, next) => {
    console.log(request);
    response.json(projects);
  });

     // Our api articles route:
app.get('/api/articles', (request, response, next) => {
    console.log(request);
    response.json(articles);
  });

   

// START THE SERVER
// Make your Express server listen on port 5005:
// Start the server
app.listen(5005, () => console.log("My first app listening on port 5005! "));
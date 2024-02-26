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
app.get("/", (req, res) => {
    // Sending the home.html file as the response
    res.sendFile(path.join(__dirname, 'views', 'home.html'));
  });
  

  app.get ("/blog", (reg, res) => {
    res.sendFile(path.join(__dirname, 'views','blog.html'));
    });


    const projects = require('./data/projects.json');

    app.get("/api/projects", (req, res) => {
        res.json(projects);
    });

    const articles = require('./data/articles.json');
    app.get("/api/articles", (reg, res) => {
        res.json(articles);
        });
        app.get('*', (req, res) => {
            // Send the not-found.html file for any other routes
            res.sendFile(path.join(__dirname, 'views', 'not-found.html'));
        });


// START THE SERVER
// Make your Express server listen on port 5005:
const PORT = 5005;
app.listen(PORT, () => {
  console.log(`Server is listening on PORT 5005`);
});
// IMPORT PACKAGES
// Here you should import the required packages for your Express app: `express` and `morgan`


const express = require('express');
const morgan = require('morgan');
const projects = require('./data/projects.json');
const app = express();

// Middleware
app.use(express.static('public'));
app.use(express.json());
app.use(morgan('dev'));


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/home.html');
});


// Server
const PORT = 5005;


app.get('/blog', (req, res) => {
  res.sendFile(__dirname + '/public/blog.html');
});



app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


app.get('/api/projects', (req, res) => {
  res.json(projects);
});



// CREATE EXPRESS APP
// Here you should create your Express app:



// MIDDLEWARE
// Here you should set up the required middleware:
// - `express.static()` to serve static files from the `public` folder
// - `express.json()` to parse incoming requests with JSON payloads
// - `morgan` logger to log all incoming requests



// ROUTES
// Start defining your routes here:



// START THE SERVER
// Make your Express server listen on port 5005:

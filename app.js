// IMPORT PACKAGES
// Here you should import the required packages for your Express app: `express` and `morgan`
const express = require('express');
const morgan = require('morgan');
const projects = require('./data/projects.json');
const articles = require('./data/articles.json');
// CREATE EXPRESS APP
// Here you should create your Express app:
const app = express();

// MIDDLEWARE
// Here you should set up the required middleware:
app.use(express.static('public'));
app.use(express.json());
app.use(morgan('dev'));
// - `express.static()` to serve static files from the `public` folder
// - `express.json()` to parse incoming requests with JSON payloads
// - `morgan` logger to log all incoming requests

// ROUTES
// Start defining your routes here:
app.get('/', (req, res) => {
	res.sendFile(__dirname + '/views/home.html');
});
app.get('/blog', (req, res) => {
	res.sendFile(__dirname + '/views/blog.html');
});
app.get('/api/projects', (req, res) => {
	res.json(projects);
});
app.get('/api/articles', (req, res) => {
	res.json(articles);
});
app.use((req, res, next) => {
	res.status(404).sendFile(__dirname + '/views/not-found.html');
});
  
// START THE SERVER
app.listen(5005, () => {
	console.log('My first app listening on port 5005! ');
});

// Make your Express server listen on port 5005:

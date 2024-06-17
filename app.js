// IMPORT PACKAGES
// Here you should import the required packages for your Express app: `express` and `morgan`
const express = require('express');
const morgan = require('morgan');

// CREATE EXPRESS APP
// Here you should create your Express app:
const app = express();
const port = process.env.PORT || 5005;
const projectsJSON = require('./data/projects.json');
const articlesJSON = require('./data/articles.json');

// MIDDLEWARE
// Here you should set up the required middleware:
// - `express.static()` to serve static files from the `public` folder
// - `express.json()` to parse incoming requests with JSON payloads
// - `morgan` logger to log all incoming requests
app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.json());

// ROUTES
// Start defining your routes here:
app.get('/', function (req, res) {
	res.sendFile(__dirname + '/views/home.html');
});

app.get('/blog', function (req, res) {
	res.status(200).sendFile(__dirname + '/views/blog.html');
});

app.get('/api/projects', function (req, res) {
	res.json(projectsJSON);
});

app.get('/api/articles', function (req, res) {
	res.json(articlesJSON);
});

app.get('*', (req, res) => {
	res.status(404).sendFile(__dirname + '/views/not-found.html');
});

// START THE SERVER
// Make your Express server listen on port 5005:
app.listen(port, () => {
	console.log('Server running on port', port);
});

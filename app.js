// IMPORT PACKAGES
const express = require('express');
const app = express();
// Here you should import the required packages for your Express app: `express` and `morgan`
const PORT = process.env.PORT || 5001;

const logger = require ('morgan')
// CREATE EXPRESS APP
// Here you should create your Express app:



// MIDDLEWARE
app.use(express.static('public'));
app.use(express.json());
app.use(logger('dev'));
// Here you should set up the required middleware:
// - `express.static()` to serve static files from the `public` folder
// - `express.json()` to parse incoming requests with JSON payloads
// - `morgan` logger to log all incoming requests



// ROUTES
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'home.html')); 
});

// Start defining your routes here:
app.get('/blog', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'blog.html')); // Serve the 'blog.html' file when the '/blog' route is accessed
});


app.get('/api/projects', (req, res) => {
    const projects = require('./data/projects.json'); // Assuming 'projects.json' is in the 'data' directory
    res.json(projects); // Send the projects data as JSON
});


app.get('/api/articles', (req, res) => {
    const articles = require('./data/articles.json'); // Assuming 'articles.json' is in the 'data' directory
    res.json(articles); // Send the articles data as JSON
});


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'not-found.html')); // Serve the 'not-found.html' file for any other routes
});
// START THE SERVER
// Make your Express server listen on port 5005:
app.listen(PORT,()=>{
    console.log("We are running on port ". PORT)
})
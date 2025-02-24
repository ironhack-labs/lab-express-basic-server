// IMPORT PACKAGES

// Here you should import the required packages for your Express app: `express` and `morgan`
const express = require('express');
const morgan = require('morgan');
const projects = require('./data/projects.json');
const articles = require('./data/articles.json');
const app = express();

// CREATE EXPRESS APP
// Here you should create your Express app:

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
app.get('/', (req, res, next) => {
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/blog', (req, res, next) => {
    res.sendFile(__dirname + '/views/blog.html')
})

app.get('/api/projects', (req, res, next) => {
    res.json(projects);
})

app.get('/api/articles', (req, res, next) => {
    res.json(articles)
})
/*Update the home.html page and add your personal information, including your name, 
photo, short bio, and links to your GitHub and LinkedIn profiles. 
Additionally, you can update the static JSON data for the projects section to include your own projects.*/


app.get('*', (req, res, next) => {
    res.status(404).sendFile(__dirname + '/views/not-found.html');
})


// START THE SERVER
// Make your Express server listen on port 5005:
app.listen(5005, () => {
    console.log('Server is listening on port 5005');
}
)
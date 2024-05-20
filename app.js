// IMPORT PACKAGES
// Here you should import the required packages for your Express app: `express` and `morgan`
const express = require("express");
const morgan = require("morgan");

// CREATE EXPRESS APP
// Here you should create your Express app:
const app = express();


// MIDDLEWARE
// Here you should set up the required middleware:
// - `express.static()` to serve static files from the `public` folder
app.use(express.static("public"));

// - `express.json()` to parse incoming requests with JSON payloads
app.use(express.json());  

// - `morgan` logger to log all incoming requests
app.use(morgan("dev"));


// ROUTES
app.get('/', (request, response, next) => {
    response.sendFile(__dirname + '/views/home.html');
});
app.get('/blog', (request, response, next) => {
    response.sendFile(__dirname + '/views/blog.html');
});
app.get('/api/projects', (request, response, next) => {
    response.sendFile(__dirname + '/data/projects.json');
});
app.get('/api/projects', (request, response, next) => {
    response.json(projects);
});
app.get('/api/articles', (request, response, next) => {
    response.sendFile(__dirname + '/data/articles.json');
});
app.get('/api/articles', (request, response, next) => {
    response.json(articles);
});

app.use((request, response, next) => {
    response.status(404).sendFile(__dirname + '/views/not-found.html');
});

// START THE SERVER
app.listen(5005, () => {
    console.log("Server listening on port 5005");
});
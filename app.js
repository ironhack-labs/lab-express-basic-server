// IMPORT PACKAGES
// Here you should import the required packages for your Express app: `express` and `morgan`
const express = require('express');

const logger = require('morgan');


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
//Get Home Page
app.get("/home", (req, res) => {
    res.sendFile(__dirname + "/views/home.html");
});

//Get Blog Page
app.get("/blog", (req, res) => {
    res.sendFile(__dirname + "/views/blog.html");
});

//JSON Data Articles
app.get("/api/articles", (req, res) => {
    res.json(articles);
});

//404 route
app.get("*", (req, res, next) => {
    res.status(404).sendFile(__dirname + "/views/not-found.html");
});

// START THE SERVER
// Make your Express server listen on port 5005:
app.listen(5005, () => console.log("My first app listening on port 5005!"));
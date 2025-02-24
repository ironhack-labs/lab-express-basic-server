// IMPORT PACKAGES
// Here you should import the required packages for your Express app: `express` and `morgan`
const morgan = require("morgan");
const express = require("express");
const projects = require("./data/projects.json");
const articles = require("./data/articles.json");



// CREATE EXPRESS APP
// Here you should create your Express app:
const app = express();


// MIDDLEWARE
// Here you should set up the required middleware:
// - `express.static()` to serve static files from the `public` folder
// - `express.json()` to parse incoming requests with JSON payloads
// - `morgan` logger to log all incoming requests
app.use(express.static("public"));
app.use(express.json());
app.use(morgan("dev"));



// ROUTES
// Start defining your routes here:



// START THE SERVER
// Make your Express server listen on port 5005:
app.listen(5005, () => {
    console.log("listening");
});

// get homepage
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/home.html");
});

// get blog 
app.get("/blog", (req, res) => {
    res.sendFile(__dirname + "/views/blog.html");
});

// get api data projects
app.get("/api/projects", (req, res) => {
    res.json(projects);
});

// get api data articles 
app.get("/api/articles", (req, res) => {
    res.json(articles);
});

// 404 page
app.use((req, res, next) => {
    res.status(404).sendFile(__dirname + "/views/not-found.html");
})
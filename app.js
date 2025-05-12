// IMPORT PACKAGES
const express = require("express");
const morgan = require("morgan");

const projects = require("./data/projects.json");
const articles = require("./data/articles.json");



// CREATE EXPRESS APP
const app = express();



// MIDDLEWARE
// Here you should set up the required middleware:
app.use (express.static("public")); // - `express.static()` to serve static files from the `public` folder
app.use(express.json()); // - `express.json()` to parse incoming requests with JSON payloads
app.use(morgan("dev")); // - `morgan` logger to log all incoming requests




// ROUTES
// Start defining your routes here:

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/home.html");
});

app.get("/blog", (req, res) => {
    res.sendFile(__dirname + "/views/blog.html");
});

app.get("/api/projects", (req, res)=> {
    res.json(projects);
});

app.get("/api/articles", (req, res) => {
    res.json(articles);
});


app.use((req, res, next) => {
    res.status(404).sendFile(__dirname + "/views/not-found.html");
});


// START THE SERVER
app.listen(5005, () => {
    console.log("Server listening port 5005");
});

// Make your Express server listen on port 5005:

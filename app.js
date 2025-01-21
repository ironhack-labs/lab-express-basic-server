// IMPORT PACKAGES
const express = require("express");
const logger = require("morgan");
const port = 5005;

// Json:
const projects = require("./data/projects.json")
const articles = require("./data/articles.json")


//--CREATE EXPRESS APP--
const app = express();


//--MIDDLEWARE--
// Static files
app.use(express.static("public"))
// Json Middleware
app.use(express.json())
// Request logger (morgan)
app.use(logger("dev"));




//--ROUTES--
// Iteration 3 - GET - Home Page
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/home.html");
})

// Iteration 4 - GET - Blog Page
app.get("/blog", (req, res) => {
    res.sendFile(__dirname + "/views/blog.html");
})

// Iteration 5 - GET - JSON Projects 
app.get("/api/projects", (req, res) => {
    res.json(projects);
})

// Iteration 6 - GET - JSON Articles
app.get("/api/articles", (req, res) => {
    res.json(articles)
})

// Iteration 7 - 404 Route
app.use("/", (req, res) => {
    console.log(req)
    res.status(404).sendFile(__dirname + "/views/not-found.html");
})

//--START THE SERVER--
app.listen(port, () => {
    console.log(`Run the server. Port: ${port}`);
})

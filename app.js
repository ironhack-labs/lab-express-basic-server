// IMPORT PACKAGES
// Here you should import the required packages for your Express app: `express` and `morgan`
const express = require("express")
const logger = require("morgan")

const projects = require("./data/projects.json")
const articles = require("./data/articles.json")

const PORT = 5005


// CREATE EXPRESS APP
// Here you should create your Express app:
const app = express()

app.use(logger("dev"))

app.use(express.static('public'))

app.use(express.json())


// MIDDLEWARE
// Here you should set up the required middleware:
// - `express.static()` to serve static files from the `public` folder
// - `express.json()` to parse incoming requests with JSON payloads
// - `morgan` logger to log all incoming requests



// ROUTES
// Start defining your routes here:

app.get("/", function (req, res, next) {
    console.log("we received a request for the HOMEPAGE...")
    res.sendFile(__dirname + '/views/home.html');
})

app.get("/blog", function (req, res, next) {
    console.log("we received a request for the BLOG page");
    res.sendFile(__dirname + '/views/blog.html');
})

app.get("/api/projects", function(req, res, next) {
    res.json(projects)
})

app.get("/api/articles", function(req, res, next) {
    res.json(articles)
})

app.use((req, res, next) => {
    res.status(404).sendFile(__dirname + "/view/not-found.html")
})



// START THE SERVER
// Make your Express server listen on port 5005:
app.listen(PORT, function () {
    console.log(`Server listening on port ${PORT} `);
})

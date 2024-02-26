// IMPORT PACKAGES
// Here you should import the required packages for your Express app: `express` and `morgan`
const express = require("express")
const morgan = require("morgan")
const projects = require("./data/projects.json")
const articles = require("./data/articles.json")

// CREATE EXPRESS APP
// Here you should create your Express app:
const app = express()


// MIDDLEWARE
// Here you should set up the required middleware:
// - `express.static()` to serve static files from the `public` folder
// - `express.json()` to parse incoming requests with JSON payloads
// - `morgan` logger to log all incoming requests
app.use(express.static("public"))
app.use(express.json())
app.use(morgan('dev'))


// ROUTES
// Start defining your routes here:

// home
app.get("/", (req, res, next) =>{
    res.sendFile(__dirname + "/views/home.html")
})

// blog 
app.get("/blog", (req, res, next) =>{
    res.sendFile(__dirname + "/views/blog.html")
})

// JSON Data
app.get("/api/projects", (req, res, next) => {
    res.json(projects)
} )

// articles
app.get("/api/articles", (req, res, next) => {
    res.json(articles)
})

// 404
app.get("*", (req, res, next) => {
     res.sendFile(__dirname + "/views/not-found.html")
})


// START THE SERVER
// Make your Express server listen on port 5005:
app.listen(5005, () => console.log("Server started @ 5005"))
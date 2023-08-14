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
app.use(morgan("dev"))

// ROUTES
// Start defining your routes here:
app.get("/", (request, response) => response.sendFile(__dirname + "/views/home.html"))
app.get("/blog", (request, response) => response.sendFile(__dirname + "/views/blog.html"))
app.get("/api/projects", (request, response) => {
    response.json(projects)
})
app.get("/api/articles", (request, response) => {
    response.json(articles)
})
// app.get("*", (request, response) => response.sendFile(__dirname + "/views/not-found.html"))
app.use((request, response) => {
    response.status(404).sendFile(__dirname + "/views/not-found.html")
})

// START THE SERVER
// Make your Express server listen on port 5005:
app.listen(5005, () => console.log("Server listening on port 5005"))

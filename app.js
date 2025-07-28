// IMPORT PACKAGES
// Here you should import the required packages for your Express app: `express` and `morgan`
const express = require('express')

const logger = require ('morgan')

const app = express()

const internalData = require("./data/projects.json")

const articles = require("./data/articles.json")

const PORT = 5005


// CREATE EXPRESS APP
// Here you should create your Express app:



// MIDDLEWARE
// Here you should set up the required middleware:
// - `express.static()` to serve static files from the `public` folder
// - `express.json()` to parse incoming requests with JSON payloads
// - `morgan` logger to log all incoming requests

app.use(logger('dev'))

app.use(express.static('public'))

app.use(express.json())

// ROUTES
// Start defining your routes here:

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/home.html")
})

app.get("/blog", (req, res) => {
    res.sendFile(__dirName + "/views/blog.html")
})

app.get("/api/projects", (req, res) => {
    res.json(internalData)
})

app.get("/api/articles", (req, res) => {
    res.json(articles)
})

app.use("*", (req, res, next) => {
   res.status(404).sendFile(__dirname + "/views/not-found.html")
})



// START THE SERVER
// Make your Express server listen on port 5005:

app.listen(PORT, (request) => {
    console.log(`The app is running on port ${PORT}`)
})

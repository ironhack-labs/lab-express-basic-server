// IMPORT PACKAGES
const express = require("express")
const morgan = require("morgan")

const projects = require ("./data/projects")
const articles = require ("./data/articles")

const PORT = 5005
// CREATE EXPRESS APP
const app = express()

// MIDDLEWARE
app.use(express.static("public"))
app.use(express.json())
app.use(morgan("dev"))


// ROUTES
app.get("/", function (req, res, next) {
    res.sendFile(__dirname + "/views/home.html")
})

app.get("/blog", function (req, res, next) {
    res.sendFile(__dirname + "/views/blog.html")
})

app.get("/api/projects", function(req, res, next){
    res.json(projects)
})

app.get("/api/articles", function(req, res, next){
    res.json(articles)
})

app.use(function (req, res, next){
    res.status(404).sendFile(__dirname + "/views/not-found.html")
})

// START THE SERVER
app.listen(PORT, function () {
    console.log(`App is listening for requests on port ${PORT}...`)
})
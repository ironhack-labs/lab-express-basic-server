// IMPORT PACKAGES
const allProjects = require("./data/projects.json")
const allArticles = require("./data/articles.json")

// Here you should import the required packages for your Express app: `express` and `morgan`
const express = require("express")
const morgan = require("morgan")


// CREATE EXPRESS APP
// Here you should create your Express app:
const app = express()

// MIDDLEWARE
// Here you should set up the required middleware:
// - `express.static()` to serve static files from the `public` folder
app.use(express.static("public"))
// - `express.json()` to parse incoming requests with JSON payloads
app.use(express.json())
// - `morgan` logger to log all incoming requests
app.use(morgan("dev"))


// ROUTES
// Start defining your routes here:
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/home.html")
})

app.get("/api/projects", (req, res) => {
    res.json(allProjects)
})

app.get("/api/articles", (req, res) => {
    res.json(allArticles)
})

app.get("/blog", (req, res) => {
    res.sendFile(__dirname + "/views/blog.html")
})

app.get("/*", (req, res) => {
    res.sendFile(__dirname + "/views/not-found.html")
})


// START THE SERVER
// Make your Express server listen on port 5005:
app.listen(5005, () => {
    console.log(`probando que funcione en 5005`)
})
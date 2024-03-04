// IMPORT PACKAGES
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
app.get("/", (req, res, next) => {
    res.sendFile(__dirname + "/views/home.html")
})

app.get("/blog", (req, res, next) => {
    res.sendFile(__dirname + "/views/blog.html")
})

const importedProjects = require("./data/projects.json")
//console.log(importedProjects)
app.get("/api/projects", (req, res, next) => {
    res.json(importedProjects)

})

const importedArticles = require("./data/articles.json")
//console.log(importedArticles)
app.get("/api/articles", (req, res, next) => {
    res.json(importedArticles)
})

app.use((req, res, next) => {
    res.status(404).sendFile(__dirname + "/views/not-found.html")
})

// START THE SERVER
// Make your Express server listen on port 5005:

app.listen(5005, () => {
    console.log(`app listening on port 5005`)
})



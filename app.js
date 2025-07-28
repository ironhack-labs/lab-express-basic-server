// IMPORT PACKAGES

// Here you should import the required packages for your Express app: `express` and `morgan`
const express = require("express")
const morgan = require("morgan")

const projects = require("./data/projects.json")
const articles = require("./data/articles.json")

// CREATE EXPRESS APP
// Here you should create your Express app:
const app = express()

const PORT = 5005

// MIDDLEWARE
// Here you should set up the required middleware:
// - `express.static()` to serve static files from the `public` folder
app.use(express.static('public'))
// - `express.json()` to parse incoming requests with JSON payloads
app.use(express.json())
// - `morgan` logger to log all incoming requests
app.use(morgan('dev'))



// ROUTES
// Start defining your routes here:

//GET
app.get('/', function (request, response, next) {
    response.sendFile(__dirname + "/views/home.html")
})

//GET /blog
app.get('/blog', function (request, response, next) {
    response.sendFile(__dirname + "/views/blog.html")
})

//GET /projects
app.get("/api/projects", function(request,response,next){
    response.json(projects)
})

//GET /articles
app.get("/api/articles", function(request,response,next){
    response.json(articles)
})

//GET *
app.use("*", function(request,response,next){
    response.status(404).sendFile(__dirname + "/views/not-found.html")
})


// START THE SERVER
// Make your Express server listen on port 5005:
app.listen(PORT, function () {
    console.log(`App is running on port ${PORT}`)
})
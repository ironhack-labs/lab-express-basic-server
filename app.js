

// IMPORT PACKAGES
// Here you should import the required packages for your Express app: `express` and `morgan`

const express = require("express")
const logger = require("morgan")

//This is how you import data from within the same files
const articles = require ("./data/articles.json")
const projects = require ("./data/projects.json")




// CREATE EXPRESS APP
// Here you should create your Express app:

const app = express()




// MIDDLEWARE
// Here you should set up the required middleware:
// - `express.static()` to serve static files from the `public` folder
// - `express.json()` to parse incoming requests with JSON payloads
// - `morgan` logger to log all incoming requests

app.use(express.static('public'))
app.use(express.json())
app.use(logger('dev'))



// ROUTES
// Start defining your routes here:
app.get("/", (request, response) => {
    console.log(request);
    response.send("<h1> Welcome User, this is the home page </h1>")
})
app.get("/blog",(request, response) => {
    console.log(request);
    response.send("<h1> Welcome User, this is the blog page </h1>")
})

app.get("/api/projects", (request, response) => {
    response.json(projects)
})

app.get("/api/articles", (request, response) => {
    response.json(articles)
})

app.use((request, response) => {
    response.status(404).sendFile(__dirname + "/views/not-found.html")
})


// START THE SERVER
// Make your Express server listen on port 5005:
app.listen(5005, () => console.log("I am running"))

// IMPORT PACKAGES
// Here you should import the required packages for your Express app: `express` and `morgan`

const express = require("express");
const logger = require("morgan");
const dataArticles = require("./data/articles.json");
const dataProjects = require ("./data/projects.json")

// CREATE EXPRESS APP
// Here you should create your Express app:

const app = express()

// MIDDLEWARE
// Here you should set up the required middleware:
// - `express.static()` to serve static files from the `public` folder
// - `express.json()` to parse incoming requests with JSON payloads
// - `morgan` logger to log all incoming requests

app.use(express.static("public"));
app.use(express.json("data"));
app.use(logger("dev"));

// ROUTES
// Start defining your routes here:

app.get("/", (request, response)=>{
    console.log("it is working on home");
    response.sendFile(__dirname + "/views/home.html")
})
app.get("/blog", (request, response)=>{
    console.log("in the blog works too");
    response.sendFile(__dirname + "/views/blog.html")
})

app.get("/api/projects",(request, response)=>{
    response.json(dataProjects)
})
app.get("/api/articles", (request, response)=>{
    response.json(dataArticles)
})

app.get("/*", (request, response)=>{
    response.sendFile(__dirname + "/views/not-found.html")
})


// START THE SERVER
// Make your Express server listen on port 5005:
app.listen(5005, ()=>console.log("It works on 5005!"))
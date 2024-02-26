// IMPORT PACKAGES
// Here you should import the required packages for your Express app: `express` and `morgan`
const express = require("express");
const morgan = require("morgan");

const projects = require("./data/projects.json");
const articles = require("./data/articles.json");

// CREATE EXPRESS APP
// Here you should create your Express app:
const server = express();


// MIDDLEWARE
// Here you should set up the required middleware:
// - `express.static()` to serve static files from the `public` folder
// - `express.json()` to parse incoming requests with JSON payloads
// - `morgan` logger to log all incoming requests
server.use(express.static('public'));
server.use(express.json());
server.use(morgan('dev'));


// ROUTES
// Start defining your routes here:
server.get("/", (request, response)=>{
    response.sendFile(__dirname + "/views/home.html")
})
server.get("/blog", (request, response)=>{
    response.sendFile(__dirname + "/views/blog.html")
})
server.get("/api/projects", (request, response)=>{
    response.json(projects);
})
server.get("/api/articles", (request, response)=>{
    response.json(articles);
})
server.get("/*", (request, response)=>{
    response.status(404).response.sendFile(__dirname + "/views/not-found");
})



// START THE SERVER
// Make your Express server listen on port 5005:
const PORT = 5005;
server.listen(PORT, ()=>{
    console.log("Server listening on port ", PORT);
})
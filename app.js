// IMPORT PACKAGES
// Here you should import the required packages for your Express app: `express` and `morgan`

const express = require("express");
const morgan = require("morgan");

//Import JSON data
const projects = require("./data/projects.json")
const articles = require("./data/articles.json")

const app = express(); 
const PORT = 5005;

app.listen(PORT, ()=>{
    console.log("server is running", PORT )
})

// use is used for middleware layer
app.use(express.json());
app.use(express.static("public"));
app.use(morgan('dev'));


//Routes
app.get("/", (req, res) => {
    res.status(200).sendFile(__dirname + "/views/home.html")
})

app.get("/blog", (req, res)=>{
    res.status(200).sendFile(__dirname +"/views/blog.html")
})

app.get("/api/projects/", (req, res)=>{
    res.json(projects)
})

app.get("/api/articles/", (req, res)=>{
    res.status(200).json(articles)
})


// CREATE EXPRESS APP
// Here you should create your Express app:



// MIDDLEWARE
// Here you should set up the required middleware:
// - `express.static()` to serve static files from the `public` folder
// - `express.json()` to parse incoming requests with JSON payloads
// - `morgan` logger to log all incoming requests



// ROUTES
// Start defining your routes here:



// START THE SERVER
// Make your Express server listen on port 5005:

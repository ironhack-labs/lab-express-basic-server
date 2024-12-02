// IMPORT PACKAGES
// Here you should import the required packages for your Express app: `express` and `morgan`
const express = require("express");
const morgan = require("morgan");
const path = require('path');
const projects = require('./data/projects.json');
const articles = require('./data/articles.json')


// CREATE EXPRESS APP
const app= express();
// Here you should create your Express app:



// MIDDLEWARE
// Here you should set up the required middleware:
// - `express.static()` to serve static files from the `public` folder
// - `express.json()` to parse incoming requests with JSON payloads
// - `morgan` logger to log all incoming requests
app.use(express.static("public"));
app.use(express.json());
app.use(morgan("dev"));



// ROUTES
// Start defining your routes here:

// Get home
app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/views/home.html")
})

// Get blog
app.get("/blog",(req,res)=>{
    res.sendFile(__dirname + "/views/blog.html")
})


// get projects json
app.get("/api/projects",(req,res)=> {
    res.json(projects)
})

// get articles json
app.get("/api/articles",(req,res)=> {
    res.json(articles)
})

//get *
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/not-found.html'));
  });

// START THE SERVER
// Make your Express server listen on port 5005:
app.listen(5005, ()=>{
    console.log("Server Listening our port 5005")
})

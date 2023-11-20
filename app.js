// IMPORT PACKAGES
// Here you should import the required packages for your Express app: `express` and `morgan`

// Require Express - same thing as import axios from "axios";
const express = require("express");

// Import a logger
const logger = require("morgan");

// CREATE EXPRESS APP
// Here you should create your Express app:

// Power on our Express Server
const app = express(); // calling the express const from before

// MIDDLEWARE
// Here you should set up the required middleware:
// - `express.static()` to serve static files from the `public` folder
// - `express.json()` to parse incoming requests with JSON payloads
// - `morgan` logger to log all incoming requests

// Make public files accessible
app.use(express.static("public"));

// Setup our server to use JSON
app.use(express.json());

// Setup our request logger in our express server
app.use(logger("dev"));

// ROUTES
// Start defining your routes here:

app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/views/home.html");
});


app.get("/blog", (req, res)=>{
    res.sendFile(__dirname + "/views/blog.html");
});

app.get("/api/projects", (req, res)=>{
    res.sendFile(__dirname + "/data/projects.json");
});

app.get("/api/articles", (req, res)=>{
    res.sendFile(__dirname + "/data/articles.json");
});

app.get("/*", (req, res)=>{
    res.status(404).sendFile(__dirname + "/views/not-found.html");
});

// START THE SERVER
// Make your Express server listen on port 5005:

app.listen(5005, ()=> console.log("Server listening on port 5005"));

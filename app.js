// IMPORT PACKAGES
// Here you should import the required packages for your Express app: `express` and `morgan`

const express = require("express");
const logger = require("morgan");

const projects = require('./data/projects.json');
const articles = require('./data/articles.json');

// CREATE EXPRESS APP
// Here you should create your Express app:

const app = express();

app.use((req, res, next) => {
    console.log("Hello from the middleware");
    next(); // we need to call next() to move to the next middleware
  });

// MIDDLEWARE
// Here you should set up the required middleware:
// - `express.static()` to serve static files from the `public` folder
app.use(express.static("public"));

// - `express.json()` to parse incoming requests with JSON payloads
app.use(express.json());

// - `morgan` logger to log all incoming requests
app.use(logger('dev')); 

// ROUTES
// Start defining your routes here:

app.get("/", (req, res)=>{
    console.log("this is the home response", res);
    res.sendFile(__dirname + '/views/home.html');
})

app.get("/blog", (req, res)=>{
    console.log("this is the blog response", res);
    res.sendFile(__dirname + '/views/blog.html')
})

app.get("/api/projects", (req, res)=>{
    console.log("this is the projects response", res);
    //res.sendFile(__dirname + '/data/projects.json') //what's the difference with this?
    res.json(projects) //and this
})

app.get("/api/articles", (req, res)=>{
    console.log("this is the response of articles", res)
    res.json(articles);
})

app.get("*", (req, res)=>{
    console.log("this is the error response", res)
    res.status(404).sendFile(__dirname + '/views/not-found.html')
})
// START THE SERVER
// Make your Express server listen on port 5005:

app.listen(5005, () => {
  console.log("The app is using port 5005");
});

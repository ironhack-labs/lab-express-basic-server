// IMPORT PACKAGES
// Here you should import the required packages for your Express app: `express` and `morgan`
const express = require ("express");
const morgan = require ("morgan");

// CREATE EXPRESS APP
// Here you should create your Express app:
const app = express();

const projects = require("./data/projects.json") 
const articles = require("./data/articles.json") 

// MIDDLEWARE
// Here you should set up the required middleware:
// - `express.static()` to serve static files from the `public` folder
// - `express.json()` to parse incoming requests with JSON payloads
// - `morgan` logger to log all incoming requests

app.use(morgan('dev'));

app.use(express.static('public'));

app.use(express.json());

// ROUTES
// Start defining your routes here:

//app.get(path, code)//
app.get("/", (request, response)=>{ 
    console.log("this is the home page");
    response.sendFile(__dirname + '/views/home.html');

});

app.get("/blog", (request, response)=>{ 
    console.log("this is the blog");
    response.sendFile(__dirname + '/views/blog.html');

});

app.get("/*", (request, response)=>{ 
    console.log("this is the blog");
    response.sendFile(__dirname + '/views/not-found-html');

});

app.get("/api/projects", (req, res) => {
    res.json(projects);
});

app.use((req, res)=>{
    res.status(404).send(__dirname + "/views/not-found-html");
})

// START THE SERVER
// Make your Express server listen on port 5005:
app.listen(5005, () =>{
    console.log ("server listening on port 5005")
});

app.get("/api/articles", (req, res) => {
    res.json(articles);
})


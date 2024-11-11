// IMPORT PACKAGES
// Here you should import the required packages for your Express app: `express` and `morgan`

const express = require("express"); 
const morgan = require("morgan");
const PORT = 5005; 
const projectsData = require("./data/projects.json")
const articlesData = require("./data/articles.json")


// CREATE EXPRESS APP
// Here you should create your Express app:

const app = express();

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

app.get("/", function(req, res, next){    
    res.sendFile(__dirname + "/views/home.html" );
})

app.get("/blog", function(req, res, next){    
    res.sendFile(__dirname + "/views/blog.html" );
})

app.get("/api/projects", function(req, res, next){    
    res.sendFile(__dirname + "/data/projects.json" );
})

app.get("/api/articles", function(req, res, next){    
    res.sendFile(__dirname + "/data/articles.json" );
})

app.get("*", function(req, res, next){    
    res.sendFile(__dirname + "/views/not-found.html" );
})

// START THE SERVER
// Make your Express server listen on port 5005:

app.listen(PORT, function(){ console.log(`Server listening on port ${PORT}...`)});
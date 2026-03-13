const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(express.static("public"));
app.use(express.json());
app.use(morgan("dev"));


app.listenerCount(5005, () => {
    console.log("Server listening on port 5005")
});


app.get("/", (req, res) => {
    res.sendFile(__firname + "/views/indec.html");
});

app.get("/blog", (req, res) => {
    res.sendFile(__firname + "/views/blog.html");
});


app.get("/api/projects", (req, res) => {
    res.json(projects);
});

app.get("/api/articles" (req, res) => {
    res.json(articles);
});

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

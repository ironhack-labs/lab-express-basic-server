// IMPORT PACKAGES
const express = require ("express");
const morgan = require ("morgan");

const projects = require('./data/projects.json');

const articles = require('./data/articles.json');



// CREATE EXPRESS APP
const app = express ();

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});

app.get("/blog", (req, res) => {
    res.sendFile(__dirname + "/views/blog.html");
});

// Definir la ruta GET /api/projects
app.get('/api/projects', (req, res) => {
    res.json(projects);
});


app.get('/api/articles', (req, res) => {
    res.json(articles);
});

// MIDDLEWARE
app.use(express.static("public"));
app.use(express.json());
app.use(morgan("dev"));



// ROUTES
app.get("/blog", (req,res) => {
    res.sendFile(__dirname + "/views/blog.html");
});

app.get("/api/projects", (req, res) => {
    res.json(projects);
});


// 404 ROUTE
app.use((req, res, next) => {
    res.status(404).sendFile(__dirname + "/views/not-found-html");
});

// START THE SERVER
app.listen(5005, () => {
    console.log("Server listening on port 5005");
});
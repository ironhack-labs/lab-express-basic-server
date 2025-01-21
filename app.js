const express = require('express');
const morgan = require('morgan');
const projects = require('./data/projects.json');



const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(morgan('dev'));


// GET HOME PAGE

app.get('/', (req, res ) => {
    res.sendFile(__dirname + "/views/home.html");
});


// GET BLOG

app.get("/blog", (req, res) => {
    res.sendFile(__dirname + "/views/blog.html");
});


// GET PROJECTS

app.get("/data/projects.json", (req, res) => {
    res.json(projects);
});

// GET ARTICLES

app.get("data/articles.json", (req, res) => {
    res.json(articles);
});

// 404 ROUTE

app.use((req, res, next) => {
    res.status(404).sendFile(__dirname + "/views/not-found.html");
});

// START THE SERVER
app.listen(5005, () => {
    console.log('Server is listening on port 5005');
});

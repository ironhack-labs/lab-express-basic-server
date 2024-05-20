// IMPORT PACKAGES
const express = require("express");
const morgan = require("morgan");
const projectsApi = require('./data/projects.json')
const articlesApi = require('./data/articles.json')

// CREATE EXPRESS APP
const app = express();

// MIDDLEWARE
app.use(express.static("public"));
app.use(express.json());
app.use(morgan("dev"));

// ROUTES
// Start defining your routes here:
app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/views/home.html`)
}),

    app.get('/blog', (req, res) => {
        res.sendFile(`${__dirname}/views/blog.html`)
    }),

    app.get('/api/projects', (req, res) => {
        res.json(projectsApi)
    }),

    app.get('/api/articles', (req, res) => {
        res.json(articlesApi)
    }),

    app.get('*', (req, res) => {
        res.sendFile(`${__dirname}/views/not-found.html`)
    })


// START THE SERVER
app.listen(5005, () => {
    console.log("Server listening on port 5005");
});
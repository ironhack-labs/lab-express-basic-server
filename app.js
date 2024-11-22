
const express = require("express");
const logger = require("morgan");
const app = express();
const dotenv = require('dotenv').config();
const port = process.env.PORT;

app.use(logger("dev"));
app.use(express.json());
app.use(express.static("public"));

app.get("/", (request, response) => {
    response.sendFile(__dirname + "/views/home.html");
});

app.get("/blog", (request, response) => {
    response.sendFile(__dirname + "/views/blog.html");
});

const projects = require(__dirname + "/data/projects.json");
app.get("/api/projects", (request, response) => {
    response.json(projects);
});

app.get("/api/projects/:id", (request, response) => {
    const {id} = request.params;
    const project = projects.find((proj) => proj.id === parseInt(id));
    response.json(project);
});

const articles = require(__dirname + "/data/articles.json");
app.get("/api/articles", (request, response) => {
    response.json(articles);
});

app.get("/api/articles/:id", (request, response) => {
    const {id} = request.params;
    const article = articles.find((articl) => articl.id === parseInt(id));
    response.json(article);
});

app.get("*",(request, response) => {
    response.status(404).sendFile(__dirname + "/views/not-found.html");
});

app.listen(port, () => console.log("Express Server running on " + port));

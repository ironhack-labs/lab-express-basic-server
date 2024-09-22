

const express = require("express");
const logger = require ("morgan");

const app = express();

app.use(logger("dev"));

const project = require("./data/projects.json");
const articles = require("./data/articles.json");

app.use(express.static("public"));
app.use(express.json());



app.get("/", (req, res)=> {
    res.sendFile(__dirname + "/views/home.html");
})

app.get("/blog", (req, res)=> {
    res.sendFile(__dirname + "/views/blog.html");
})

app.get("/api/projects", (req, res)=> {
    res.json(project);
})

app.get("/api/articles", (req, res)=> {
    res.json(articles);
})


app.listen(5005, ()=> {
    console.log("Tell me, I'm all ears!")
});

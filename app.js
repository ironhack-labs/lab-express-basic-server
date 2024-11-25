const express = require('express')
const logger = require('morgan')
const app = express()
app.use(logger('dev'))




app.use(express.json())

app.get("/api/project", (req, res) => {
    const projectData = require("./data/project.json")
    res.json(projectData)
        ;
});
app.get("/api/articles", (req, res) => {
    const articlesData = require("./data/articles.json")
    res.json(articlesData)
        ;
});
app.get("*", (req, res) => { res.sendStatus(404) })
app.listen(5005, () => console.log('Server running on port 5005'))

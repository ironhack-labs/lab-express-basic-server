const express = require("express")
const logger = require("morgan")

const app = express()

app.use(express.json())
app.use(logger("dev"))

app.get("/api/projects", (req, res) => {
    const projectsData = require("./data/projects.json")
    res.json(projectsData)
})

app.get("/api/articles", (req, res) => {
    const articlesData = require("./data/articles.json")
    res.json(articlesData)
})

app.get("*", (req, res) => {
    res.sendStatus(404)
})

app.listen(5005, () => console.log("levantese"))
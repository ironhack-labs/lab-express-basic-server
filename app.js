const express = require('express')
const logger = require('morgan')


const app = express()

app.use(logger('dev'))
app.use(express.json())

const projects = require("./data/projects.json")
const articles = require("./data/articles.json")

app.get("/api/projects", (req, res) => {
    console.log('FUNCIONA')
    res.json(projects)
})

app.get("/api/articles", (req, res) => {
    console.log('aaaaaaa')
    res.json(articles)
})

app.get('*', (req, res) => {
    res.status(404).send('notfound')
})

app.listen(5005, () => console.log('server running en este puerto'))
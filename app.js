const express = require('express')
const logger = require('morgan')
const projects = require('./data/projects.json')
const articles = require('./data/articles.json')


const app = express()

app.use(logger('dev'))
app.use(express.json())

app.get("/api/projects", (req, res) => {
    res.json(projects)
})

app.get("/api/articles", (req, res) => {
    res.json(articles)
})

app.get('*', (req, res) => {
    res.status(404).send({ error: 'not found', message: 'no lo encuentro tate' })
})

app.listen(5005, () => {
    console.log("server listening on port 5005")
})
const express = require('express')
const logger = require('morgan')

const app = express()

app.use(logger('dev'))
app.use(express.json())

app.get('/api/articles', (req, res) => {
    const articles = require('./data/articles.json')
    res.json(articles)
})

app.get('/api/projects', (req, res) => {
    const projects = require('./data/projects.json')
    res.json(projects)
})

app.listen(5005, () => {console.log('Puerto encendido 5005')})
const express = require('express')
const logger = require('morgan')
const app = express()

app.use(logger('dev'))
app.use(express.json())

const projects = require('./data/projects.json')
const articles = require('./data/articles.json')

app.get('/api/projects', (req, res) => {

    res.json(projects)
})

app.get('/api/articles', (req, res) => {

    res.json(articles)
})

app.get('*', (req, res) => {
    res.status(404).send('Página no encontrada')
})

app.listen(5005, console.log('Server runing on port 5005'))
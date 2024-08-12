const express = require('express')
const logger = require('morgan')
const projects = require('./data/projects.json')
const articles = require('./data/articles.json')

const app = express()


app.use(express.json())
app.use(logger('dev'))


app.get('/api/projects', (req, res) => {
    res.send(projects)
})

app.get('/api/articles', (req, res) => {
    res.send(articles)
})

app.get('*', (req, res) => {
    res.sendStatus(404)
})

app.listen(5005, () => console.log('server running on port 5005'))
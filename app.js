const express = require('express')
const morgan = require('morgan')
const projects = require('./data/projects.json')
const articles = require('./data/articles.json')


const app = express()

app.use(express.json())
app.use(morgan('dev'))



app.get('/api/projects', (req, res) => {

    res.json(projects)
})

app.get('/api/articles', (req, res) => {

    res.json(articles)
})

app.get('*', (req, res) => {
    res.sendStatus(404)
})



app.listen(5005, () => console.log('server running on port 5005'))
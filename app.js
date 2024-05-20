
const express = require('express')
const logger = require('morgan')
const projectData = require('./data/projects.json')
const articles = require('./data/articles.json')


const app = express()



app.use(logger('dev'))
app.use(express.static('public'))
app.use(express.json())



app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/views/home.html`)
})

app.get('/blog', (req, res) => {
    res.sendFile(`${__dirname}/views/blog.html`)
    console.log("está funcionando?")
})

app.get('/api/projects', (req, res) => {
    res.json(projectData)
})

app.get('/api/articles', (req, res) => {
    res.json(articles)
})

app.get('/*', (req, res) => {
    res.sendFile(`${__dirname}/views/not-found.html`)
})


app.listen(5005, () => {
    console.log('Servidor levantado lab día 1')
})

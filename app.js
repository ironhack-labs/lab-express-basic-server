const express = require('express')
const morgan = require('morgan')
const logger = require('morgan')

const app = express()

app.use(morgan('dev'))
app.use(express.static('public'))
app.use(express.json())



// routing
app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/views/home.html`)
})

app.get('/blog', (req, res) => {
    res.sendFile(`${__dirname}/views/blog.html`)
})

app.get('/api/projects', (req, res) => {
    res.json(projects);
})

app.get('/api/articles', (req, res) => {
    res.json(articles);
})

app.get('/*', (req, res, next) => {
    res.status(404).sendFile(`${__dirname}/views/not-found.html`)
})



// listen
app.listen(5005, () => {
    console.log('Servidor levantado yabadú')
})
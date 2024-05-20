const express = require('express')
const logger = require('morgan')

const app = express()

app.use(logger('dev'))
app.use(express.static('public'))
app.use(express.json())


// routing

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/views/home.html`)
})

app.get('/api/projects', (req, res) => {
    res.sendFile(`${__dirname}/data/projects.json`)
})

app.get('/api/articles', (req, res) => {
    res.sendFile(`${__dirname}/data/articles.json`)
})

app.get('*', (req, res) => {
    res.sendFile(`${__dirname}/views/not-found.html`)
})


// listen
app.listen(5000, () => {
    console.log('Servidor levantado')
})
const express = require('express')
const logger = require('morgan')

const app = express()

app.use(logger('dev'))
app.use(express.static('public'))
app.use(express.json())




app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/views/home.html`)
})

app.get('/api/projects', (req, res) => {
    res.json(projects)
})

app.get('/api/articles', (req, res) => {
    res.json(articles)
})

app.get('/', (req, res, next) => {
    res.status(404).sendFile(`${__dirname}/views/not-found.html`)
})





app.listen(5005, () => {
    console.log("Server listening on port 5005")
})
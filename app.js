const express = require('express')
const logger = require('morgan')
const PORT = 5005;

const app = express()



app.use(express.static('public'))
app.use(express.json())
app.use(logger('dev'))

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/views/home.html`)
})


app.get('/blog', (req, res) => {
    res.sendFile(`${__dirname}/views/blog.html`)
})


app.get('/api/projects', (req, res) => {
    res.sendFile(__dirname + '/data/projects.json')
})

app.get('/api/articles', (req, res) => {
    res.sendFile(__dirname + '/data/articles.json')
})

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/views/not-found.html')
})




app.listen(5005, () => console.log('Express levantado en el puerto 5005'))
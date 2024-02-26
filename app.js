const express = require('express')
const logger = require('morgan')


const projects = require('./data/projects.json')
const articles = require('./data/articles.json')


// CREATE EXPRESS APP
// Here you should create your Express app:
const app = express()


// MIDDLEWARE
// Here you should set up the required middleware:
app.use(logger('dev'))
app.use(express.static('public'))
app.use(express.json())

// ROUTES
// Start defining your routes here:
app.get('/', (req, res) => {                // envío de archivo
    res.sendFile(`${__dirname}/views/home.html`)
})

app.get('/blog', (req, res) => {                // envío de archivo
    res.sendFile(`${__dirname}/views/blog.html`)
})

app.get('/api/projects', (req, res) => {                // envío de archivo
    res.json(projects)
})

app.get('/api/articles', (req, res) => {                // envío de archivo
    res.json(articles)
})

app.all('*', (req, res) => {
    res.sendFile(`${__dirname}/views/not-found.html`)

});





// START THE SERVER
// Make your Express server listen on port 5005:

app.listen(5005, () => console.log('init at port 5005'))

// IMPORT PACKAGES
const express = require('express');
const logger = require('morgan')
const projectsData = require('./data/projects.json')
const articlesData = require('./data/articles.json')


// Here you should import the required packages for your Express app: `express` and `morgan`



// CREATE EXPRESS APP
const app = express()


// MIDDLEWARE
app.use(logger('dev'))
app.use(express.static('public'))
app.use(express.json())



// ROUTES
app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/views/home.html`)
})

app.get('/blog', (req, res) => {
    res.sendFile(`${__dirname}/views/blog.html`)
})

app.get('/api/projects', (req, res) => {
    res.json(projectsData)

})

app.get('/api/articles', (req, res) => {
    res.json(articlesData)
})

app.get('/*', (req, res) => {
    res.sendFile(`${__dirname}/views/not-found.html`)
})


// START THE SERVER
app.listen(5005, () => {
    console.log('Server Wake Up')
})

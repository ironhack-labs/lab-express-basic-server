// IMPORT PACKAGES
// Here you should import the required packages for your Express app: `express` and `morgan`
const express = require('express')
const logger = require('morgan')

const project = require('./data/projects.json')
const articles = require('./data/articles.json')


// CREATE EXPRESS APP
// Here you should create your Express app:

const app = express()



// MIDDLEWARE
// Here you should set up the required middleware:
// - `express.static()` to serve static files from the `public` folder
// - `express.json()` to parse incoming requests with JSON payloads
// - `morgan` logger to log all incoming requests
app.use(express.json())
app.use(logger('dev'))




// ROUTES
// Start defining your routes here:
app.get('/api/projects', (req, res) => {
    res.json(project)
})

app.get('/api/articles', (req, res) => {
    res.json(articles)
})

app.get('*', (req, res) => {
    res.sendStatus(404)
})



// START THE SERVER
// Make your Express server listen on port 5005:
app.listen(5005, () => console.log('server runing on port 5005'))

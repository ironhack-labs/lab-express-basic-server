// IMPORT PACKAGES
// Here you should import the required packages for your Express app: `express` and `morgan`
const express = require('express')
const logger = require('morgan')
const projectData = require('./data/projects.json')
const articlesData = require('./data/articles.json')


// CREATE EXPRESS APP
// Here you should create your Express app:
const app = express()


// MIDDLEWARE
// Here you should set up the required middleware:
// - `express.static()` to serve static files from the `public` folder
// - `express.json()` to parse incoming requests with JSON payloads
// - `morgan` logger to log all incoming requests
app.use(express.static('public'))
app.use(express.json())
app.use(logger('dev'))



// ROUTES
// Start defining your routes here:
app.get('/', (rep, res) => {
  res.sendFile(`${__dirname}/views/home.html`)
})

app.get('/blog', (req, res) => {
  res.sendFile(`${__dirname}/views/blog.html`)
})

app.get('/*', (req, res) => {
  res.sendFile(`${__dirname}/views/not-found.html`)
})

app.get('/api/projects', (rep, res) => {
  res.json(projectData)
})

app.get('/api/articles', (rep, res) => {
  res.json(articlesData)
})


// START THE SERVER
// Make your Express server listen on port 5005:
app.listen(5005, () => {
  console.log('Server listening')
})
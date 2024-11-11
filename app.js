// IMPORT PACKAGES
// Here you should import the required packages for your Express app: `express` and `morgan`
const express = require('express')
const morgan = require('morgan')
const propjects = require('./data/projects.json')
const articles = require('./data/articles.json')
// CREATE EXPRESS APP
// Here you should create your Express app:
const app = express()
const PORT = 5005
// MIDDLEWARE
// Here you should set up the required middleware:
// - `express.static()` to serve static files from the `public` folder
// - `express.json()` to parse incoming requests with JSON payloads
// - `morgan` logger to log all incoming requests
app.use(express.static('public'))
app.use(express.json())
app.use(morgan('dev'))

// ROUTES
// Start defining your routes here:
app.get('/', (req, res, next) => {
  res.sendFile(__dirname + '/views/home.html')
})
app.get('/blog', (req, res, next) => {
  res.sendFile(__dirname + '/views/blog.html')
})
app.get('/api/projects', (req, res, next) => {
  res.json(propjects)
})
app.get('/api/articles', (req, res, next) => {
  res.json(articles)
})
app.get('*', (req, res, next) => {
  res.sendFile(__dirname + '/view/not-found.html')
})
app.listen(PORT, () => {
  console.log(`Server listening to ${PORT}`)
})
// START THE SERVER
// Make your Express server listen on port 5005:

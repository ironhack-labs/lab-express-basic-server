//Import Packages
const express = require('express')
const logger = require('morgan')
PORT = 5005

// CREATE EXPRESS APP
// Here you should create your Express app:
const app = express()


// MIDDLEWARE
// Here you should set up the required middleware:
app.use(express.static('public'))               // - `express.static()` to serve static files from the `public` folder
app.use(express.json())                         // - `express.json()` to parse incoming requests with JSON payloads
app.use(logger('dev'))                          // - `morgan` logger to log all incoming requests



// ROUTES
// Start defining your routes here:
app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/views/home.html`)
})

app.get('/blog', (req, res) => {
    res.sendFile(`${__dirname}/views/blog.html`)
})
app.get('/api/projects', (req, res) => {
    res.sendFile(`${__dirname}/data/projects.json`)
})
app.get('/api/articles', (req, res) => {
    res.sendFile(`${__dirname}/data/articles.json`)
})
app.use('*', (req, res) => {
    res.status(404).send(
        "<h1>Por más que busco no la encuentro oye...</h1>")
})

// START THE SERVER
// Make your Express server listen on port 5005:
app.listen(PORT, () => console.log(`Express levantado en el puerto ${PORT}`))
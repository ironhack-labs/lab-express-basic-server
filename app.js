// IMPORT PACKAGES
// Here you should import the required packages for your Express app: `express` and `morgan`
const express = require('express')
const logger = require('morgan')
const projects = require(`${__dirname}/data/projects.json`)
const article = require(`${__dirname}/data/articles.json`)


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
app.get('/', (require, response)=>{
    response.sendFile(`${__dirname}/views/home.html`)
    // console.log('Funciona HOME')
})

app.get('/blog', (require, response)=>{
    response.sendFile(`${__dirname}/views/blog.html`)
    console.log('Funciona BLOG')
})

app.get('/api/projects', (require, response)=>{
    response.json(projects)
})

app.get('/api/articles', (require, response)=>{
    response.json(article)
})

app.get('*', (require, response)=>{
    response.sendFile(`${__dirname}/views/not-found.html`)
})




// START THE SERVER
// Make your Express server listen on port 5005:
app.listen(5005, ()=>{
    console.log('Servidor está levantado')
})

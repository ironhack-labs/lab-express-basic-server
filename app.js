// IMPORT PACKAGES
// Here you should import the required packages for your Express app: `express` and `morgan`



// CREATE EXPRESS APP
// Here you should create your Express app:



// MIDDLEWARE
// Here you should set up the required middleware:
// - `express.static()` to serve static files from the `public` folder
// - `express.json()` to parse incoming requests with JSON payloads
// - `morgan` logger to log all incoming requests



// ROUTES
// Start defining your routes here:



// START THE SERVER
// Make your Express server listen on port 5005:


const express = require('express')
const morgan  = require('morgan')

const app = express()
app.listen(5005)

app.use(express.static('public'))       //Tells that all the images are stored in the public folder
app.use(express.json())
app.use(morgan('dev'))

const projects = 

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/views/home.html')
})
app.get('/blog', (req, res)=>{
    res.sendFile(__dirname + '/views/blog.html')
})
app.get('/not-found', (req, res)=>{
    res.sendFile(__dirname + '/views/not-found.html')
})



app.get('/api/projects',(req,res)=>{
    res.sendFile(__dirname+'/data/projects.json')
})

app.get('/api/articles',(req,res)=>{
    res.sendFile(__dirname+'/data/articles.json')
})
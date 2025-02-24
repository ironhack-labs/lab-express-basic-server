// IMPORT PACKAGES
// Here you should import the required packages for your Express app: `express` and `morgan`


const express = require('express');
const logger = require('morgan');
const route = 5005;

// CREATE EXPRESS APP
// Here you should create your Express app:

const app = express();


// MIDDLEWARE
// Here you should set up the required middleware:
// - `express.static()` to serve static files from the `public` folder
// - `express.json()` to parse incoming requests with JSON payloads
// - `morgan` logger to log all incoming requests

app.use(logger('dev'))

app.use(express.static('public'))

app.use(express.json());

const projects= require('./data/projects.json')

// ROUTES
// Start defining your routes here:
 app.get('/',(req,resp,next)=>{
    resp.sendFile(__dirname+"/views/home.html")
 })
 app.get('/blog',(req,resp,next)=>{
    resp.sendFile(__dirname+"views/blog.html")
 })

 app.get ('/not-found',(req,resp,next)=>{
    resp.sendFile(__dirname+"view/not-found.html")
 })


app.get("/data/projects.json",(req,res)=>{
   console.log("projects log output:",projects)
    res.json(projects);
})


// START THE SERVER
// Make your Express server listen on port 5005:

app.listen(route,()=>{
   console.log(`Your server is running on PORT ${route}`)
})


const express = require('express');
const morgan = require('morgan');
const projects = require('./data/projects.json')
const articles = require('./data/articles.json')



// CREATE EXPRESS APP
// Here you should create your Express app:

const app = express();



// MIDDLEWARE
app.use(express.static("public"));
app.use(express.json());
app.use(morgan("dev"));



// ROUTES
app.get("/",(req,res,next)=>{
    res.sendFile(__dirname + '/views/home.html');
})
app.get("/blog",(req,res,next)=>{
    res.sendFile(__dirname + '/views/blog.html');
})
app.get("/api/projects",(req,res,next)=>{
    res.json(projects);
})
app.get("/api/articles",(req,res,next)=>{
    res.json(articles);
})

// START THE SERVER


app.listen(5005,()=> console.log("Server is running on Port 5005"))

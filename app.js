const express = require('express')
const logger = require ('morgan')

const projectsArr = require('./data/projects.json')
const articlesArr = require('./data/articles.json')
const app = express()
const PORT = 5005

app.use(express.static('public'))
app.use(express.json())
app.use(logger('dev'))

app.get('/',(req, res, next) => {
    res.sendFile(__dirname + "/views/home.html")
})

app.get('/blog',(req, res, net)=>{
    res.sendFile(__dirname + "/views/blog.html")
})

app.get('/projects', (req, res, next)=>{
    res.json(projectsArr)
})

app.get('/articles', (req, res, next)=>{
    res.json(articlesArr)
})

app.listen(PORT,()=>{
    console.log(`server listening on port ${PORT}`)
})
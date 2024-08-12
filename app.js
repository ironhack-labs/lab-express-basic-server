const express = require('express')
const morgan = require('morgan')

const app = express()


app.use(express.json())
app.use(morgan("dev"))


app.get('/api/projects', (req, res) => {
    const projects = require('./data/projects.json')
    res.json(projects)
})

app.get('/api/articles', (req, res) => {
    const articles = require('./data/articles.json')
    res.json(articles)
})

app.get('*', (req, res) => {
    res.sendStatus(404)
})




app.listen(5005, () => console.log('Server is runing on port 5005'))

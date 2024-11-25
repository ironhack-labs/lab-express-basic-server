const express = require('express')
const logger = require('morgan')
const PORT= 5005

const app = express()

app.use(logger('dev'))
app.use(express.json())


app.get('/api/projects', (req, res) => {
    
    const projectsInfo = require('./data/projects.json')

    res.json(projectsInfo)

})

app.get('/api/articles', (req, res) => {

    const articlesInfo = require('./data/articles.json')

    res.json(articlesInfo)
    
})

app.get('/*', (req, res) => {
    res.sendStatus(404)
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))



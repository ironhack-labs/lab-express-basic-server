const express = require('express')
const logger = require('morgan')

// instancia la aplicación
const app = express()

//configuraciones
app.use(logger('dev'))
app.use(express.json())

//endpoints

app.get("/api/projects", (req, res) => {

    const projectsData = require("./data/projects.json")

    res.json(projectsData)

})

app.get("/api/articles", (req, res) => {

    const articlesData = require("./data/articles.json")

    res.json(articlesData)

})

app.get("/*", (req, res) => {
    res.sendStatus("404")
})

//levantamiento server
app.listen(5005, () => console.log("Servidor levantado en el puerto 5005"))

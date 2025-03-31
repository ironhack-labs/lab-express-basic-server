// IMPORT PACKAGES
const express = require('express')
const morgan = require('morgan')



// CREATE EXPRESS APP
const app = express()



// MIDDLEWARE
// Here you should set up the required middleware:
app.use(express.static("public"))
app.use(express.json())
app.use(morgan("dev"))



// ROUTES
app.get( "/", (req, res) => {
    res.sendFile(__dirname + "/views/home.html")
})
app.get("/blog", (req, res) => {
    res.sendFile(__dirname + "/views/blog.html")
})
app.get("/api/projects", (req,res) => {
    res.json(projects)
})

app.get("/api/articles", (req,res) => {
    res.json(articles)
})

app.use((req, res, next) => {
    res.status(404).sendFile(__dirname + "/views/not-found.html")
})



// START THE SERVER
app.listen(5005, () => {
    console.log("Server listening on port 5005")
})

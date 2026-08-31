
const express = require(`express`)
const morgan = require(`morgan`)
const path = require("path");
const projects = require("./data/projects.json")
 const articles = require("./data/articles.json");
const app = express();
const port = 5005

app.use(express.static("public"))
app.use(express.json())
app.use(morgan("dev"))

app.get(`/`,(req,res) =>{
    res.sendFile(path.join(__dirname + "/views/home.html"));
})
app.get(`/blog`,(req,res) =>{
    res.sendFile(path.join(__dirname + "/views/blog.html"));
})
app.get("/api/projects",(req,res) => {
    res.json(projects)

})
app.get("/api/articles", (req, res) => {
    res.json(articles);
});


app.listen(port)









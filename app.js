// IMPORT PACKAGES
// Here you should import the required packages for your Express app: `express` and `morgan`
const express = require ('express')
const morgan = require ('morgan')

const projects = require ('./data/projects.json')
const articles = require ('./data/articles.json')


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
app.use(morgan('dev'))


// ROUTES
// Start defining your routes here:

//Iteration 3 | Create Home Route

app.get('/', (request,response)=> {
    response.sendFile(__dirname + "/views/home.html")
})


//Iteration 4 | Create Blog Route
app.get('/blog', (request,response)=> {
    response.sendFile(__dirname + "/views/blog.html")
})

//Iteration 5 | JSON Data for Projects
app.get('/api/projects', (request,response)=> {
    response.json(projects)
})

//Iteration 6 | JSON Data for Articles
app.get('/api/articles', (request,response)=> {
    response.json(articles)
})


//Bonus: Iteration 7 | Create a 404 Route
app.get('/*', (request,response)=> {
    response.status(400).sendFile(__dirname + "/views/not-found.html")
})


//Bonus: Iteration 8 | Customize the Home Page
app.post('/', (request,response)=> {
    axios  
    .get('https://www.linkedin.com/mynetwork/')
    .then ((response)=> {
        response.send(response.data)
        .catch((error)=> error)
    })
})



// START THE SERVER
// Make your Express server listen on port 5005:

app.listen(5005,()=>{
    console.log('app running port 5005')
})
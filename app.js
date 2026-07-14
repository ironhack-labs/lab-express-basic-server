// IMPORT PACKAGES
// Here you should import the required packages for your Express app: `express` and `morgan`



// CREATE EXPRESS APP
import express from 'express';
import morgan from 'morgan';
import projects from "./data/projects.json" with {type: "json"}
import articles from "./data/articles.json" with {type: "json"}

const app = express();



// MIDDLEWARE
// Here you should set up the required middleware:
// - `express.static()` to serve static files from the `public` folder
app.use(express.static("public"))
// - `express.json()` to parse incoming requests with JSON payloads
app.use(express.json())
// - `morgan` logger to log all incoming requests
app.use(morgan("dev"));


// ROUTES
// Start defining your routes here:
app.get('/', (req, res) => {
  res.sendFile("home.html", { root: "views" });
});

app.get("/blog", (req,res) => {
  res.sendFile("blog.html", { root: "views" });
})

app.get("/api/projects", (req,res) => {
  res.send(projects);
})

app.get("/api/articles", (req,res) => {
  res.send(articles);
})

app.use((req,res) => {
  res.sendFile("not-found.html", { root: "views" });
})

// START THE SERVER
app.listen(5005, () => {
    console.log("Listening to 5005")
})
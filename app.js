// * IMPORT PACKAGES
// * √ Here you should import the required packages for your Express app: `express` and `morgan`
const express = require('express'); 
const logger = require('morgan'); /* npm install morgan */

// * CREATE EXPRESS APP
// * √ Here you should create your Express app:
const app = express();

// * MIDDLEWARE
// * Here you should set up the required middleware:
// - √ `express.static()` to serve static files from the `public` folder
// - √ `express.json()` to parse incoming requests with JSON payloads
// - √ `morgan` logger to log all incoming requests
app.use(logger('dev')); // Setup our request logger in our express server
app.use(express.static('public')); // Make Public Files Accessible (the image and CSS need to be in public folder)
app.use(express.json()); // Setup our server to use JSON

// * ROUTES
// * √ Start defining your routes here:
app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/blog', (req, res)=>{
    res.sendFile(__dirname + '/views/blog.html');
});

app.get("/api/projects", (req, res)=>{
    res.sendFile(__dirname + '/data/projects.json');
});

// Iteration 5 | Server JSON Data for Articles (in blog page?)
app.get('/api/articles', (req, res)=>{
    // Send JSON data in the response
    res.sendFile(__dirname + "/data/articles.json")
    });

// Bonus: Iteration 6 | Create a 404 Route
app.use((req, res, next)=>{ // request, response e next são parametros
    res.status(404).sendFile(__dirname + '/views/not-found.html'); 
});

// * START THE SERVER
// * √ Make your Express server listen on port 5005:
app.listen(5005, ()=> {console.log("Server listening on port 5005.");
});

// Bonus: Iteration 7 | Customize the Home Page
// add personal info with name, photo, short bio, GitHub and LinkedIn profiles.
// not done

// Bonus: Iteration 8 | Set up Nodemon
// √ npm install nodemon --save-dev 
// (assim  o nodemon foi instalado como dependência no package.json (e não é mais preciso fazer refresh na página))
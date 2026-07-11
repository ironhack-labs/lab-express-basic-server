// IMPORT PACKAGES
// Here you should import the required packages for your Express app: `express` and `morgan`



// CREATE EXPRESS APP
import express from 'express';
import morgan from 'morgan';

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


// START THE SERVER
app.listen(5005, () => {
    console.log("Listening to 5005")
})
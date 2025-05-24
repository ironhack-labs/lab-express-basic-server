
const express = require('express');
const morgan = require('morgan');
const path = require('path');

// Create the Express app
const app = express();

// Middleware setup
app.use(express.static("public"));   
app.use(express.json());             
app.use(morgan('dev'));      

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'home.html'));
});// Log requests
app.get("/api", (req, res) => {
  res.json({ message: "here's my projects" });
});
app.get ("/api/articles", (req, res) => {
    res.json(articles);
})
const PORT = 5005;
app.listen(5005, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});



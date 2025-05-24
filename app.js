const express = require('express');
const logger = require('morgan');

const app = express();


// Middleware
app.use(logger('dev'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));



// Routes
app.get('/', (request, response) => {
  response.sendFile(__dirname + '/views/home.html');
});

app.get('/blog', (request, response) => {
  response.sendFile(__dirname + '/views/blog.html'); 
});

app.get('/api/projects', (request, response) => {
  response.sendFile(__dirname + '/data/projects.json'); 
});

app.get('/api/articles', (request, response) => {
  response.sendFile(__dirname + '/data/articles.json'); 
});

app.use((request, response, next) => {
  response.status(404).sendFile(__dirname + '/views/not-found.html'); 
});
// Start the server
app.listen(5005, () => console.log('Server running on port 5005'));
// START THE SERVER
// Make your Express server listen on port 5005:

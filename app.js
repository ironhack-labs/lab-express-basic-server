const express = require('express');
const logger = require('morgan');
const path = require('path');

const app = express();

//  Middleware 
app.use(logger('dev'));                                      
app.use(express.static(path.join(__dirname, 'public')));     
app.use(express.json());                                     


app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

//  Routes 
app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'home-page.html'));
});

app.get('/cat', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'cat-page.html'));
});

app.get('/data', (req, res) => {
  const user = { name: 'John Doe', age: 30, at: req.requestTime };
  res.json(user); 
});

app.get('/test', (req, res) => {
  res.send(`requestTime from middleware: ${req.requestTime}`);
});

//  404 
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

//  500 
app.use((err, req, res, next) => {
  console.error(' Server Error:', err);
  res.status(500).send('Internal Server Error');
});

//  Start 
app.listen(3000, () => {
  console.log('My first app listening on port 3000! 🚀');
});

// IMPORT PACKAGES
// Here you should import the required packages for your Express app: `express` and `morgan`
const express = require('express')
const server = express()
const PORT = 5005
const path = require('path')
const logger = require('morgan')
const dataProjects = require('./data/projects.json')
const dataArticles = require('./data/articles.json')
// import { Octokit } from 'octokit'
// const octokit = new Octokit({
// 	auth: 'YOUR-TOKEN',
// })
// CREATE EXPRESS APP
// Here you should create your Express app:

server.use(express.static('public'))
server.use(express.json())
server.use(logger('dev'))
// MIDDLEWARE
// Here you should set up the required middleware:
// - `express.static()` to serve static files from the `public` folder
// - `express.json()` to parse incoming requests with JSON payloads
// - `morgan` logger to log all incoming requests

// ROUTES
// Start defining your routes here:
server.get('/blog', (req, res) => {
	res.sendFile(path.join(__dirname, './views/blog.html'))
})
server.get('/', (req, res) => {
	console.log(res)

	res.sendFile(path.join(__dirname, './views/home.html'))
})

server.get('/api/projects', (req, res) => {
	res.json(dataProjects)
})
server.get('/api/articles', (req, res) => {
	res.json(dataArticles)
})
server.get('/*', (req, res) => {
	res.sendFile(path.join(__dirname, './views/not-found.html'))
})
// START THE SERVER
// Make your Express server listen on port 5005:
server.listen(PORT, () => {
	console.log(`Linstenning on Port ${PORT}`)
})

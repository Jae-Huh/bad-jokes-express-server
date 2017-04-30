// Both path and fs are built in
const path = require('path')
const fs = require('fs')

const file = fs.readFileSync('./jokes.json', 'utf8')
const jokes = JSON.parse(file)

function typeJokes (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'add-jokes.html'))
}

function addJokes (req, res) {
  UpdateJokesJson(req.body)

  const collection = {}
  const question = req.body.question
  const answer = req.body.answer
  collection.question = question
  collection.answer = answer

  res.send(jokes)
}

function jokeApi (req, res) {
  res.json(jokes[Math.floor(Math.random() * jokes.length)])
}

function randomJoke (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'random-joke.html'))
}

function UpdateJokesJson(newJoke) {
  jokes.push(newJoke)
  fs.writeFileSync('./jokes.json', JSON.stringify(jokes))
}

module.exports = {
  typeJokes,
  addJokes,
  jokeApi,
  randomJoke
}

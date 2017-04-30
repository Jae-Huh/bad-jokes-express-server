const path = require('path')
const fs = require('fs')

const file = fs.readFileSync('./jokes.json', 'utf8')
const jokes = JSON.parse(file)

function typeJokes (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'add-jokes.html'))
}

function addJokes (req, res) {
  updateJokesJson(req.body)

  const collection = {}
  const question = req.body.question
  const answer = req.body.answer
  collection.question = question
  collection.answer = answer
  
  res.send(jokes)
}

function updateJokesJson(newJoke) {
  jokes.push(newJoke)
  fs.writeFileSync('./jokes.json', JSON.stringify(jokes))
}

module.exports = {
  typeJokes,
  addJokes
}

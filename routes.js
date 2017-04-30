const path = require('path')

function addJokes (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'add-jokes.html'))
}

function jokes (req, res) {
  const collection = {}
  const question = req.body.question
  const answer = req.body.answer
  collection.question = question
  collection.answer = answer
  res.send(collection)
}

module.exports = {
  addJokes,
  jokes
}

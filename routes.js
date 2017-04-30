const path = require('path')

function addJokes (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'add-jokes.html'))
}

module.exports = {
  addJokes
}

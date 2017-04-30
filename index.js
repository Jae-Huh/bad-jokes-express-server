const express = require('express')
const bodyParser = require('body-parser')
// const fs = require('fs')

const routes = require('./routes')
const app = express()
// const file = fs.readFileSync('./jokes.json', 'utf8')
// const jokes = JSON.parse(file)

const PORT = 3000

app.listen(PORT, function () {
  console.log('The server is listening on port', PORT)
})

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', routes.typeJokes)
app.post('/addJokes', routes.addJokes)

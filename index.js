const express = require('express')
const bodyParser = require('body-parser')

const routes = require('./routes')
const app = express()

const PORT = 3000

app.listen(PORT, function () {
  console.log('The server is listening on port', PORT)
})

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', routes.addJokes)
app.post('/jokes', routes.jokes)

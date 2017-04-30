const express = require('express')

const routes = require('./routes')

const PORT = 3000
const app = express()

app.listen(PORT, function () {
  console.log('The server is listening on port', PORT)
})

app.use(express.static('public'))

app.get('/', routes.addJokes)

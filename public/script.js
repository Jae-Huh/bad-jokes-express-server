document.addEventListener('DOMContentLoaded', randomJoke)

// const url = 'http://localhost:3000/joke-api'
const url = '/joke-api'

function randomJoke () {
  fetch(url)
    .then (function (res) {
      return res.json()
    })
    .then (function (data) {
      document.getElementById('question').innerHTML = data.question
      document.getElementById('answer').innerHTML = data.answer
    })
}

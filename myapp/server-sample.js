const express = require('express')
const app = express()
const port = 3000

//http://localhost:3000/books - URI
app.use(express.json())

app.post('/books', function postBook(req, res) {
  res.json({...req.body, id: 1})
})

app.put('/books', function putBook(req, res) {
    res.json({id: 1, name: 'Had Fun'})
})

app.get('/books', (req, res) => {
  res.json([{id: 1, name: 'Have Fun'}])
})

app.delete('/books/:id', (req, res) => {
    res.json({status: 'Deleted'})
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
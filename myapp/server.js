const express = require('express')
const movieRoutes = require('./movieRoutes')
const userRoutes = require('./userRoutes')
const app = express()
const port = 3000

//http://localhost:3000/movies - URI (POST)
//http://localhost:3000/movies/:id - (PUT)
//http://localhost:3000/movies - (GET)
//http://localhost:3000/movies/:id - (GET)
//http://localhost:3000/movies/:id - (DELETE)

app.use(express.json())

app.use('/movies', movieRoutes)
app.use('/users', userRoutes)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
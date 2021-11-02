const express = require('express')
const mongoose = require('mongoose');
const movieRoutes = require('./movieRoutes')
const userRoutes = require('./userRoutes')
const cors = require('cors')
const app = express()
const port = 3001

//http://localhost:3000/movies - URI (POST)
//http://localhost:3000/movies/:id - (PUT)
//http://localhost:3000/movies - (GET)
//http://localhost:3000/movies/:id - (GET)
//http://localhost:3000/movies/:id - (DELETE)
app.use(cors())
app.use(express.json())

app.use('/movies', movieRoutes)
app.use('/users', userRoutes)

async function main() {
  await mongoose.connect('mongodb://localhost:27017/test');
}

main()
.then(() => {
  console.log('Mongodb connected')
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
})
.catch(err => {
  console.err(err)
})


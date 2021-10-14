const express = require('express')
const router = express.Router()
const Movie = require('./model/Movie')

router.post('/', async function postMovie(req, res) {
    const movie = new Movie({name: req.body.name})
    const saved = await movie.save()
    res.json(saved)
  })
  
router.put('/:id',(req, res) => {
    res.json({...req.body, id: req.params.id})
})

router.get('/',async (req, res) => {
    const movies = await Movie.find({name: req.query.name}).lean()
    console.log('the movies', movies)
    res.json(movies)
})

router.get('/:id',(req, res) => {
    res.json({id: req.params.id})
})

router.delete('/:id',(req, res) => {
    res.json({id: req.params.id})
})

module.exports = router
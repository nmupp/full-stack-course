const express = require('express')
const router = express.Router()
const Movie = require('./model/Movie')

router.post('/', async function postMovie(req, res) {
    const movie = new Movie({ name: req.body.name })
    const saved = await movie.save()
    res.json(saved)
})

router.put('/:id', async (req, res) => {
    const id = req.params.id
    const updated = await Movie.findByIdAndUpdate(id, {name: req.body.name}).lean()
    res.json({...updated})
})

router.get('/', async (req, res) => {
    const query = req.query?.name ? { name: req.query.name } : {}
    const movies = await Movie.find(query).lean()
    console.log('the movies', movies)
    res.json(movies)
})

router.patch('/:id/likes',async (req, res) => {
    const id = req.params.id
    const data = await Movie.findById(id).lean()
    const updateToSave = {...data, likes: data.likes + 1}
    const updated = await Movie.findByIdAndUpdate(id, updateToSave).lean()
    res.json({...updated})
})

router.patch('/:id/dislikes',async (req, res) => {
    const id = req.params.id
    const data = await Movie.findById(id).lean()
    const updateToSave = {...data, dislikes: data.dislikes + 1}
    const updated = await Movie.findByIdAndUpdate(id, updateToSave).lean()
    res.json({...updated})
})

router.get('/:id',async (req, res) => {
    const id = req.params.id
    const data = await Movie.findById(id).lean()
    res.json(data)
})

router.delete('/:id', async (req, res) => {
    const deleted = await Movie.findByIdAndDelete(req.params.id).lean()
    res.json(deleted)
})

module.exports = router
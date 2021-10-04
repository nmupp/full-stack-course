const express = require('express')
const router = express.Router()
const Movie = require('./model/Movie')

router.post('/', function postMovie(req, res) {
    const movie = new Movie(req.body.name)
    //save to mongodb
    res.json({...movie, id: 1})
  })
  
router.put('/:id',(req, res) => {
    res.json({...req.body, id: req.params.id})
})

router.get('/',(req, res) => {
    res.json([{id: 1, name: req.query.name}])
})

router.get('/:id',(req, res) => {
    res.json({id: req.params.id})
})

router.delete('/:id',(req, res) => {
    res.json({id: req.params.id})
})

module.exports = router
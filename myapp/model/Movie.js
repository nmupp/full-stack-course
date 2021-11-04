const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
    name: String,
    description: String,
    likes: Array,
    dislikes: Array
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie
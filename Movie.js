class Movie {
    name
    ratings = []
    constructor(name) {
        this.name = name
    }

    set movieRating(rating) {
        this.ratings.push(rating)
    }
}

module.exports = {Movie}
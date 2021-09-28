//movie rating app
const {Movie} = require('./Movie')
const {Rating} = require('./Rating')
const {User} = require('./User')

const bahubali = new Movie('bahubali')

const narsi = new User('narsi')
const bunnu = new User('bunnu')

const rating1 = new Rating(5, narsi)
const rating2 = new Rating(5, bunnu)

//narsi rating
bahubali.movieRating = rating1

//bunnu rating
bahubali.movieRating = rating2

// console.log(JSON.stringify(bahubali))

//2nd movie
const inception = new Movie('inception')

const rating3 = new Rating(4, narsi)
const rating4 = new Rating(5, bunnu)

//narsi rating
inception.movieRating = rating3

//bunnu rating
inception.movieRating = rating4

// console.log(JSON.stringify(inception))

const ratings = inception.ratings
for(i in ratings)  {
    const rating = ratings[i]
    if(rating.stars === 5) {
        console.log(rating)
    } else {
        console.log('this is not max rating', rating.stars)
    }
}
let index = 0
// while(index < ratings.length) {
//     const rating = ratings[index]
//     console.log(rating)
//     index = index + 1
// }
// do {
//     const rating = ratings[index]
//     console.log(rating)
//     index = index + 1
// } while(index <ratings.length)
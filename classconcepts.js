//person planting a tree
// const personName = 'narsi'
// const treeName = 'thulasi'

// const personName1 = 'x'
// const treeName2 = 'y'

// function plantTree(personName, plantName) {
//     console.log(`This person ${personName}, planted a plant with name ${plantName}`)
// }

// function waterThePlant() {}

// function digSoil() {}

// plantTree(personName, treeName)
class Person {
  name
  hobby
  constructor(name, hobby) {
    this.name = name
    this.hobby = hobby
  }
}

class Plant {
  name
  health
  constructor(name, health) {
    this.name = name
    this.health = health
  }
}

const person = new Person('narsi', 'planting');
const person1 = new Person('vinay', 'construction')

const plant = new Plant('thulasi', 'excellent')
const plant1 = new Plant('rose', 'good')

console.log('the person name is==>', person)
console.log('the plant is ==>', plant)

person.name = 'bunnu'

console.log('the updated person ==>', person)



//person plants a tree
class Person {
    name
    hobby
    plant
    constructor(name, hobby, plant) {
      this.name = name
      this.hobby = hobby
      this.plant = plant
    }

    plantATree() {
        this.plant.isPlanted = true
        this.plant.plantedBy = this.name
    }
  }
  
  class Plant {
    name
    health
    isPlanted
    plantedBy
    constructor(name, health) {
      this.name = name
      this.health = health
    }
  }

const plant = new Plant('thulasi', 'excellent')

const person = new Person('narsi', 'planting', plant);

person.plantATree()

console.log('plant details', plant)

const person1 = new Person('bunnu', 'planting', plant)

person1.plantATree()

console.log('plant details', plant)




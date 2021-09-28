class Fruit {
    name
    color

    set fruitName(name) {
        this.name = name
    }

    set fruitColor(color) {
        this.color = color
    }

    get fruitName() {
        return this.name
    }
    get fruitColor() {
        return this.color
    }

    prettyName() {
        return `${this.name} - ${this.color}`
    }
}

const fruit = new Fruit()

fruit.fruitName = 'apple'
fruit.fruitColor = 'red'

console.log(fruit.fruitName)
console.log(fruit.fruitColor)

console.log(fruit.prettyName())

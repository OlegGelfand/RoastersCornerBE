const Coffee = require("../models/Coffee")
// const Chirp = require("../models/Chirp")


const getAllCoffee = (req, res) => {
    Coffee.find({}).then(coffees => {
        console.log("this is coffees",coffees)
        res.json(coffees)
    }).catch(err => {
        console.log(err)
        res.send("Error loading coffees")
    })
}

const getCoffeeByCoffeeName = (req, res) => {
    Coffee.find({ coffeeName: req.params.coffeeName }).then(coffees => {
        res.json(coffees)
    }).catch(err => {
        console.log(err)
        res.send(`Error loading roasters by "${req.params.coffeeName}"`)
    })
}

const getCoffeeById = (req, res) => {
    Coffee.findOne({ _id: req.params.id }).then(coffee => {
        res.json(coffee)
    }).catch(err => {
        console.log(err)
        res.send(`Error loading coffee with ID: "${req.params.id}"`)
    })
}

const createCoffee = (req, res) => {
    Coffee.create(req.body).then(coffee => {
        res.json(coffee)
    }).catch(err => {
        console.log(err)
        res.send(`Error creating coffee`)
    })
}

const updateCoffee = (req, res) => {
    Roaster.findOneAndUpdate({ _id: req.params.id }, req.body)
        .then(coffee => {
            res.json(coffee)
    }).catch(err => {
        console.log(err)
        res.send(`Could not update coffee with ID: "${req.params.id}"`)
    })
}

const deleteCoffee = async (req, res) => {
    const coffee = await Coffee.findOne({ _id: req.params.id })
    coffee.delete().then(coffee => {
        res.send(`${coffee.coffeeName}'s comment "${roaster.body}" has been deleted`)
    }).catch(err => {
        console.log(err)
        res.send(`Could not delete coffee with ID: "${req.params.id}"`)
    })
}

module.exports = {
    getAllCoffee,
    getCoffeeByCoffeeName,
    getCoffeeById,
    createCoffee,
    updateCoffee,
    deleteCoffee
}
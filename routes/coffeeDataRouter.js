const express = require("express")
const router = express.Router()
const coffeeController = require("../controllers/coffeeController")

router.get("/", coffeeController.getAllCoffee)

router.get("/coffeeName/:coffeenName", coffeeController.getCoffeeByCoffeeName)

router.post("/", coffeeController.createCoffee)

router.put("/:coffeeName", coffeeController.updateCoffee)

router.delete("/:coffeeName", coffeeController.deleteCoffee)

module.exports = router
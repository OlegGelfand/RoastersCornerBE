const express = require("express")
const router = express.Router()
const coffeeController = require("../controllers/coffeeController")

router.get("/", coffeeController.getAllCoffee)

router.get("/coffeeName/:coffeenName", coffeeController.getCoffeeByCoffeeName)

router.post("/", coffeeController.createCoffee)

router.put("/:coffeeName", coffeeController.updateCoffee)

router.delete("/:coffeeName", coffeeController.deleteCoffee)


// router.post("/roasterCoffee", (req, res) => {
//     Roaster.create(req.body.roaster).then(newRoaster => {
//       Bookmark.create(req.body.coffee).then(newCoffee => {
//         newRoaster.favorites.push(newRoaster._id);
//         newRoaster.save();
//         res.json(newRoaster);
//       });
//     });
//   });
module.exports = router
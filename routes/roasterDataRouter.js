const express = require("express")
const router = express.Router()
const roasterController = require("../controllers/roasterController")

router.get("/", roasterController.getAllRoasters)

router.get("/companyName/:companyName", roasterController.getRoasterByCompanyName)

// router.get("/validate", userController.validateUser)

router.post("/", roasterController.createRoaster)

router.put("/:companyName", roasterController.updateRoaster)

router.delete("/:companyName", roasterController.deleteRoaster)

module.exports = router
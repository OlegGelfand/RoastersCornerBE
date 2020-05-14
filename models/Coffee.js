const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const CoffeeSchema = new Schema({
    RoasterName:String,
    coffeeName: String,
    roastType: [String],
    availableIn: [String],
    originDate: { type: String, default: new Date() },
    body: String,
    numOrders: { type: Number, default: 0 },
   
})

const Coffee = mongoose.model('Coffee', CoffeeSchema)
module.exports = Coffee
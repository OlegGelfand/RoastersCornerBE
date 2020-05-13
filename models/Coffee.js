const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const CoffeeSchema = new Schema({
    RoasterName:String,
    coffeeName: String,
    roastType: ["light", "Medium", "Dark", "Ga"],
    availableIn:["8oz","12oz","16oz", "Custom"],
    originDate: { type: String, default: new Date() },
    body: String,
    numOrders: { type: Number, default: 0 },
   
})

const Coffee = mongoose.model('Coffee', CoffeeSchema)
module.exports = Coffee
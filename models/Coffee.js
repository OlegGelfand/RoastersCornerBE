const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const CoffeeSchema = new Schema({
    coffeeName: String,
    originDate: { type: String, default: new Date() },
    body: String,
    numLikes: String,  
})

const Coffee = mongoose.model('Coffee', CoffeeSchema)
module.exports = Coffee
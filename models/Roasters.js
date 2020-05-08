const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const RoasterSchema = new Schema({
    companyName: String,
    memberDate: { type: String, default: new Date() },
    location: String,
    body: String,
    numOrders: { type: Number, default: 0 },
    coffees: [
        {
            ref: "Coffee",
            type: mongoose.Schema.Types.ObjectId
        }
    ],
})

const Roaster = mongoose.model('Roaster', RoasterSchema)
module.exports = Roaster
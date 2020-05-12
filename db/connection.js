const mongoose = require('mongoose')
let mongoURI = ""

if (process.env.NODE_ENV === "production") {
    mongoURI = process.env.DB_URL;
  } else {
    mongoURI = 'mongodb://localhost/RoastersCorner';
  }

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })

mongoose.Promise = Promise

module.exports = mongoose


// heroku config.set DB_URL="mongodb+srv://oleg123:oleg123@roasterscorner-d9rgo.mongodb.net/test?retryWrites=true&w=majority"
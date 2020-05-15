const express = require("express")
const parser = require("body-parser")
const cors = require("cors")
const app = express()
const connectDB = require('./config/db');

connectDB();
app.use(cors())
app.use(parser.urlencoded({ extended: true }))
app.use(parser.json())
app.use(express.json({extended: false}));



// app.get("/", (req, res) => {
//     res.redirect("/");
//   });
const roasterDataRouter = require("./routes/roasterDataRouter")
app.use('/roasters', roasterDataRouter)

const coffeeDataRouter = require("./routes/coffeeDataRouter")
app.use('/coffees', coffeeDataRouter)

// app.use('/users', require('.routes/users'))
app.set("port", process.env.PORT || 8080)

app.listen(app.get("port"), () => {
    console.log(`✅ PORT: ${app.get("port")} 🌟`)
})




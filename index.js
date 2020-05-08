const express = require("express")
const parser = require("body-parser")
const cors = require("cors")
const app = express()

app.use(cors())
app.use(parser.urlencoded({ extended: true }))
app.use(parser.json())

const roasterDataRouter = require("./routes/roasterDataRouter")
app.use('/roasters', roasterDataRouter)

const coffeeDataRouter = require("./routes/coffeeDataRouter")
app.use('/coffees', coffeeDataRouter)


app.set("port", process.env.PORT || 8080)

app.listen(app.get("port"), () => {
    console.log(`✅ PORT: ${app.get("port")} 🌟`)
})
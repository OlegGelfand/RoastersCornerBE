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
// const coffeeDataRouter = require("./routes/coffeeDataRouter")
// app.use('/coffees', coffeeDataRouter)






// app.set("port", process.env.PORT || 8080)

// app.listen(app.get("port"), () => {
//     console.log(`✅ PORT: ${app.get("port")} 🌟`)
// })

// Haleys


app.use(express.json({ extended: false }));

const roasterDataRouter = require("./routes/roasterDataRouter")
app.use('/roasters', roasterDataRouter)

const coffeeDataRouter = require("./routes/coffeeDataRouter")
app.use('/coffees', coffeeDataRouter)
app.use("/users", require("./routes/users"));
app.use("/auth", require("./routes/auth"));



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
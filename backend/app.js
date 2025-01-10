const dotenv = require("dotenv")
dotenv.config();
const express = require('express')
const app = express()
const cors = require('cors')
const connectToDb = require('./db/db')
const userRoutes = require("./route/user.route")
const cookieParser = require('cookie-parser')
const captainRoutes = require('./route/captain.route')

connectToDb();

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())


app.get('/', (req, res) => {
    res.send("Om Shree Shyam Devaay Namah;")
});

app.use("/users", userRoutes)
app.use("/captains", captainRoutes)

module.exports = app;
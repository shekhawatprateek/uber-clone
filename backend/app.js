const dotenv = require("dotenv")
dotenv.config();
const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())

app.get('/', (req, res) => {
    res.send("Om Shree Shyam Devaay Namah;")
})



module.exports = app;
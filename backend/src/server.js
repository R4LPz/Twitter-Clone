const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
require('dotenv').config()

const router = require('./routes/routes')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(morgan("common"))
app.use(router)

mongoose.connect(process.env.DB_URL, ()=>{
    console.log(`💾 Connected to the database`)  
})

app.listen(port, ()=>{
    console.log(`🔥 Server is Running on port ${port}`) 
})
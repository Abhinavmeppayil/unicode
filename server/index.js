const express = require('express')
const mongoose = require("mongoose")
const cors = require('cors')
const userModel= require('./models/users')


const app = express()

app.use(cors())

app.use(express.json())




mongoose.connect("mongodb://127.0.0.1:27017/Un")

app.post("createUser", (req, res)=>{
    userModel.create((req.body))
    .then(users =>res.json(users))
    .catch( err =>err.json(err))
})




app.listen(3000, ()=>{
    console.log('server is running')
})
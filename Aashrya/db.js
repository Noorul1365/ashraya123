const mongoose = require("mongoose");

var mongoURL = 'mongodb+srv://noorulk135:Noorul8594%40@cluster0.ewn4bdv.mongodb.net/?retryWrites=true&w=majority/rooms'

mongoose.connect(mongoURL, {useUnifiedTopology : true ,useNewUrlParser:true})

var connection = mongoose.connection

connection.on('error' , ()=>{
    console.log("Mongo DB Connection failed")
})

connection.on('connected' , ()=>{
    console.log("Mongo DB Connection Successful")
})

module.exports = mongoose
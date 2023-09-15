const mongoose = require ('mongoose')

const userschema = new mongoose.Schema({
name:String,
email:String,
password:String

}) 

const employeemodel = mongoose.model("employee",userschema)
module.exports = employeemodel;
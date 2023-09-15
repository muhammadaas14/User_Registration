const express = require('express')
const mongoose = require ('mongoose')
const cors = require('cors')
const employeemodel = require('./models/Employee')
const env = require('dotenv')
env.config({ path: ".env" });
const app = express()
app.use(express.json())
app.use(cors())


mongoose.connect(process.env.mongo,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
  


app.post('/register',(req,res)=>{
employeemodel.create(req.body).then(employees=>res.json(employees))
.catch(error=>res.json(error))
})
app.post('/Login',(req,res)=>{
 const {email,password} = req.body;
 employeemodel.findOne({email:email,password:password}).then(user=>{
    if(user){
        if(user.password===password){
            res.json("success")
        }else{
            res.json("Enter Valid Password")
        }
    }
    else{
        res.json("No record Exist")
        
    }
  
   
 })


});



app.listen(3002,()=>{
    console.log(`server is running `)
})
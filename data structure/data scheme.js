const mongoose = require('mongoose')
const bcrypt=require("bcrypt")
const scheme= new mongoose.Schema({

    first_name:{
        type:String,
        required:true

    },
     last_name:{
        type:String,
        required:true

    },
    email:{
        type:String,
        required:true,
        unique:true

    },
   password:{
        type:String,
        required:true

    },
    confirm_password:{
        type:String,
        required:true

    }
    
})

scheme.pre("save", async function(next){
    if(this.isModified("password")){
        
    this.password= await bcrypt.hash(this.password,10)
    
    this.confirm_password=undefined
    }
    next()

})
const Register =  new mongoose.model("Register",scheme)

module.exports=Register;
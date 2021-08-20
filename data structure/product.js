const mongoose = require('mongoose')

const scheme1= new mongoose.Schema({

    id:{
        type:String,
        required:true,
        unique:true
    },
     product_name:{
        type:String,
        required:true

    },
    label:{
        type:String,
        required:true
        

    },
   desc:{
        type:String,
        required:true

    },
    comment:{
        type:String,
        required:true

    }
    
})

const Product =  new mongoose.model("Product",scheme1)

module.exports=Product;
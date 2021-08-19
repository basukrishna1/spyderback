const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/details",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
    
}).then(()=>{
console.log(`successful`)
}).catch((e)=>{
    console.log(`unsuccessful`)
})
    

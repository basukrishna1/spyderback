const express = require('express');
const path = require('path')
const bcrypt=require("bcrypt")
const app = express()
const port = process.env.PORT || 3000
require("./database/data");
const Register= require("./data structure/data scheme")
const Product=require("./data structure/product")
app.set("view engine","hbs");
app.use(express.json())
app.use(express.urlencoded({extended:false}))


app.get('/signin', (req, res) => {
    res.render('signin')
  })

app.get('/', (req, res) => {
    res.render('signin')
  }) 


app.get('/register', (req, res) => {
    res.render('register')
  })

app.get('/add', (req, res) => {
    res.render('add')
  })

app.get('/bidding', (req, res) => {
    res.render('bidding')
  })  
app.post("/register",async(req,res)=>{
    try {
        const password= req.body.password;
        const cpassword= req.body.confirm_password;

        if(password === cpassword){
            const signdata = new Register({
                first_name:req.body.first_name,
                last_name:req.body.last_name,
                email:req.body.email,
                password:req.body.password,
                confirm_password:req.body.confirm_password
            })
        const registered = await signdata.save()
        res.status(201).render("signin")
        }
        else
         res.send("password not matching");

    } catch (error) {
        res.send("error1")
    }
}) 
app.post('/signin', async(req, res) => {
    try {

        const username=req.body.username
        const password=req.body.password
        
        const usermail = await Register.findOne({email:username})
        if(usermail.password===password){
            res.render('bidding')
        }
        else
        res.send("Incorrect password")
    } catch (error) {
        res.status(404).send("Invalid credentials")
    }
  }) 
app.post("/add",async(req,res)=>{

    const productdata = new Product({
        id:req.body.id,
        product_name:req.body.product_name,
        label:req.body.label,
        desc:req.body.desc,
        comment:req.body.comment
    })
const pro = await productdata.save()
res.status(201).render("bidding")

})  

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
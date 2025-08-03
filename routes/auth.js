const express= require('express')
const Joi= require('joi')
const router= express.Router();
const bcrypt= require("bcryptjs")
const jwt= require("jsonwebtoken")
const User= require("../models/User");
const verifyTokenMiddleware = require('../middleware/authMiddleware');
const schemaRegister=Joi.object({
    name: Joi.string().min(3).required(),
    email: Joi.string().required().email(),
    password: Joi.string().required().min(6)
})
const schemaLogin=Joi.object({
    email:Joi.string().required().email(),
    password: Joi.string().required()
})
router.post('/register',async(req,res)=>{
    let data= req.body
    console.log("Incoming data:", data); 
    const result= schemaRegister.validate(req.body)
    if(result.error){
        res.status(400).send(result.error.details[0].message)
    }
    else{
       const user=await User.findOne({email:data.email})
       if(user){
        res.status(400).send('the user already exists')
       }
       else{
        const hashpw= await bcrypt.hash(data.password,10)
        data.password=hashpw
       const newUser= new User(data)
       await newUser.save()
       res.status(201).send("user registered successfully!")
       }
    }
})
router.post('/login',async(req,res)=>{
    let result= schemaLogin.validate(req.body)
    if(result.error) return res.status(400).send(result.error.details[0].message)
    const user=await User.findOne({email:req.body.email})
        if(!user) return res.status(400).send("Entered email is not correct")
            const verify= await bcrypt.compare(req.body.password,user.password)
     if(!verify) return res.status(400).send("The entered email and password does not match")
         const token=jwt.sign({_id:user._id},process.env.JWT_SECRET,{expiresIn:"1h"})
      res.send({message:"Login successful",token})
})
router.get("/profile",verifyTokenMiddleware,async(req,res)=>{
    const user=await User.findById(req.user._id).select("-password")
    res.send({
        name:user.name,
        email:user.email
    })
})
module.exports=router
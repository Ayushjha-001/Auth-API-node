const mongoose= require("mongoose")
const userSchema= new mongoose.Schema({
    name:{
        type:String,
        minlength:3,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        match:/.+\@.+\..+/
    },
    password:{
        type:String,
        required:true,
        minlength:6
    }
})
const User= mongoose.model("User",userSchema)
module.exports=User;
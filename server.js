const express= require("express")
const env= require("dotenv")
const cors= require("cors")
const mongoose=require("mongoose")
const authRoutes=require("./routes/auth")
env.config();
const app= express()
app.use(express.json())
app.use('/api/auth',authRoutes)
app.use(cors())
app.get('/',(req,res)=>{
    res.send("AUTH API is live")
})
mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>{
    console.log("Connection successful")
    const PORT= process.env.PORT||5000
    app.listen(PORT, () => console.log(`Listening at Port ${PORT}`));

})
.catch((err)=>{
    console.log("Mission unsuccessful",err)
})
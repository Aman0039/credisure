require('dotenv').config();
const express = require("express");
const connectDB = require('./config/connectDB');

const PORT = process.env.PORT || 4000
const app = express();

connectDB()

//route health
app.get("/" , (req , res)=>{
    res.status(200).json({msg : "Route Health is ok!"})
})

//listining PORT
app.listen(PORT , ()=>{
    console.log(`Server is Running on ${PORT}`);
})

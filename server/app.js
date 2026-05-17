const express = require("express");
require('dotenv').config();

const PORT = process.env.PORT || 4000

const app = express();

//route health
app.get("/" , (req , res)=>{
    res.status(200).json({msg : "Route Health is ok!"})
})

//listining PORT
app.listen(PORT , ()=>{
    console.log(`Server is Running on ${PORT}`);
})

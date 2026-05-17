const mongoose = require("mongoose");

const connectDB = async (req , res) => {
    try {
        await mongoose.connect(MONGO_URI)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({errMsg : error.message});
    }
}

module.exports = connectDB;
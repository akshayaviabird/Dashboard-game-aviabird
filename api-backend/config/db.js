const mongoose = require('mongoose');

const connectDB = async () => {
    const conn = await mongoose.connect("mongodb://localhost:27017/AviaDB", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
};

module.exports = connectDB;
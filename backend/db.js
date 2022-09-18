require('dotenv').config()
const mongoose = require('mongoose');
const mongoURI = process.env.mongoURI;

const connectToMongo = () => {
    mongoose.connect(mongoURI, () => {
        console.log("Connect to mongo successfully");
    })
}

module.exports = connectToMongo;
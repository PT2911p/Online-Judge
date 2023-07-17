const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const DBConnection = async () => {
    // const MONGO_URI = process.env.MONGO_URL;
    const MONGO_URI = "mongodb+srv://dazedtree372gamer:LCH69mcV6MEd70Rs@cluster0.ekhzfby.mongodb.net/?retryWrites=true&w=majority";
    
    try {
        await mongoose.connect(MONGO_URI, {useNewUrlParser:true, useUnifiedTopology:true});
        console.log('DB connected successfully!!!');
    } catch (error) {
        console.log('Error while connecting with the database ', error.message);
    }
}

module.exports = {
    DBConnection,
};
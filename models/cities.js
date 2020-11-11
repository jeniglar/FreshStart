const mongoose = require("mongoose");
const Schema = mongoose.Schema

const CitySchema = new Schema({
    email: 
        {type: String,
        required: true,
        unique: true},
   
});

const City = mongoose.model("City", CitySchema);

module.exports = User;
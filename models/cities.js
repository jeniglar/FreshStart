const mongoose = require("mongoose");
const Schema = mongoose.Schema

const PlaceSchema = new Schema({
    email: 
        {type: String,
        required: true,
        unique: true},
   
});

const Place = mongoose.model("Place", PlaceSchema);

module.exports = Place;
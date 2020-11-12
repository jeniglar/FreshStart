const mongoose = require("mongoose");
const Schema = mongoose.Schema

const UserSchema = new Schema({
    email: 
        {type: String,
        required: true,
        unique: true
    },
    password: 
        {type: String,
        required: true
    },
    surveys: 
        {type: mongoose.Schema.Types.ObjectId,
        ref: "Survey"}
        
});

const User = mongoose.model("User", UserSchema);

module.exports = User;


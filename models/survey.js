const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SurveySchema = new Schema ({
    name: {
        type: String,
        
    },
    position: {
        type: Number,
        
    },
    surveyID: {
        type: Number,
        
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
        }


});

const Survey = mongoose.model("Survey", SurveySchema);

module.exports = Survey;
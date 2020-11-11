const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SurveySchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    position: {
        type: Number,
        required: true
    },
    id: {
        type: Number,
        required: true
    }


});

const Survey = mongoose.model("Survey", SurveySchema);

module.exports = Survey;
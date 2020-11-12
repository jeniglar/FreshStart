const db = require("../models")
const mongoose = require("mongoose");


module.exports = {
    createSurvey: function (req, res) {
        console.log("!!!!!!!!!!!!!!!!")
        console.log(req.body)
        db.Survey
        .create(req.body)
        .then(survey => {
            res.json(survey)
            
            
        }).catch(err => console.log(err));
        
    },

    findSurvey: function (req, res) {
        console.log("@@@@@@@@@@")
        console.log(req.body)
        console.log(req.params)
        db.Survey.find({user: mongoose.Types.ObjectId(req.params.user)})

    }
}
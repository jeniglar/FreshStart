const db = require("../models");
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
        console.log("@@@@@@@@@@@@@@@@")

        db.Survey
            .find({})
            .populate({
                path: "user"
            })
            .then(surveyData => {
                
                console.log(surveyData)
                res.json(surveyData)
                
            }).catch(err => console.log(err));
            console.log("@@@@@@@@@@@@@@@@")
    }
    
}
const db = require("../models")


module.exports = {
    createSurvey: function (req, res) {
        console.log("!!!!!!!!!!!!!!!!")
        console.log(req.body)
        db.Survey
        .create(req.body)
        .then(survey => {
            res.json(survey)
            
            
        }).catch(err => console.log(err));
        
    }
}
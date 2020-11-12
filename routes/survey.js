const router = require('express').Router();
const surveyCtrl = require('../controllers/survey-ctrl')



// router.post('/survey', SurveyCtrl.createSurvey)
router.route("/")
    .post(surveyCtrl.createSurvey)
    .get(surveyCtrl.findSurvey)


module.exports = router;
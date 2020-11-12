const router = require('express').Router();
const surveyCtrl = require('../controllers/survey-ctrl')



// router.post('/survey', SurveyCtrl.createSurvey)
router.route("/")
    .post(surveyCtrl.createSurvey)


module.exports = router;
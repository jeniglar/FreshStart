const router = require('express').Router();
const surveyCtrl = require('../controllers/survey-ctrl')



router.route("/")
    .post(surveyCtrl.createSurvey)
    .get(surveyCtrl.findSurvey)

router.route("/user/:user")
    .get(surveyCtrl.findSurvey)


module.exports = router;
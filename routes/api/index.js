const router = require("express").Router();
const user = require("./users");
// const surveyRoute = require("./survey")
// const survey = require("./survey")
// const post = require("./posts")

router.use("/users", user);
// router.use("/survey", surveyRoute);
// router.use("./posts", post);

module.exports = router;
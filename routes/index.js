const path = require("path");
const router = require("express").Router();
const userRoutes = require("./api/users");
const surveyRoute = require("./survey")

router.use("/api/users", userRoutes);
router.use("/api/survey", surveyRoute);

router.use((req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"))
});

module.exports = router;
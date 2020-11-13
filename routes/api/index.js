const router = require("express").Router();
const user = require("./users");


router.use("/users", user);

module.exports = router;
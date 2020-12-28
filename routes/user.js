const router = require("express").Router();
const userControllers = require("../controllers/user");

router.post("/register", userControllers.register);
router.get("/getUserByEmail/:email", userControllers.getUserbyEmail);

module.exports = router;
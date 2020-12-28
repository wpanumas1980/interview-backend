const router = require("express").Router();
const userControllers = require("../controllers/user");

router.post("/register", userControllers.register);
router.get("/getAllUser", userControllers.getAllUser);
router.get("/getUserByEmail/:email", userControllers.getUserbyEmail);

module.exports = router;
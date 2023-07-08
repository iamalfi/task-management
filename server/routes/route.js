const router = require("express").Router();

const userController = require("../controller/user");
const taskController = require("../controller/task");
const { authentication } = require("../middleware/midd");

router.post("/signup", userController.createUser);
router.post("/login", userController.login);
module.exports = router;

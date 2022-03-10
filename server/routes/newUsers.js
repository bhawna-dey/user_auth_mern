const router = require("express").Router();

var newUserController=require("../controller/newUser.controller");

router.post("/", newUserController.addUser);

module.exports = router;
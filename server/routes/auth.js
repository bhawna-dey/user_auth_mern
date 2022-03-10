const router = require("express").Router();

const bcrypt = require("bcrypt");
const Joi = require("joi");

var AuthController = require('../controller/auth.controller')

router.post("/", AuthController.getUsers);

module.exports = router;
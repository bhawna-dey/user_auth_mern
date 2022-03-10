const express = require('express');

const router = express.Router();

var ApiController = require('../controller/api.controller')
var ApiSaveController=require('../controller/apiSave.controller')

// Routes
router.get('/', ApiController.getUserList);
router.post('/save', ApiSaveController.saveUser);

module.exports = router;
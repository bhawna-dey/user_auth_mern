const router = require("express").Router();
const { User } = require("../models/user");



router.get('/', function(req, res) { 
    User.find({}, function(err, users) { 
        var userMap = {}; 
        users.forEach(function(user) { 
            userMap[user._id] = user; 
        }); 
    res.send(userMap); 
    }); 
});

module.exports=router;
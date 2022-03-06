require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const User=require('./models/user');
const mongoose=require('mongoose');

// database connection
connection();

// middlewares
app.use(express.json());
app.use(cors());

app.get('/usersList', function(req, res) { 
    User.find({}, function(err, users) { 
        var userMap = {}; 
        users.forEach(function(user) { 
            userMap[user._id] = user; 
        }); 
    res.send(userMap); 
    }); 
});


// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);



const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));
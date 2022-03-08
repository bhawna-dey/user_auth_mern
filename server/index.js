require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const User=require('./models/user');
const mongoose=require('mongoose');
const apiRoutes = require('./routes/api');

// database connection
connection();

// middlewares
app.use(express.json());
app.use(cors());




// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use('/api', apiRoutes);
//app.use("api/usersList", usersListRoutes);



const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));
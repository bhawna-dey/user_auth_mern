require("dotenv").config();

const express = require("express");
const app = express();

const cors = require("cors");
const mongoose=require('mongoose');

const dbconnection = require("./db");

const userRoutes = require("./routes/newUsers");
const authRoutes = require("./routes/auth");

const User=require('./models/user');
const apiRoutes = require('./routes/api');

// database connection
dbconnection();

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use("/api/newUsers", userRoutes);
app.use("/api/auth", authRoutes);
app.use('/api', apiRoutes);

const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));
const express = require("express");
const userroute = express();
const bodyParser = require("body-parser");

userroute.use(bodyParser.json());
userroute.use(bodyParser.urlencoded({ extended: true }));

const usercontrolar = require("../controllers/usercontroller");
userroute.post("/signup", usercontrolar.createuser);
userroute.post("/login", usercontrolar.loginuser);

module.exports = userroute;

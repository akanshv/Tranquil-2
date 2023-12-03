const express = require('express');
const app = express();
router = express.Router();
session = require('express-session')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')


//model
const feed = require('../Models/feed');
const User = require('../Models/user');
const SoldDetails = require('../Models/solddetails');
const Slot=require('../Models/expertschedule');
const Doctor = require('../Models/doctors');

// error class
const ExpressError = require('../utils/ExpressError')
// wrapper err function
const catchAsync = require('../utils/catchAsync');





const control = require('../Controllers/Usercontroller');

const { protect } = require("../Middlewares/authMiddleware");





router.post('/register', catchAsync(control.postregister));

router.post('/login', catchAsync(control.postlogin));

router.get('/userprofile',protect,catchAsync(control.userprofile));

router.get("/logout",protect, catchAsync(control.logut));

router.get('/happy/:sid',protect,catchAsync(control.happy));


module.exports = router;
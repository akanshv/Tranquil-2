const express = require('express');
const app = express();
router=express.Router();

// error class
const ExpressError=require('../utils/ExpressError')
// wrapper err function
const catchAsync = require('../utils/catchAsync');
//middleware
const {isLoggedIn}=require('../Middlewares/authomiddleware')

//models
const experts = require('../Models/doctors');
const Slot=require('../Models/expertschedule');
const User = require('../Models/user');


const control = require('../Controllers/therapycontroller');


var {navactive}=require('../navactive')

navactive=[0,0,0,1,0,0];


router.get('/',isLoggedIn,catchAsync(control.gettherapy));

router.post('/askslot/:did',isLoggedIn,catchAsync(control.askslot));

router.get('/:no',isLoggedIn,catchAsync(control.filter));




module.exports=router;
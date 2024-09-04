const express = require('express');
const app = express();
router=express.Router();

// error class
const ExpressError=require('../utils/ExpressError')
// wrapper err function
const catchAsync = require('../utils/catchAsync');
//middleware


//models
const experts = require('../Models/doctors');
const Slot=require('../Models/expertschedule');
const User = require('../Models/user');


const control = require('../Controllers/therapycontroller');
const { protect } = require("../Middlewares/authMiddleware");



router.get('/',catchAsync(control.gettherapy));

router.post('/askslot/:did',catchAsync(control.askslot));

router.get('/:no',catchAsync(control.filter));




module.exports=router;
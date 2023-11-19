const express = require('express');
const app = express();

var {navactive,isloggedin}=require('../navactive')

router=express.Router({mergeParams:true});//merge params is true is used to merge param varna id khaliaayegi and kuch hoyega hi nhi//joi validation

const Joi=require('joi');
const {reviewSchema}=require('../JoiSchema.js');

// error class
const ExpressError=require('../utils/ExpressError')
// wrapper err function
const catchAsync = require('../utils/catchAsync');


const feed = require('../Models/feed')
const comment=require('../Models/comments');



module.exports=router;
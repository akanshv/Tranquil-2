const express = require('express');
const app = express();
router=express.Router();
const administer = require('../Models/admin');
// error class
const ExpressError=require('../utils/ExpressError')
// wrapper err function
const catchAsync = require('../utils/catchAsync');
const bcrypt=require('bcrypt');

var {navactive}=require('../navactive')

navactive=[0,0,0,0,1,0]

//middleware
const {isLoggedIn}=require('../Middlewares/authomiddleware')

//model
const Product = require('../Models/products');
const doc=require('../Models/doctors');
const feed = require('../Models/feed');
const comment=require('../Models/comments');

const control=require('../Controllers/admincontroller');



router.get('/adminlogin',control.getlogin);

router.post('/adminlogin',catchAsync(control.postlogin));

router.get('/adminprofile',catchAsync(control.getadminprofile));

router.get('/adminproductsmanage',catchAsync(control.getadminproductmanage));

router.put('/adminproductupdate/:pid',catchAsync(control.productupdate));

router.get('/adminexpertaccept/:tid' ,catchAsync(control.expertaccept));

router.get('/adminexpertdelete/:tid' ,catchAsync(control.expertdelete));

router.delete('/adminproductdelete/:pid',catchAsync(control.productdelete));

router.get('/adminfeedok/:fid',catchAsync(control.feedaccept));

router.get('/adminfeeddelete/:fid',catchAsync(control.feeddelete));

router.post('/adminproductadd',catchAsync(control.productadd));

module.exports=router;
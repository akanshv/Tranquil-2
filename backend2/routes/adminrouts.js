const express = require('express');
const app = express();
router=express.Router();
const administer = require('../Models/admin');
// error class
const ExpressError=require('../utils/ExpressError')
// wrapper err function
const catchAsync = require('../utils/catchAsync');
const bcrypt=require('bcrypt');

//middleware
// const {isLoggedIn}=require('../Middlewares/authomiddleware')

//model


const control=require('../Controllers/admincontroller');



// router.get('/adminlogin',control.getlogin);

router.post('/adminlogin',catchAsync(control.postlogin));

router.get('/adminprofile/',catchAsync(control.getadminprofile));

router.get('/adminproductsmanage/',catchAsync(control.getadminproductmanage));

router.put('/adminproductupdate/:id/:pid',catchAsync(control.productupdate));

router.get('/adminexpertaccept/:id/:tid' ,catchAsync(control.expertaccept));

router.get('/adminexpertdelete/:id/:tid' ,catchAsync(control.expertdelete));

router.delete('/adminproductdelete/:id/:pid',catchAsync(control.productdelete));

router.get('/adminfeedok/:id/:fid',catchAsync(control.feedaccept));

router.get('/adminfeeddelete/:id/:fid',catchAsync(control.feeddelete));

router.post('/adminproductadd/:id',catchAsync(control.productadd));

module.exports=router;
const express = require('express');
const app = express();
router = express.Router();


// error class
const ExpressError = require('../utils/ExpressError')
// wrapper err function
const catchAsync = require('../utils/catchAsync');
const bcrypt = require('bcrypt');

const multer = require('multer');
const uploads = multer({ dest: 'routes/uploads' });

//imagur
const imgurUploader = require('imgur-uploader');

const { protect ,expertprotect} = require("../Middlewares/authMiddleware")



//middleware
// const { isLoggedIn,isDoctorloggedin} = require('../Middlewares/authomiddleware')

//model
const experts = require('../Models/doctors');
const tempdoct = require('../Models/temp-doctors');
const User=require('../Models/temp-doctors');
const Slot=require('../Models/expertschedule');


const control=require('../Controllers/doctorcontroller');









// router.get('/expertlogin',control.getlogin);

router.post('/expertlogin',catchAsync(control.postlogin));

//yahan image lagani hai


// router.get('/newtherapists', catchAsync(control.getnewtherapist));

router.post('/newtherapists', catchAsync(control.postnewtherapist));


router.post('/slotmaker',catchAsync( ));

router.get('/slotaccept/:id',catchAsync( async (req,res)=>{
    
}))

router.post('/updateprofile',expertprotect,catchAsync(control.updateprofile));



router.get('/expertprofile',expertprotect,catchAsync(control.getexpertprofile));

router.get('/acceptslot/:sid',expertprotect, catchAsync(control.acceptslot));

router.get('/rejectslot/:sid',expertprotect, catchAsync(control.rejectslot));




module.exports = router;
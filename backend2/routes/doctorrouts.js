const express = require('express');
const app = express();
router = express.Router();
const generateToken=require('../Middlewares/generateToken')

// error class
const ExpressError = require('../utils/ExpressError')
// wrapper err function
const catchAsync = require('../utils/catchAsync');
const bcrypt = require('bcryptjs');

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

router.post('/login', catchAsync(
    async (req, res) => {
      const { email, password } = req.body;
      console.log('anmol: ',req.body);
      const expert = await experts.findOne({ email:email });
      console.log(expert)
      if (expert && (await bcrypt.compare(password, expert.hash))) {
        console.log("Login Successful");
        res.json({
          _id: expert._id,
          name: expert.Name,
          email: expert.email,
          pic: expert.pfp,
          doc: expert.document,
          token: generateToken(expert._id,res),
        }).status(201);
      } else {
        res.status(401);
        throw new Error("Invalid Email or Password");
      }
  }
        
  
  ));

//yahan image lagani hai


// router.get('/newtherapists', catchAsync(control.getnewtherapist));

router.post('/newtherapists', catchAsync(control.postnewtherapist));


router.post('/slotmaker/:id',protect,catchAsync(control.slotmaker));

// router.post('/updateprofile',expertprotect,catchAsync(control.updateprofile));

router.post('/update',expertprotect,catchAsync(control.update));

router.get('/expertprofile',expertprotect,catchAsync(control.getexpertprofile));

router.post('/acceptslot/:sid',expertprotect,catchAsync(control.acceptslot));

router.get('/rejectslot/:sid',expertprotect, catchAsync(control.rejectslot));




module.exports = router;
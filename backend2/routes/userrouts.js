const express = require('express');
const app = express();
router = express.Router();
// process.binding('http_parser').HTTPParser = require('http-parser-js').HTTPParser;
session = require('express-session')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const fs=require('fs');

const cloudinary = require('cloudinary').v2
cloudinary.config({
  cloud_name:process.env.CLOUDNAME,
  api_key:process.env.APIKEY,
  api_secret:process.env.CLOUD_SECRET
})

const asyncHandler = require("express-async-handler");
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

const multer=require('multer');




const control = require('../Controllers/Usercontroller');

const { protect } = require("../Middlewares/authMiddleware");

// const filseStorageEngine=multer.diskStorage({
//     destination:(req,file,cb)=>{
//       cb(null,"./uploads");
//     },
//     filename:(req,file,cb)=>{
//       cb(false,Date.now()+"--"+file.originalname);
//     },
//   });

// const upload=multer({storage:filseStorageEngine});
const filseStorageEngine = multer.diskStorage({
    destination: (req, file, cb) => {
      const uploadDir = "./routes/uploads";
      // Check if the directory exists, create it if it doesn't
      if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir);
      }
      cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
      cb(null,file.originalname);
    },
  });
  
  const upload = multer({ storage: filseStorageEngine });

const generateToken = require("../Middlewares/generateToken");


router.post('/register',upload.single('image'), catchAsync(asyncHandler(async (req, res) => {
    try {
      console.log(req.body);
      console.log(req.file);
    
      const userExists = await User.findOne({email:req.body.email});
      if (userExists) {
        console.log(userExists);
        res.status(400).json({respnse:"User Exists"});
      }
      else{
        const data=await cloudinary.uploader.upload(`routes/uploads/${req.file.filename}`)
        console.log(data);
        var salt = bcrypt.genSaltSync(10); 
        var hash = bcrypt.hashSync(req.body.password, salt)
        console.log(hash);
        const user = await User.create({
            username:req.body.username,
            email:req.body.email,
            hash:hash,
            pfp:data.url,
            salt:salt
        });

 

        console.log(user);
        if (user) {
            //console.log(generateToken);;
            res.status(201).json({
              _id: user._id,
              name: user.username,
              email: user.email,
              pic: user.pfp,
              usertoken: generateToken(user._id,res),
            });
          } else {
            res.status(400);
            // throw new Error("User not found");
        }
        fs.unlinkSync(`routes/uploads/${req.file.filename}`);
      
      }
    } catch (error) {
       console.log(error);
    }
    

    

    

    

    //const { username, password, email, pfp } = req.body.register;
    // if (!username || !email || !password || !pfp) {
    //   res.status(400);
    //   throw new Error("Please Enter all the Feilds");
    // }
  
    // const userExists = await User.findOne({ email });
  
    // if (userExists) {
    //   res.status(400);
    //   throw new Error("User already exists");
    // }
  
    // const user = await User.create({
    //   username,
    //   email,
    //   password,
    //   pfp,
    // });
  
    // if (user) {
    //   res.status(201).json({
    //     _id: user._id,
    //     name: user.username,
    //     email: user.email,
    //     pic: user.pfp,
    //     usertoken: generateToken(user._id),
    //   });
    // } else {
    //   res.status(400);
    //   throw new Error("User not found");
    // }
  
  
  
    
    
    //console.log(registerdUser);
  })));

router.post('/login', catchAsync(
  async (req, res) => {
    try{
      const {email,password}=req.body;
      console.log("anmol is here");
      const user = await User.findOne({ email:email });
      console.log(password,user.hash);
      console.log(user);
      await bcrypt.compare(password, user.hash)
      console.log("anmol is here");
      console.log("inside 201")
      console.log( "here")
      if (user && (await bcrypt.compare(password, user.hash))) {
        console.log("inside 201")
        res.json({
          _id: user._id,
          name: user.username,
          email: user.email,
          pic: user.pfp,
          token: generateToken(user._id,res),
        }).status(201);
      } else {
        console.log("inside 401")
        res.status(401);
        // throw new Error("Invalid Email or Password");
      }
    }
    catch(error){
        console.log("inside error")
        console.log(error);
    }
    
}
      

));

router.get('/userprofile',protect,catchAsync(control.userprofile));

router.post('/userprofile/doctorfilter', protect, catchAsync(control.doctorfilter));

router.get("/logout",protect, catchAsync(control.logut));

router.get('/happy/:sid',protect,catchAsync(control.happy));



module.exports = router;
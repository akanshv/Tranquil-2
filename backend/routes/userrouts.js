const express = require('express');
const app = express();
var { navactive } = require('../navactive');
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

//database calling
const { inserttable, checktable, result } = require('../Sqlitedb/database');
var loginerrori;
var regerrori;

const passport = require('passport');

const control = require('../Controllers/Usercontroller');



router.get('/login', (control.getlogin));

router.get('/register', (control.getregister));

router.post('/register', catchAsync(control.postregister));

router.post('/login', passport.authenticate('local', { failureFlash: true, failureRedirect: '/login', keepSessionInfo: true }), catchAsync(control.postlogin));

router.get('/userprofile',catchAsync(control.userprofile));

router.get("/logout", catchAsync(control.logut));

router.get('/happy/:sid',catchAsync(control.happy));


// router.post('/login',catchAsync(async(req,res)=>{
//     username=req.body.user.username;
//     password=req.body.user.password;
//     checktable(username,password).then(d => {
//         req.session.loginno=1; 
//         delete req.session.regerror;
//         delete req.session.loginerror;
//        // console.log(d);
//         res.status(200).redirect('/home')
//     })
//     .catch(err => {
//         //alert('wrong credentials');
//         req.session.loginerror='Oops wrong credentials';
//         loginerrori=req.session.loginerror;
//         res.render('user/login',{navactive:navactive,loginerrori:loginerrori})
//         //console.log(err);
//         // //err -> OOPS
//         // res.status(404).json({
//         //     status:err
//         // })

//     })
// }))






// router.post('/login',catchAsync(async(req,res)=>{
//     email=req.body.user.email;
//     password=req.body.user.password;
//     if (!(password&&email)) {
//         req.flash('error','All fields are necessary');
//         res.redirect('/login');
//     }
//      // Validate if user exist in our database
//     const user = await User.findOne({ email });
//     if (user && (await bcrypt.compare(password, user.Password))) {
//         // Create token
//         const token = jwt.sign(
//           { user_id: user._id, email },
//           process.env.TOKEN_KEY,
//           {
//             expiresIn: "2h",
//           }
//         );
//         res.cookie('TranquilCookie',token,{
//             expires:new Date(Date.now()+1000*60*60*2),
//             httpOnly:true
//         }).status(200)


//       }
//       res.status(400).send("Invalid Credentials");


// }))

// router.get('/logout',(req,res,next)=>{
//     req.session.destroy();
//     regerrori='';
//     loginerrori='';
//     res.redirect('/home');
// })


// // router.post('/register',catchAsync(async(req,res)=>{
// //     sname=req.body.register.name
// //     username=req.body.register.username;
// //     password=req.body.register.password;
// //     console.log(req.body);
// //     inserttable(sname,username,password).then(d => {
// //         req.session.loginno=1; 
// //         delete req.session.loginerror;
// //         delete req.session.regerror;
// //         res.status(200).redirect('/home')
// //     })
// //     .catch(err => {
// //         console.log(err);
// //         console.log(typeof(err));
// //         req.session.regerror="Oops this username is taken.....take any other username";
// //         regerrori=req.session.regerror;

// //         //err -> OOPS
// //         res.render('user/register',{navactive:navactive,regerrori:regerrori})
// //         // res.status(404).json({
// //         //     status:err
// //         // })

// //     })

// router.post('/register',catchAsync(async(req,res)=>{
//     email=req.body.register.email
//     username=req.body.register.username;
//     password=req.body.register.password;
//     pfp='https://i.imgur.com/T2Aoapu.jpg';
//      // Validate user input
//     if (!(email && password && username &&pfp)) {
//         req.flash('error','All fields are necessary');
//         res.redirect('/register');
//     }
//    // check if user already exist
//    // Validate if user exist in our database
//       const oldUser = await User.findOne({ email });

//       if (oldUser) {
//         req.flash('error','User Already Exists.....Please Login');
//         res.redirect('/login');
//       }

//       //Encrypt user password
//         encryptedPassword = await bcrypt.hash(password, 10);

//       // Create user in our database
//         const user = await User.create({
//         UserName:username,
//         SmileCount:0,
//         commentlike:0,
//         Email: email,// sanitize: convert email to lowercase
//         Password: encryptedPassword,

//       });
//       await user.save();
//       // Create token
//         const token = jwt.sign(
//         { user_id: user._id, email },
//         process.env.TOKEN_KEY,
//         {
//           expiresIn: "2h",
//         }

//       );
//       res.cookie('TranquilCookie',token,{
//         expires:new Date(Date.now()+1000*60*60*2),
//         httpOnly:true
//     }).status(200)

//       // return new user
//     //   res.status(201).json(user);
//     req.flash('success','Login Done...Welcome User');
//     res.redirect('/home');

// }))




module.exports = router;
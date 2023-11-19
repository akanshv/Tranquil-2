const jwt = require("jsonwebtoken");
const {sessiondata} = require("../navactive");
const User = require("../Models/user");

// error class
const ExpressError=require('../utils/ExpressError')
// wrapper err function
const catchAsync = require('../utils/catchAsync');



const authorising=(req, res, next) => {
  let token = req.cookies && req.cookies.TranquilCookie;
  if (token) {
    jwt.verify(token, process.env.TOKEN_KEY, async (err, decoded) => {
      if (err) {
        req.flash('error','You need to login First')
        res.redirect("/login");
      }
      const user = await User.findOne({
        _id: decoded.user_id,
      });
      console.log("Working");
      sessiondata.Username = user.name;
      sessiondata.currentuserid = user._id;
    });
  } else {
    // req.flash('error','You need to login first')
    return res.redirect("/login");
  }
  next();
};


ispostrequest=catchAsync(async(req,res,next)=>{
    req.session.postrequest=true;
})

isLoggedIn=catchAsync(async(req,res,next)=>{
  // console.log('req.user.....',req.user);  ye appjs me hai    //this passport method gives details of user from the session and cookies
  //console.log(req.path,req.originalUrl) // give the path but not original path
  req.session.returnTo=req.originalUrl;
  //req.session.anmol='pandey';
 // console.log('middleware');
//    console.log(req.originalUrl);
//    console.log(req.session.returnTo)

//console.log(moss); 
if(!req.isAuthenticated()){
   //const moss = await mongosession.updateOne({finder:121},{returnTo:`${req.session.returnTo}`});
    console.log(req.session);
   // console.log('isloggedin vala session')
   req.flash('error','You must login first');
   return res.redirect('/login');
}
next();
})


isDoctorLoggedin=catchAsync(async(req,res,next)=>{
  if(req.session.doctorid){
    req.flash('error','You must login first');
    return res.redirect('/expert/expertlogin');
  }
  next();
})

module.exports = {authorising,isLoggedIn,ispostrequest,isDoctorLoggedin};// error class



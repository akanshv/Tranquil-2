const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')


//model
const feed = require('../Models/feed');
const User = require('../Models/user');
const SoldDetails = require('../Models/solddetails');
const Slot=require('../Models/expertschedule');
const Doctor = require('../Models/doctors');

//database calling
const { inserttable, checktable, result } = require('../Sqlitedb/database');
var loginerrori;
var regerrori;

const passport = require('passport');

// Functions : 

module.exports.getlogin=(req, res, next) => {
    navactive = [0, 0, 0, 0, 0, 1];
    res.render('user/login', { navactive: navactive, loginerrori: loginerrori });
    //console.log('anmol');
}

module.exports.getregister=(req, res, next) => {
    navactive = [0, 0, 0, 0, 0, 1];
    res.render('user/register', { navactive: navactive, regerrori: regerrori });
    //console.log('anmol');
}

module.exports.postregister=async(req,res)=>{
    try{
        const {username,password,email,pfp}=req.body.register;
        const user=new User({username,email,pfp});
        console.log(user);
        const registerdUser=await User.register(user,password);
        req.login(registerdUser,err=>{
            if(err) return next(err);
            req.flash('success','welcome to Tranquil!');
            if(req.session.returnTo){
                if(req.session.postrequest){
                    return res.redirect('/home');
                }
                else{
                    if(req.session.passport){
                        delete req.session.adminid;
                    }
                       if(req.session.doctorid){
                        delete req.session.doctorid;
                    }
                    return res.redirect(req.session.returnTo);
                }
            }
            return res.redirect('/home');
        })
        //console.log(registerdUser);
    }
    catch(e){
        req.flash('error',e.message);
        res.redirect('/register');
    }
}

module.exports.postlogin=async(req,res)=>{
    //    if(req.session.postloggedIn){
    //         //console.log("anmol");
    //         req.flash('suceess',"Thanks for reviewing")
    //         url=`/campgrounds/${req.session.campid}`
    //         req.session.postloggedIn=false;
    //         const campground =await Campground.findById(req.session.campid);
    //         const review=new  Review(req.session.review);
    //         review.author=req.user._id;
    //         // console.log(review);
    //         // console.log(review.rating);
    //         // console.log(review.body);
    //         campground.reviews.push(review);
    //         await review.save();
    //          await campground.save();
    //         res.redirect(url);
    
    //     }

    if(req.session.returnTo){
        if(req.session.postrequest){

        }
        else{
            req.flash('success',"You logged in Succesfully");
            return res.redirect(req.session.returnTo);
        }
    }
    req.flash('success',"You logged in Succesfully");
        redir='/home'
       // console.log(req.session);
       if(req.session.passport){
        delete req.session.adminid;
       }
       if(req.session.doctorid){
        delete req.session.doctorid;
        }
        res.redirect(redir);
    }


module.exports.userprofile=async(req, res) => {
    navactive=[0,0,0,0,0,1];
    const use = await User.findById(req.user._id);
    const posts = await feed.find({author:req.user._id}).populate('author');
    const sold = await SoldDetails.find({userid:req.user._id}).populate('productarr');
    const slotter=await Slot.find({Userid:req.user._id}).populate('doctorid')
    console.log(slotter);
    res.render('userprofile',{navactive:navactive, use:use, posts:posts, sold:sold, slotter:slotter})
}

module.exports.logut=async(req, res, next) =>{
    req.logout(function(err) {
      if (err) {
        req.flash('error',"error in logout");
        return next(err);
      }
      req.flash('success',"You logged out successfully");
      res.redirect('/home');
    });
}

module.exports.happy=async(req,res)=>{
    const slotter =await  Slot.findById(req.params.sid);
    const doc = await Doctor.findById(slotter.doctorid);
    var hapno = doc.Happyno + 1 ;
    await Doctor.updateOne({_id:slotter.doctorid},{Happyno:hapno});
    await Slot.updateOne({_id:req.params.sid},{status:'reviewed'});
    console.log(await  Slot.findById(req.params.sid));
    console.log(await Doctor.findById(slotter.doctorid))
   // await Slot.deleteOne({_id:req.params.sid});
   // const docer = await Doctor.findById(slotter.doctorid);
    res.redirect('/userprofile');
    //console.log(slotter);
}
const express = require('express');
const app = express();
router=express.Router();

// error class
const ExpressError=require('../utils/ExpressError')
// wrapper err function
const catchAsync = require('../utils/catchAsync');


var {navactive}=require('../navactive')

//middleware
const {isLoggedIn}=require('../Middlewares/authomiddleware')

navactive=[0,0,1,0,0,0]


//model



router.get('/',isLoggedIn, catchAsync(async (req, res, next) => {
     console.log(navactive)
    //res.send("Hello from Yelpcamp");
    //yahan pe dbms se aa rha feed
     //const feeds = await feed.find({});
     //console.log(feeds);
     isloggedin=0;
    //console.log(isloggedin)
        isloggedin=req.session.loginno;
        res.render('chats/chatentry',{navactive,navactive:navactive});
   
         res.redirect('/login');
}))

router.get('/peer',isLoggedIn, catchAsync(async (req, res, next) => {
    console.log(navactive)
   //res.send("Hello from Yelpcamp");
   //yahan pe dbms se aa rha feed
    //const feeds = await feed.find({});
    //console.log(feeds);
    isloggedin=0;
   //console.log(isloggedin)

       res.render('chats/chatpeer',{navactive,navactive:navactive,isloggedin:isloggedin});

        res.redirect('login');

    

}))


router.get('/listner', catchAsync(async (req, res, next) => {
    console.log(navactive)
   //res.send("Hello from Yelpcamp");
   //yahan pe dbms se aa rha feed
    //const feeds = await feed.find({});
    //console.log(feeds);
   
       res.render('chats/chatlisten',{navactive,navactive:navactive,isloggedin:isloggedin});
   
        res.redirect('/login');
   
    

}))





module.exports=router;
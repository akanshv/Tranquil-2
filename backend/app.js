
const express = require('express');
const app = express();
const ejsmate = require('ejs-mate');
const path = require('path');
//method overide for patch and put into post
const methodOveride = require('method-override');


//env
const {config}=require('dotenv');
config();

const Joi=require('joi');
app.use(methodOveride('_method'));
const flash=require("connect-flash");
const cookie=require('cookie-parser');
const User = require('./Models/user');

const session=require("express-session");
sessionconfig={
    secret:'thisismysecret',
    resave:false,
    saveUninitialized:true,
    cookie:{
        expires:Date.now()+1000*60*60*24*7,
        maxAge:1000*60*60*24*7,
        HttpOnly:true
    }
}
app.use(session(sessionconfig));



// passport
const passport=require("passport");
const LocalStrategy=require('passport-local');
const GoogleStrategy=require('passport-google-oauth2').Strategy;



//passport
app.use(passport.initialize());
app.use(passport.session());  //for connecting to session


//local strategy
passport.use(new LocalStrategy(User.authenticate()));//this authenticates the user bas ye line
passport.use(new LocalStrategy(User.authenticate()));
// //google Strategy
// passport.use(new GoogleStrategy({
//     clientID:process.env.Googleclientid,
//     ClientSecret:process.env.Googleclientid,
//     callbackURL:"http://localhost:6969/auth/google/callback",
//     passReqToCallback:true
// },authUser),
// authUser=(req,profile,done)=>{
//      return(null,profile);
// });


passport.serializeUser(User.serializeUser()); //how to store and destore the store
const url=process.env.url
passport.deserializeUser(User.deserializeUser());


//session flash
app.use(flash());


//post request ke liye parsing 
app.use(express.urlencoded({ extended: true }))  //to parse the post request of the urlencoded type
app.use(express.json())  //to parse the info in json type...both are the middlewares


const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
mongoose.connect(url,{
    useNewUrlParser: true,//you have to specify the portno...mongoose changed this so by making false user can go to previous version where port no. is not required
    //useCreateIndex:true,//avoid depracation warnings(warnings that notify us that a specific feature (e.g. a method) will be removed soon (usually in the next minor or major version) and should be replaced with something else.)
    useUnifiedTopology: true// to use new connnection manager of mongoose
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Tranquil Database connected");
});




// app.use(express.static(__dirname + '/Resources'));
app.use(express.static("Resources"));
//ejs set kiya
app.engine('ejs', ejsmate);//ejs mate laga rha
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));


// error class
const ExpressError=require('./utils/ExpressError')
// wrapper err function
const catchAsync = require('./utils/catchAsync');



//Database

//sqlite3
const sqldb=require('./Sqlitedb/database');
//testimonial
const {carousaltext}=require('./Seeds/carousalhome');

//middleware
const {isLoggedIn}=require('./Middlewares/authomiddleware')







//frequent middleware
app.use((req,res,next)=>{
    res.locals.currentuser=req.user;
    //console.log("app middleware");
    //console.log(req.session);
   // console.log(res.locals.currentuser);    // locals are the things that are accessed by every page dont need to send every time
     //isse har navbar pe decide ki kahan dalna hai login ko kahan pe logout ko
    res.locals.success=req.flash('success');
    res.locals.error=req.flash('error');
    next();
})


//routes
const feedroutes=require("./routes/feedrouts");
const productroutes=require("./routes/productrouts");
const userroutes=require("./routes/userrouts");
const chatroutes=require("./routes/chatrouts");
const therapyroutes=require("./routes/therapyrouts");
const adminroutes=require('./routes/adminrouts');
const doctorroutes=require('./routes/doctorrouts');

app.use('/admin',adminroutes);
app.use('/expert',doctorroutes);
app.use("/feed",feedroutes);
app.use("/products",productroutes);
app.use("/chat",chatroutes);
app.use("/",userroutes);
app.use('/therapy',therapyroutes);


app.get('/logoutprofile',(req, res) => {
     req.session.destroy();
     res.redirect('/home');
 })

app.get('/home',(req, res) => {
    navactive=[1,0,0,0,0,0];
    res.render('home',{navactive:navactive})
})


 
 app.use((err, req, res, next) => {
    const {statusCode=500}=err;
    if(!err.message){
        err.message="Something went Wrong";
    }
    console.log(err);
    res.status(statusCode).render('error',{err});
})
const PORT=process.env.PORT|| 6969
app.listen(PORT, () => {
    console.log('Listening the port 6969 from Tranquil...');
});
const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
// const swaggerFile = require('.swagger-output.json');
const swaggerUi = require('swagger-ui-express');

//method overide for patch and put into post
const methodOveride = require('method-override');

const cors=require('cors');

app.use(cors({ origin: true, credentials: true }));
//env
const {config}=require('dotenv');
config();



const rfs =require('rotating-file-stream');
const accessLogStream=rfs.createStream("ctime.log",
    {interval:"1d",
    path:path.join(__dirname,'log')});

// Morgan-middleware
app.use(morgan(':method,:url'));
morgan.token("mine","This request is :method from :url and it took :total-time[2] ms to process");
app.use(morgan('mine',{stream:accessLogStream}));

const Joi=require('joi');
app.use(methodOveride('_method'));
const flash=require("connect-flash");
const cookie=require('cookie-parser');
const User = require('./Models/user');

app.use(cookie());




const swaggerFile = require('./swagger-output.json')
// const session=require("express-session");
// sessionconfig={
//     secret:'thisismysecret',
//     resave:false,
//     saveUninitialized:true,
//     cookie:{
//         expires:Date.now()+1000*60*60*24*7,
//         maxAge:1000*60*60*24*7,
//         HttpOnly:true
//     }
// }
// app.use(session(sessionconfig));



// passport
// const passport=require("passport");
// const LocalStrategy=require('passport-local');
// const GoogleStrategy=require('passport-google-oauth2').Strategy;



//passport
// app.use(passport.initialize());
// app.use(passport.session());  //for connecting to session


//local strategy
// passport.use(new LocalStrategy(User.authenticate()));//this authenticates the user bas ye line
// passport.use(new LocalStrategy(User.authenticate()));
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


// passport.serializeUser(User.serializeUser()); //how to store and destore the store
// const url=process.env.url
// passport.deserializeUser(User.deserializeUser());


//session flash
// app.use(flash());


//post request ke liye parsing 
app.use(express.urlencoded({ extended: true }))  //to parse the post request of the urlencoded type
app.use(express.json())  //to parse the info in json type...both are the middlewares


const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
mongoose.connect((process.env.NODE_ENV==='test' ? process.env.testurl : process.env.url),{
    useNewUrlParser: true,//you have to specify the portno...mongoose changed this so by making false user can go to previous version where port no. is not required
    //useCreateIndex:true,//avoid depracation warnings(warnings that notify us that a specific feature (e.g. a method) will be removed soon (usually in the next minor or major version) and should be replaced with something else.)
    useUnifiedTopology: true// to use new connnection manager of mongoose
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Tranquil Database connected");
});


// REDIS : //

const redis = require("redis");
// const client = createClient({
//   url: process.env.REDIS_URL,
// });
// socket: {
//       host: 'redis-server',
//       port: 6379,
//     },

// const redis = require('redis');


// const redisClient = redis.createClient({
//   socket: {
//     host: 'redis-server',
//     port: 6379,
//   },
// });

// client.on("connect", () =>
  // console.log(`Redis is connected on port ${process.env.REDIS_PORT}`)
// );
// client.on("error", (err) => {+
//   console.error("Error Connecting to Redis Client:", err);
// });

// if (process.env.NODE_ENV !== "test") {
//     (async () => {
//       // await client.connect();
//     })();
  
//     client.set("visits", 0);
  
//     app.get("/visits", async (req, res) => {
//       try {
//         const currentVisits = await client.get("visits");
//         let visits = parseInt(currentVisits) || 0;
//         visits++;
//         await client.set("visits", visits);
//         res.send("Number of visits is: " + visits);
//       } catch (error) {
//         console.error("Error getting or setting visit count:", error);
//         res.status(500).send("Internal Server Error");
//       }
//     });
  
    // Attach redisClient middleware
    // app.use(async (req, res, next) => {
    //   try {
    //     if (!client) {
    //       await client.connect();
    //     }
    //     req.redisClient = client;
    //     next();
    //   } catch (err) {
    //     console.error("Error connecting to Redis:", err);
    //     next(err);
    //   }
    // });

  // }

/////////////

// // app.use(express.static(__dirname + '/Resources'));
// app.use(express.static("Resources"));
// //ejs set kiya
// app.engine('ejs', ejsmate);//ejs mate laga rha
// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, '/views'));


// error class
// const ExpressError=require('./utils/ExpressError')
// // wrapper err function
// const catchAsync = require('./utils/catchAsync');



//Database

// //sqlite3
// const sqldb=require('./Sqlitedb/database');
// //testimonial
// const {carousaltext}=require('./Seeds/carousalhome');

//middleware
const { notFound, errorHandler } = require('./Middlewares/errorMiddleware')




// Swagger :
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));



// //frequent middleware
// app.use((req,res,next)=>{
//     res.locals.currentuser=req.user;
//     //console.log("app middleware");
//     //console.log(req.session);
//    // console.log(res.locals.currentuser);    // locals are the things that are accessed by every page dont need to send every time
//      //isse har navbar pe decide ki kahan dalna hai login ko kahan pe logout ko
//     res.locals.success=req.flash('success');
//     res.locals.error=req.flash('error');
//     next();
// })


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



app.use(notFound);
app.use(errorHandler);

let PORT = process.env.PORT || 3000;
if(process.env.NODE_ENV == "test"){
    PORT = 0;
}
app.listen(PORT, (req, res) => {
    console.log(`Listening the port ${PORT} from Tranquil...`);
})

module.exports=app;
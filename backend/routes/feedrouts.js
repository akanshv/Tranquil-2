const express = require('express');
const app = express();
router=express.Router();

const fs=require('fs');

// error class
const ExpressError=require('../utils/ExpressError')
// wrapper err function
const catchAsync = require('../utils/catchAsync');

var {navactive}=require('../navactive')

//model
const feed=require('../Models/feed');
const User=require('../Models/user');
const Comment=require('../Models/comments');
//const { navactive } = require('../navactive');

//middleware
const {isLoggedIn}=require('../Middlewares/authomiddleware')


//multer for file uploading
const multer=require('multer');
const uploads=multer({dest:'routes/uploads'});


//imagur
const imgurUploader = require('imgur-uploader');
//json file
//const {feeds}=require('../Seeds/feeds');

// //navactive
// var navactive=require('../navactive');


router.get('/', catchAsync(async (req, res, next) => {
    navactive=[0,1,0,0,0,0]
    //  const user=await User.find({});
    //  console.log(user);
     const feeds = await feed.find({}).populate('author');
    // console.log(feeds);

     res.render('feed/index', {feeds:feeds,navactive:navactive});

}))

router.get('/newfeed',isLoggedIn,(req, res, next) => {
    navactive=[0,1,0,0,0,0]
    
    //res.send("Hello from Yelpcamp");
    res.render('feed/newblog',{navactive:navactive});
})

router.post('/newfeed',isLoggedIn,uploads.single('image'),catchAsync(async(req,res)=>{
    console.log(req.file);
    if(!req.file){
        req.flash('error','Upload Image Again');
        res.redirect(`/feed/newfeed`);
    }
    multerpath=req.file.path;
    base64=fs.readFileSync(`${req.file.path}`,'base64');
    const buffer=Buffer.from(base64,'base64');
    fs.writeFileSync(`routes/uploadpng/${req.file.filename}.jpg`,buffer);
    
    imgurUploader(fs.readFileSync(`routes/uploadpng/${req.file.filename}.jpg`), {title: 'Hello!'}).then(async data => {
        console.log(data);
        fs.unlinkSync(`routes/uploadpng/${req.file.filename}.jpg`);
        fs.unlinkSync(multerpath);
         
        post={
            topic:req.body.topic,
            title:req.body.title,
            image:data.link,
            caption:req.body.caption,
            descriptions:req.body.description
        }


        const newpost = new feed(post);
        console.log(newpost); 
        newpost.author=req.user._id;
        await newpost.save();
        req.flash('success','Successfully your post is created');
        res.redirect(`/feed/${newpost._id}`);


    });
    


    
    
}))




router.get('/:id',isLoggedIn,catchAsync(async (req, res, next) => {
//res.send("Hello from Yelpcamp");
isloggedin=req.session.loginno;
const id = req.params.id
//console.log(id);
navactive=[0,1,0,0,0,0]
// console.log(id);
// const post = await feed.findById(id).populate('author').populate('comments');

const post= await feed.findById(id).populate('author').populate('comments').populate('comments.author');


// .populate('author');



console.log(post);


// console.log(post.comments.author+" "+" yes yaha ")

res.render('feed/show',{post,navactive:navactive});
})

)
//
//
 

router.post('/comment/:id',isLoggedIn,catchAsync(async(req,res)=>{
    const post =await feed.findById(req.params.id);
    console.log(req.body.comment.body);
    const comment=new Comment(req.body.comment);
   // console.log('ANMOLLLLLLL')
    console.log(req.user);
    comment.author=req.user._id;
    comment.authorname=req.user.username;
    comment.authorpfp=req.user.pfp;
    console.log(comment);
    post.comments.push(comment);
    await comment.save();
     await post.save();
    req.flash('Success','Thanks for Review');
    res.redirect(`/feed/${post._id}`);
}
 
))


router.get('/like/:id',isLoggedIn,catchAsync(async(req,res)=>{
    console.log('anmol');
    const post =await feed.findById(req.params.id);
    id=req.user._id; 
    post.reallikes.push(id);
    post.likes=post.likes+1;
    await post.save();

    const changedpost =await feed.findById(req.params.id);
    console.log(changedpost);
 
    res.status(200).json(changedpost);
    //req.flash('Success','Thanks for liking');
    // res.redirect(`/feed/${post._id}`);

}))


router.get('/report/:id',isLoggedIn,catchAsync(async(req,res)=>{
    const post =await feed.findById(req.params.id);
    id=req.user._id;
    if (!(post.reportarr.includes(id))) {
        post.reportarr.push(id);
    } 
    await post.save();
    //req.flash('Success','Thanks for Reporting, we will look into this');
    const changedpost =await feed.findById(req.params.id);
    console.log(changedpost);
 
    res.status(200).json(changedpost);
    
}))

router.get('/unlike/:id',isLoggedIn,catchAsync(async(req,res)=>{
    const post =await feed.findById(req.params.id);
    id=req.user._id; 
    post.reallikes.pop(id);
    post.likes=post.likes-1;
    await post.save();
    const changedpost =await feed.findById(req.params.id);
    console.log(changedpost);
    res.status(200).json(changedpost);
    //req.flash('Success','This post is uninspired');
    

}))




router.get('/filterfeed/:no',catchAsync(async(req,res)=>{
    navactive=[0,1,0,0,0,0]
    type=req.params.no;
    console.log(typeof(type));
    feeder = await feed.find({}).populate('author');
    let feeds=[];
    if(type==='3'){
         feeds = feeder.sort((a,b) => -a.likes + b.likes);
         res.status(200).json(feeds) //For Ajax
    }
    else if(type==='1'){
        feeds=feeder.sort((a,b) => (a.uploaddate < b.uploaddate) ? 1 : ((b.uploaddate < a.uploaddate) ? -1 : 0));
        res.status(200).json(feeds) //For Ajax
    }
    else if(type==='2'){
        feeds=feeder.sort((a,b) => (a.uploaddate > b.uploaddate) ? 1 : ((b.uploaddate > a.uploaddate) ? -1 : 0));
        res.status(200).json(feeds)  //For Ajax
    }
    else{
        return res.redirect('/feed');
    }


    res.render('feed/index', {feeds:feeds,navactive:navactive});

}))




module.exports=router;


const express = require('express');
const app = express();
router=express.Router();

const fs=require('fs');

// error class
const ExpressError=require('../utils/ExpressError')
// wrapper err function
const catchAsync = require('../utils/catchAsync');


//model
const feed=require('../Models/feed');
const User=require('../Models/user');
const Comment=require('../Models/comments');
//const { navactive } = require('../navactive');

//middleware
// const {isLoggedIn}=require('../Middlewares/authomiddleware')
const { protect } = require("../Middlewares/authMiddleware")


//multer for file uploading
const multer=require('multer');
const uploads=multer({dest:'routes/uploads'});


//imagur
const imgurUploader = require('imgur-uploader');
//json file
//const {feeds}=require('../Seeds/feeds');

// //navactive
// var navactive=require('../navactive');


// router.get('/', catchAsync(async (req, res, next) => {
//     navactive=[0,1,0,0,0,0]

//     //  const user=await User.find({});
//     //  console.log(user);
//     console.log('anmol')
//      const feeds = await feed.find({}).populate('author');
//      res.status(200).json(feeds);
//     // console.log(feeds);

//     //  res.render('feed/index', {feeds:feeds,navactive:navactive});

// }))

const control = require('../Controllers/feedcontroller');
router.get('/',catchAsync(control.getfeed));


// router.get('/newfeed',isLoggedIn,(req, res, next) => {
//     navactive=[0,1,0,0,0,0]
    
//     //res.send("Hello from Yelpcamp");
//     res.render('feed/newblog',{navactive:navactive});
// })

router.post('/newfeed',protect,uploads.single('image'),catchAsync(async(req,res)=>{
    try {
        console.log(req.body);
        console.log(req.file);
        if(!req.file){
            req.status(500).json({error:"Send Good image"});
            
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
           newpost.author=req.user._id;///putting anmol id
          //newpost.author='643411d41cf578087f24def5';
            //await newpost.save();
            req.status(200).json(newpost._id);
            // req.flash('success','Successfully your post is created');
            // res.redirect(`/feed/${newpost._id}`);
    
    
        });
    } catch (error) {
        res.status(500).json({message:"Error",error:error})
    }
}))


router.post('/newfeedreact',protect,catchAsync(async(req,res)=>{
    try {
        console.log(req.body);
        console.log(req.file);
        post={
                topic:req.body.topic,
                title:req.body.title,
                image:req.body.image,
                caption:req.body.caption,
                descriptions:req.body.description
            }
    
    
          const newpost = new feed(post);
           
          //  newpost.author=req.user._id;///putting anmol id
          const auth=await User.findOne({_id:req.user._id});
          console.log(auth);
          newpost.author=auth;
          console.log(newpost);
          await newpost.save();
          res.status(200).json(newpost._id);
            // req.flash('success','Successfully your post is created');
            // res.redirect(`/feed/${newpost._id}`);
    
    
        ;
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Error",error:error})
    }
}))




router.get('/:id',protect,catchAsync(async (req, res, next) => {
//res.send("Hello from Yelpcamp");
console.log('anmol')
console.log(req.user);
const id = req.params.id
//console.log(id);
navactive=[0,1,0,0,0,0]
// console.log(id);
// const post = await feed.findById(id).populate('author').populate('comments');

const post= await feed.findById(id).populate('author').populate('comments').populate('comments.author');


// .populate('author');



console.log(post);
res.status(200).json(post);


// console.log(post.comments.author+" "+" yes yaha ")

// res.render('feed/show',{post,navactive:navactive});
}))
//
//
 

router.post('/comment/:id',protect,catchAsync(async(req,res)=>{

    try {
        console.log("anmol0000");
        const post =await feed.findById(req.params.id);
        console.log(req.body);
    
        const comment=new Comment({
            body:req.body.comment,
            author:req.user,
            authorname:req.user.username,
            authorpfp:req.user.pfp
        });
       // console.log('ANMOLLLLLLL')
        //console.log(req.user);
        console.log(comment);
        post.comments.push(comment);
        await comment.save();
        await post.save();
        const posthere= await feed.findById(req.params.id).populate('author').populate('comments').populate('comments.author');
        //console.log(post);
        // req.flash('Success','Thanks for Review');
        // res.redirect(`/feed/${post._id}`);
        res.status(200).json(posthere);
    } catch (error) {
        res.status(500).json({message:"Error",error:error})
    }

}))


router.get('/like/:id',protect,catchAsync(async(req,res)=>{
    try {
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
    } catch (error) {
        res.status(500).json({message:"Error",error:error})
    }

}))


router.get('/report/:id',protect,catchAsync(async(req,res)=>{

    try {
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
    } catch (error) {
        res.status(500).json({message:"Error",error:error})
    }
   
    
}))

router.get('/unlike/:id',protect,catchAsync(async(req,res)=>{
    try {
        const post =await feed.findById(req.params.id);
        id=req.user._id; 
        post.reallikes.pop(id);
        post.likes=post.likes-1;
        await post.save();
        const changedpost =await feed.findById(req.params.id);
        console.log(changedpost);
        res.status(200).json(changedpost);
        //req.flash('Success','This post is uninspired');    
    } catch (error) {
        res.status(500).json({message:"Error",error:error})

    }
  

}))




router.get('/filterfeed/:no',catchAsync(async(req,res)=>{
    try {
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
            res.status(500).json({message:"Error",error:error})
        }
    } catch (error) {
        res.status(500).json({message:"Error",error:error})

    }



    // res.render('feed/index', {feeds:feeds,navactive:navactive});

}))




module.exports=router;


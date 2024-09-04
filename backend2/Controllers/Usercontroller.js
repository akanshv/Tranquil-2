const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

//model
const feed = require("../Models/feed");
const User = require("../Models/user");
const SoldDetails = require("../Models/solddetails");
const Slot = require("../Models/expertschedule");
const Doctor = require("../Models/doctors");
const {redisClient} =  require('../cache/redisio.js')

//database calling

const generateToken = require("../Middlewares/generateToken");

module.exports.postregister = asyncHandler(async (req, res) => {
  const { username, password, email, pfp } = req.body.register;
  if (!username || !email || !password || !pfp) {
    res.status(400);
    throw new Error("Please Enter all the Feilds");
  }

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({
    username,
    email,
    password,
    pfp,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.username,
      email: user.email,
      pic: user.pfp,
      usertoken: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("User not found");
  }



  
  
  //console.log(registerdUser);
});

module.exports.postlogin = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
  
    if (user && (await user.matchPassword(password))) {
      res.json({
        _id: user._id,
        name: user.username,
        email: user.email,
        pic: user.pfp,
        token: generateToken(user._id),
      });
    } else {
      res.status(401);
      throw new Error("Invalid Email or Password");
    }
});


// Redis Controller :
module.exports.userprofile = asyncHandler(async (req, res) => {
  // const user = await User.findById(req.user._id);
  // const posts = await feed.find({ author: req.user._id }).populate("author");
  // console.log(posts);
  // const sold = await SoldDetails.find({ userid: req.user._id }).populate(
  //   "productarr"
  // );
  // const slotter = await Slot.find({ Userid: req.user._id }).populate(
  //   "doctorid"
  // );
  // console.log(slotter);
  // console.log({
  //   user: user,
  //   posts: posts,
  //   sold: sold,
  //   slotter: slotter,
  // })
  // res.status(200).json({
  //   user: user,
  //   posts: posts,
  //   sold: sold,
  //   slotter: slotter,
  // });

  redisClient.get("userprofile", async (err, cachedData) => {
    if (err) throw err;

  if (cachedData) {
    return res.json(JSON.parse(cachedData));
  } else {

    const user = await User.findById(req.user._id);
    const posts = await feed.find({ author: req.user._id }).populate("author");
    console.log(posts);
    const sold = await SoldDetails.find({ userid: req.user._id }).populate(
      "productarr"
    );
    const slotter = await Slot.find({ Userid: req.user._id }).populate(
      "doctorid"
    );
    console.log(slotter);
    console.log({
      user: user,
      posts: posts,
      sold: sold,
      slotter: slotter,
    })

    redisClient.setex("userprofile", 3600, JSON.stringify({user: user, posts: posts, sold: sold, slotter: slotter,}));
    return res.status(200).send({user: user, posts: posts, sold: sold, slotter: slotter,});

}})


});








module.exports.doctorfilter = asyncHandler(async (req, res) => {
  
  try {
    // let pattern = new RegExp(searchTerm, "i");
    let doctorname=""
    const { doctorName, date, time, charges } = req.body;
    if(doctorName){doctorname=doctorName}
    let filteredSlots = await Slot.find({
      Userid: req.user._id, // Condition for userid=req.user._id
      $or: [
        { DoctorName: { $regex:doctorname, $options: "i" } },
        
        // Other conditions...
      ],
       Charge: charges 
    }).populate('doctorid');
    // console.log(query);
    //const filteredSlots = await Slot.find(query).populate('doctorid');
    console.log(filteredSlots);
    res.status(200).json(filteredSlots);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }







  // const slotter = await Slot.find({ Userid: req.user._id }).populate(
  //   "doctorid"
  // );
  // console.log(slotter);
  // console.log({
  //   user: user,
  //   posts: posts,
  //   sold: sold,
  //   slotter: slotter,
  // })
  // res.status(200).json({
  //   user: user,
  //   posts: posts,
  //   sold: sold,
  //   slotter: slotter,
  // });
});


module.exports.logut = asyncHandler(async (req, res, next) => {
  req.logout(function (err) {
    if (err) {
      req.flash("error", "error in logout");
      return next(err);
    }
    req.flash("success", "You logged out successfully");
    res.redirect("/home");
  });
});

module.exports.happy = asyncHandler(async (req, res) => {
  const slotter = await Slot.findById(req.params.sid);
  const doc = await Doctor.findById(slotter.doctorid);
  var hapno = doc.Happyno + 1;
  await Doctor.updateOne({ _id: slotter.doctorid }, { Happyno: hapno });
  await Slot.updateOne({ _id: req.params.sid }, { status: "reviewed" });
  console.log(await Slot.findById(req.params.sid));
  console.log(await Doctor.findById(slotter.doctorid));
  // await Slot.deleteOne({_id:req.params.sid});
  // const docer = await Doctor.findById(slotter.doctorid);
  res.redirect("/userprofile");
  //console.log(slotter);
});

// module.exports.addtocart = asyncHandler(async (req,res))

const bcrypt = require("bcryptjs");
//model
const Product = require("../Models/products");
const doc = require("../Models/doctors");
const feed = require("../Models/feed");
const comment = require("../Models/comments");
const administer = require("../Models/admin");
const solddetails = require("../Models/solddetails");
const {redisClient} =  require('../cache/redisio.js')

module.exports.postlogin = async (req, res) => {
  try {
    email = req.body.email;
    password = req.body.password;
    console.log(email);
    console.log(password);
    if (!(password && email)) {
      res.status(400).json({ message: "Give The password and email" });
      return;
    }

    // Validate if user exist in our database
    const admin = await administer.findOne({ email });
    if (admin && (await bcrypt.compare(password, admin.hash))) {
      res.status(200).json({ adminid: admin._id });
      return;
    } else {
      res.status(400).json({ message: "wrong Credentials" });
      return;
    }
  } catch (error) {
    res.status(500).json({ message: "Error" ,error:error});
  }
};


// Redis COntroller :
module.exports.getadminprofile = async (req, res) => {
  try {
    // console.log('admin');
    // const admini = await administer.findById(req.params.id);
    // const docs = await doc.find({ pendingstatus: true });
    // const feeds = await feed.find({}).populate("author");
    // console.log(feeds);
    // res.status(200).json({ admini: admini, docs: docs, feeds: feeds });
    // return;

    redisClient.get("getadminprofile", async (err, cachedData) => {
      if (err) throw err;
  
    if (cachedData) {
      return res.json(JSON.parse(cachedData));
    } else {
      console.log('admin');
      const admini = await administer.findById(req.params.id);
      const docs = await doc.find({ pendingstatus: true });
      const feeds = await feed.find({}).populate("author");
      console.log(feeds);
    
      redisClient.setex("getadminprofile", 3600, JSON.stringify({success: true, admini: admini, docs: docs, feeds: feeds}));
      return res.status(200).send({success: true, admini: admini, docs: docs, feeds: feeds});
      }
    })
    } 
     catch (error) {
    res.status(500).json({ message: "Error hii", error:error });
  }
};




module.exports.getadminproductmanage = async (req, res) => {
  try {
    if (true) {
      console.log("Hi")
      const prod = await Product.find({});
      console.log(prod);
      res.status(200).json({ prod: prod });
      
      // res.render('adminproductsmanage',{navactive:navactive, prod:prod})
    } else {
      res.status(400).json({ message: "You need to admin" });
      return;
    }
  } catch (error) {
    res.status(500).json({ message: "Error"  ,error:error});
    return;
  }
};

module.exports.productupdate = async (req, res) => {
  try {
      pid = req.params.pid;
      cutprice = req.body.productcutprice;
      stock = req.body.productstock;
      console.log(cutprice, stock);
      const product = await Product.findOneAndUpdate(
        { _id: pid },
        { Cutprice: cutprice, Stock: stock }
      );
      console.log(product);
      res.status(200).json({ product: product });
    } 
   catch (error) {
    res.status(500).json({ message: "Error", error: error });
    return;
  }
};

module.exports.expertaccept = async (req, res) => {
  try {
    if (true) {
      tid = req.params.tid;
      console.log('accepted');
      await doc.updateOne({ _id: tid }, { pendingstatus: false });
      const docs = await doc.find({ pendingstatus: true });
      res.status(200).json(docs);
    } 
  } catch (error) {
    res.status(500).json({ message: "Error", error: error });
    return;
  }
};


module.exports.expertinfo = async (req, res) => {
  try {
    if (true) {
      
      
      const docs = await await doc.find({});
      res.status(200).json(docs);
    } 
  } catch (error) {
    res.status(500).json({ message: "Error", error: error });
    return;
  }
};

module.exports.expertdelete = async (req, res) => {
  try {
    if (true) {
      tid = req.params.tid;
      console.log('delete');
      await doc.deleteOne({ _id: tid });
      const docs = await doc.find({ pendingstatus: true });
      res.status(200).json(docs);
  }
  } catch (error) {
    res.status(500).json({ message: "Error", error: error });
    return;
  }
};

module.exports.productdelete = async (req, res) => {
  try {
    if (true) {
      pid = req.params.pid;
      console.log("delete");
      await Product.deleteOne({ _id: pid });
      res.status(200);
    } else {
      res.status(400).json({ message: "You need to admin" });
      return;
    }
  } catch (error) {
    res.status(500).json({ message: "Error", error: error });
    return;
  }
};

module.exports.feedaccept = async (req, res) => {
  try {
 
      fid = req.params.fid;
      //console.log('delete');
      await feed.findByIdAndUpdate({ _id: fid }, { checked: true });
      const feeds=await feed.find({}).populate('author');
      res.status(200).json(feeds);
    } 
   catch (error) {
    res.status(500).json({ message: "Error", error: error });
    return;
  }
};

module.exports.feeddelete = async (req, res) => {
  try {
 
    fid = req.params.fid;
    console.log('delete');
    post = await feed.findById(fid);
    for (let index = 0; index < post.comments.length; index++) {
      await comment.deleteOne({ _id: post.comments[index] });
    }

    await feed.deleteOne({ _id: fid });
    
  
    const feeds=await feed.find({}).populate('author');
    res.status(200).json(feeds);
  } 
 catch (error) {
  res.status(500).json({ message: "Error", error: error });
  return;
}
     
};

module.exports.productadd = async (req, res) => {

  try {
    if (true) {
        console.log(req.body);
        Name = req.body.name;
        Cutprice = req.body.cutprice;
        Price = req.body.price;
        Company = req.body.company;
        image = req.body.imgurl;
        author = req.body.author;
        Stock = req.body.stock;
        Type = req.body.category;
      
        const newprod = new Product({
          Name: Name,
          Cutprice: Cutprice,
          Price: Price,
          Company: Company,
          image: image,
          author: author,
          Stock: Stock,
          Type: Type,
        });
        console.log(newprod);
        await newprod.save();
        res.status(200);
      } else {
        res.status(400).json({ message: "You need to admin" });
        return;
      }
      
  } catch (error) {
    res.status(500).json({ message: "Error", error: error });
    return;
  }


 
};

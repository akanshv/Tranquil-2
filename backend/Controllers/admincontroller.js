// const bcrypt=require('bcrypt');

var {navactive}=require('../navactive')

navactive=[0,0,0,0,1,0]

//model
const Product = require('../Models/products');
const doc=require('../Models/doctors');
const feed = require('../Models/feed');
const comment=require('../Models/comments');
const administer=require("../Models/admin");

module.exports.postlogin=async(req, res) => {
    email=req.body.email;
    password=req.body.password;
    console.log(email);
    console.log(password);
    if (!(password&&email)) {
        req.flash('error','All fields are necessary');
        return res.redirect('/admin/adminlogin');
    }
    
    // Validate if user exist in our database
    const admin= await administer.findOne({ email });
    if (admin && (await bcrypt.compare(password, admin.hash))){
        if(req.session.passport){
            delete req.session.passport;
        }
        if(req.session.doctorid){
            delete req.session.doctorid;
        }
        req.session.adminid=admin._id;
        console.log(req.session.adminid);
        res.redirect('/admin/adminprofile');
    }
    else{
        req.flash('error','Mismatched Credential');
        return res.redirect('/admin/adminlogin');
    }
}


module.exports.getlogin=(req, res) => {
    navactive=[1,0,0,0,0,0];
    res.render('adminlogin',{navactive:navactive})
}

module.exports.getadminprofile=async(req, res) => {
    if(req.session.adminid){
        const admini= await administer.findById( req.session.adminid );
        const docs = await doc.find({pendingstatus:true});
        const feeds = await feed.find({}).populate('author')
        navactive=[1,0,0,0,0,0];
        res.render('adminprofile',{navactive:navactive,admini:admini, docs:docs, feeds:feeds})
    }
    else{
        req.flash('error','You need to first login');
        return res.redirect('/admin/adminlogin');
    }
    
}

module.exports.getadminproductmanage=async(req,res) =>{
    if(req.session.adminid){
        const prod = await Product.find({})
        navactive=[1,0,0,0,0,0];
        res.render('adminproductsmanage',{navactive:navactive, prod:prod})
    }
    else{
        req.flash('error','You need to first login');
        return res.redirect('/admin/adminlogin');
    }
}

module.exports.productupdate=async(req,res)=>{
    if(req.session.adminid){
    pid=req.params.pid
    cutprice=req.body.productcutprice;
    stock=req.body.productstock;
    console.log(cutprice,stock);
    product=await Product.findOneAndUpdate({_id:pid},{Cutprice:cutprice,Stock:stock});
    console.log(product);
    res.redirect('/admin/adminproductsmanage');   
    }
    else{
        req.flash('error','You need to first login');
        return res.redirect('/admin/adminlogin');
    }
}

module.exports.expertaccept=async(req,res)=>{
    if(req.session.adminid){
        tid=req.params.tid
        //console.log('delete');
       await doc.updateOne({_id:tid},{pendingstatus:false});
       res.redirect('/admin/adminprofile');   
    }
    else{
        req.flash('error','You need to first login');
        return res.redirect('/admin/adminlogin');
    }
}

module.exports.expertdelete=async(req,res)=>{
    if(req.session.adminid){
        tid=req.params.tid
        //console.log('delete');
        await doc.deleteOne({_id:tid});
    res.redirect('/admin/adminprofile');   
    }
    else{
        req.flash('error','You need to first login');
        return res.redirect('/admin/adminlogin');
    }
}

module.exports.productdelete=async(req,res)=>{
    if(req.session.adminid){
        pid=req.params.pid
        console.log('delete');
        await Product.deleteOne({_id:pid});
    res.redirect('/admin/adminproductsmanage');   
    }
    else{
        req.flash('error','You need to first login');
        return res.redirect('/admin/adminlogin');
    }
}

module.exports.feedaccept=async(req,res)=>{
    if(req.session.adminid){
        fid=req.params.fid
        //console.log('delete');
        await feed.findByIdAndUpdate({_id:fid},{checked:true});
        res.redirect('/admin/adminprofile');   
    }
    else{
        req.flash('error','You need to first login');
        return res.redirect('/admin/adminlogin');
    }  
}

module.exports.feeddelete=async(req,res)=>{
    if(req.session.adminid){
        fid=req.params.fid;
       // console.log('delete');
        post=await feed.findById(fid);
        for (let index = 0; index < post.comments.length; index++) {
            await comment.deleteOne({_id:post.comments[index]});
            
        }

        await feed.deleteOne({_id:fid});
    res.redirect('/admin/adminprofile');   
    }
    else{
        req.flash('error','You need to first login');
        return res.redirect('/admin/adminlogin');
    }
}

module.exports.productadd=async(req,res)=>{
    console.log(req.body)
    Name = req.body.name
    Cutprice = req.body.cutprice
    Price = req.body.price
    Company = req.body.company
    image = req.body.imgurl
    author = req.body.author
    Stock = req.body.stock
    Type = req.body.category

    const newprod = new Product({
        Name : Name,
        Cutprice : Cutprice,
        Price : Price,
        Company : Company,
        image : image,
        author : author,
        Stock : Stock,
        Type : Type
    });
    console.log(newprod);
    await newprod.save();


    res.redirect('/admin/adminproductsmanage');
}
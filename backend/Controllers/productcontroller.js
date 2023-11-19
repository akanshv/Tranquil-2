var {navactive}=require('../navactive')

navactive=[0,0,0,0,1,0]

//middleware
const {isLoggedIn}=require('../Middlewares/authomiddleware')

//model
const Product = require('../Models/products');
const cart=require('../Models/cart');
const user=require('../Models/user');
const sold=require('../Models/solddetails');


// Functions :

module.exports.isloggedin=async (req, res, next) => {
    navactive=[0,0,0,0,1,0];
    const products =  await Product.find({});
    const carter=await cart.find({userid:req.user._id}).populate('product');
    //console.log(carter);
    totalcount=0;
    amount=0;
    var cartor=[];
    for (let index in carter) {
        var product=await Product.findById(carter[index].productid);
        obj={
            product:product,
            indicount:carter[index].count
        }
        cartor.push(obj);
        //console.log(product);
        amount=amount+carter[index].count*product.Cutprice;
        totalcount=totalcount+carter[index].count
        
    }
    //console.log(cartor); 
    cartdetails={
         amount:amount,
         totalcount    
    }

    //console.log(cartdetails);
    res.render('products/products',{navactive:navactive,products:products,cartdetails:cartdetails,cartor:cartor});

}


module.exports.deleteproductsingle=async (req,res)=>{
    pid=req.params.pid;
    //console.log(pid);
    await cart.deleteOne({productid:pid});
    res.redirect('/products');
}

module.exports.deleteproductmanay=async (req,res)=>{
    await cart.deleteMany({userid:req.user._id});
    res.redirect('/products');
}

module.exports.changecount=async (req,res)=>{
    pid=req.params.pid;
    newcount=req.body.newcount;
    //console.log(pid);
    await cart.updateOne({productid:pid},{count:newcount});
    res.redirect('/products');
}

module.exports.buyproduct=async(req,res)=>{
    navactive=[0,0,0,0,1,0];
    buycart=await cart.find({userid:req.user._id});
    if(!(buycart.length)){
        res.redirect('/products');
    }
    console.log(buycart);
    amount=0;
    countarr=[];
    productarr=[];
    for (let index = 0; index < buycart.length; index++) {
        var producti=await Product.findById(buycart[index].productid);
        stock=producti.Stock-buycart[index].count;
        await Product.findOneAndUpdate({_id:buycart[index].productid},{Stock:stock})
        var product=await Product.findById(buycart[index].productid);
        productarr.push(product);
        countarr.push(buycart[index].count);
        amount=amount+buycart[index].count*product.Cutprice;
    }
    
    bought=new sold({
        productarr:productarr,
        countarr:countarr,
        userid:req.user._id,
        amount:amount
    })

    const use = await user.findById(bought.userid)
    await bought.save();
    await cart.deleteMany({userid:req.user.id});
    res.render('products/buy',{navactive:navactive,bought:bought,use:use});
    console.log(bought);
    console.log(use);
}


module.exports.addtocart=async(req,res,next)=>{
    navactive=[0,0,0,0,1,0];
    //console.log(req.body);

    search=await cart.find({userid:req.user._id,productid:req.body.productid});
   // console.log(search);
    if(search.length){
          x=search[0].count
          await cart.findOneAndUpdate({userid:req.user._id,productid:req.body.productid},{count:x+1})
    }else{
        newadd=await new cart({
            productid:req.body.productid,
            userid:req.user._id,
        })
        await newadd.save()
    //     console.log(await cart.find({userid:req.user._id}));
     }

    res.redirect('/products');
}
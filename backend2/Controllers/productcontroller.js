



//model
const Product = require('../Models/products');
const cart=require('../Models/cart');
const user=require('../Models/user');
const sold=require('../Models/solddetails');


// Functions :

module.exports.isloggedin=async (req, res, next) => {
    try {

    const products =  await Product.find({});
    // const carter=await cart.find({userid:req.user._id}).populate('product');
    // //console.log(carter);
    // totalcount=0;
    // amount=0;
    // var cartor=[];
    // for (let index in carter) {
    //     var product=await Product.findById(carter[index].productid);
    //     obj={
    //         product:product,
    //         indicount:carter[index].count
    //     }
    //     cartor.push(obj);
    //     //console.log(product);
    //     amount=amount+carter[index].count*product.Cutprice;
    //     totalcount=totalcount+carter[index].count
        
    // }
    // //console.log(cartor); 
    // cartdetails={
    //      amount:amount,
    //      totalcount    
    // }

    //console.log(cartdetails);
    data={
        products:products,
        // cartdetails:cartdetails,
        // cartor:cartor
    }
    console.log(data);
    res.status(200).json(data);
        
    } catch (error) {
        res.status(500).json({ message: "Error",error:error});
    }
    
    // res.render('products/products',{navactive:navactive,products:products,cartdetails:cartdetails,cartor:cartor});

}


module.exports.deleteproductsingle=async (req,res)=>{
    try {
        pid=req.params.pid;
        //console.log(pid);
        await cart.deleteOne({productid:pid});
        res.status(200);
        // res.redirect('/products');
    } catch (error) {
        res.status(500).json({ message: "Error",error:error});
    }
   
}

module.exports.deleteproductmanay=async (req,res)=>{
    try {
        await cart.deleteMany({userid:req.user._id});
        res.status(200);
    // res.redirect('/products');
    } catch (error) {
        res.status(500).json({ message: "Error",error:error});
    }
    
}

module.exports.changecount=async (req,res)=>{
    try {
        pid=req.params.pid;
    newcount=req.body.newcount;
    //console.log(pid);
    
    await cart.updateOne({productid:pid},{count:newcount});
    res.status(200);
    } catch (error) {
        res.status(500).json({ message: "Error",error:error});
    }

    
    // res.redirect('/products');
}

module.exports.buyproduct=async(req,res)=>{
    try {
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
    res.status(200);
    } catch (error) {
        res.status(500).json({ message: "Error",error:error});
    }
    
}


module.exports.addtocart=async(req,res,next)=>{
    try {
        search=await cart.find({userid:req.user._id,productid:req.body.productid});
        // console.log(search);
         if(search.length){
               x=search[0].count
               await cart.findOneAndUpdate({userid:req.user._id,productid:req.body.productid},{count:x+1})
         }else{
             newadd= new cart({
                 productid:req.body.productid,
                 userid:req.user._id,
             })
             await newadd.save()
         //     console.log(await cart.find({userid:req.user._id}));
          }
     
          res.status(200);
    } catch (error) {
        res.status(500).json({ message: "Error",error:error});
    }
}
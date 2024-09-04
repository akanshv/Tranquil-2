



//model
const Product = require('../Models/products');
const cart = require('../Models/cart');
const user = require('../Models/user');
const sold = require('../Models/solddetails');
const products = require('../Models/products');
const {redisClient} =  require('../cache/redisio.js')

// Functions :

module.exports.isloggedin = async (req, res, next) => {
    try {
        {
            const products = await Product.find({});
            // const carter=await cart.find({userid:req.user._id}).populate('product');
            //console.log(carter);
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

        }
        //console.log(cartor); 
        cartdetails = {
            amount: amount,
            totalcount
        }

        //console.log(cartdetails);
        data = {
            products: products,
            cartdetails: cartdetails,
            cartor: cartor
        }

        console.log(data);
        res.status(200).json(data);

    } catch (error) {
        res.status(500).json({ message: "Error", error: error });
    }

    // res.render('products/products',{navactive:navactive,products:products,cartdetails:cartdetails,cartor:cartor});

}


// Redis COntroller :
module.exports.getproducts = async (req, res) => {
    try {
        // const products = await Product.find({});
        // console.log(products);
        // return res.send({ success: true, products: products })
        
        redisClient.get("getproducts", async (err, cachedData) => {
            if (err) throw err;
        
        if (cachedData) {
          return res.json(JSON.parse(cachedData));
        } else {
                const products = await Product.find({});
                redisClient.setex("getproducts", 3600, JSON.stringify({success: true, products: products}));
                return res.status(200).send({success: true, products: products});
        
            }
        
        })

    } catch (e) {
        console.log(e)
        res.send({ success: false, message: "Something went wrong" })
    }
}








module.exports.deleteproductsingle = async (req, res) => {
    try {
        pid = req.params.pid;
        //console.log(pid);
        await cart.deleteOne({ productid: pid });
        res.status(200);
        // res.redirect('/products');
    } catch (error) {
        res.status(500).json({ message: "Error", error: error });
    }

}

module.exports.deleteproductmanay = async (req, res) => {
    try {
        await cart.deleteMany({ userid: req.user._id });
        res.status(200);
        // res.redirect('/products');
    } catch (error) {
        res.status(500).json({ message: "Error", error: error });
    }

}

module.exports.changecount = async (req, res) => {
    try {
        pid = req.params.pid;
        newcount = req.body.newcount;
        //console.log(pid);

        await cart.updateOne({ productid: pid }, { count: newcount });
        res.status(200);
    } catch (error) {
        res.status(500).json({ message: "Error", error: error });
    }


    // res.redirect('/products');
}

// module.exports.buyproduct = async (req, res) => {
//     try {
//         buycart = await cart.find({ userid: req.user._id });
//         if (!(buycart.length)) {
//             res.redirect('/products');
//         }
//         console.log(buycart);
//         amount = 0;
//         countarr = [];
//         productarr = [];
//         for (let index = 0; index < buycart.length; index++) {
//             var producti = await Product.findById(buycart[index].productid);
//             stock = producti.Stock - buycart[index].count;
//             await Product.findOneAndUpdate({ _id: buycart[index].productid }, { Stock: stock })
//             var product = await Product.findById(buycart[index].productid);
//             productarr.push(product);
//             countarr.push(buycart[index].count);
//             amount = amount + buycart[index].count * product.Cutprice;
//         }

//         bought = new sold({
//             productarr: productarr,
//             countarr: countarr,
//             userid: req.user._id,
//             amount: amount
//         })

//         const use = await user.findById(bought.userid)
//         await bought.save();
//         await cart.deleteMany({ userid: req.user.id });
//         res.render('products/buy', { navactive: navactive, bought: bought, use: use });
//         console.log(bought);
//         console.log(use);
//         res.status(200);
//     } catch (error) {
//         res.status(500).json({ message: "Error", error: error });
//     }

// }

module.exports.buyproduct = async (req, res) => {
    try {
        buycart = await cart.findOne({ userid: req.user._id }).populate('products.productId');
        console.log(buycart);
        console.log("I was here")

        if (!buycart || buycart.products.length == 0) {
           return res.send({message:"No Items in Cart", success: false})
        }

        amount = 0;
        countarr = [];
        productarr = [];
            
        // for (let index = 0; index < buycart.products.length; index++) {
        //     var producti = await Product.findById(buycart[index].productid);
        //     await Product.findOneAndUpdate({ _id: buycart[index].productid }, { Stock: stock })
        //     var product = await Product.findById(buycart[index].productid);
        //     productarr.push(product);
        //     countarr.push(buycart[index].count);
        //     amount = amount + buycart[index].count * product.Cutprice;
        // }

        for (let index = 0; index < buycart.products.length; index++) {
            let productItem = buycart.products[index];
            let product = productItem.productId;
            productarr.push(product);
            countarr.push(productItem.count);
            amount = amount + productItem.count * product.Cutprice;
            await Product.findOneAndUpdate({ _id: product._id }, { Stock: product.Stock - productItem.count });
        }

        bought = new sold({
            productarr: productarr,
            countarr: countarr,
            userid: req.user._id,
            amount: amount
        })


        console.log(bought);

        const use = await user.findById(bought.userid)
        await bought.save();
        await cart.deleteMany({ userid: req.user.id });
        res.json({ bought, use }); // Send JSON response instead of rendering
        console.log(bought);
        console.log(use);
        res.status(200);
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Error", error: error });
    }
}

module.exports.deletefromcart = async (req, res, next) => {
    const { userId, productId } = req.body;
    if (userId == "" || productId == "") {
        return res.status(401).json({ message: "Please Add Product Details" })
    }

    try {
        let search = await cart.findOne({ userid: userId });

        if (!search) {
            return res.status(404).json({ message: "Cart not found" });
        }

        let updatedProducts = search.products.filter(product => { return (product.productId != productId) });

        if (updatedProducts.length === search.products.length) {
            return res.status(404).json({ message: "Product not found in cart" });
        }

        search.products = updatedProducts;
        await search.save();

        return res.status(200).json({ success: true, cart: search });
    } catch (e) {
        console.log(e)
        res.status(500).json({ message: "Something Went Wrong" });
    }
}

module.exports.addtocart = async (req, res, next) => {
    const { userId, productId } = req.body;
    try {
        let search = await cart.findOne({ userid: userId });
        // console.log(cart)

        if (search) {
            let flag = false;
            search.products?.map((product) => {
                if (product.productId == productId) {
                    product.count += 1;
                    flag = true;
                }
                return product;
            })

            if (!flag) {
                search.products.push({
                    productId: productId,
                    count: 1
                })
            }
            await search.save();

        } else {
            newadd = new cart({
                products: [{ "productId": productId, count: 1 }],
                userid: userId,
            })
            await newadd.save()
        }

        return res.status(200).json({ success: true, search });
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Error" });
    }
}

module.exports.getCart = async (req, res, next) => {
    const { userId } = req.body;
    try {
        let userCart = await cart.findOne({ userid: userId }).populate('products.productId');
        if (userCart) {

            // console.log(userCart)
            return res.send(userCart)
        }
        return res.send("Empty")
    } catch (e) {
        console.log(e)
        return res.send("Something went wrong");
    }
}


module.exports.increasequantity = async (req, res, next) => {
    const { userId, productId } = req.body;

    if (userId == "" || productId == "") {
        return res.status(401).json({ message: "Please Add Product Details" })
    }

    try {
        let search = await cart.findOne({ userid: userId });

        if (!search) {
            return res.status(404).json({ message: "Cart not found" });
        }

        let updatedProducts = search.products.map(product => {
            if (product.productId == productId) {
                product.count += 1;
            }
            return product;
        });

        search.products = updatedProducts;
        await search.save();

        return res.status(200).json({ success: true, cart: search });
    } catch (e) {
        console.log(e)
        res.status(500).json({ message: "Something Went Wrong" });
    }
}

module.exports.decreasequantity = async (req, res, next) => {
    const { userId, productId } = req.body;
    if (userId == "" || productId == "") {
        return res.status(401).json({ message: "Please Add Product Details" })
    }

    try {
        let search = await cart.findOne({ userid: userId });
        // console.log(search)
        if (!search) {
            return res.status(404).json({ message: "Cart not found" });
        }

        let updatedProducts = search.products.map(product => {
            if (product.productId == productId && product.count > 1) {
                product.count -= 1;
            }

            return product;
        });

        search.products = updatedProducts;
        await search.save();

        return res.status(200).json({ success: true, cart: search });
    } catch (e) {
        console.log(e)
        res.status(500).json({ message: "Something Went Wrong" });
    }
}

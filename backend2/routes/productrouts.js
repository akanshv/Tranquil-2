const express = require('express');
const app = express();
router=express.Router();
const redisClient =  require('../cache/redisio.js')


// error class
const ExpressError=require('../utils/ExpressError')
// wrapper err function
const catchAsync = require('../utils/catchAsync');
//middleware


//model
const Product = require('../Models/products');
const cart=require('../Models/cart');
const user=require('../Models/user');
const sold=require('../Models/solddetails');

const control = require('../Controllers/productcontroller');
const control2 = require('../Controllers/paymentController.js');


const { protect } = require("../Middlewares/authMiddleware");

router.get('/',catchAsync(control.isloggedin));

router.get('/getproducts',protect, catchAsync(control.getproducts))

router.delete('/cart/:pid',protect,catchAsync(control.deleteproductsingle));

router.get('/clearcart',protect,catchAsync(control.deletemanyproduct));

router.post('/changecount/:pid',protect,catchAsync(control.changecount));

// router.update('/')

router.post('/buyproduct',protect,catchAsync(control.buyproduct));

router.post('/getcart',protect,catchAsync(control.getCart))
router.post('/addtocart',protect,catchAsync(control.addtocart));
router.post('/deletefromcart',protect,catchAsync(control.deletefromcart));
router.post('/increasequantity',protect,catchAsync(control.increasequantity));
router.post('/decreasequantity',protect,catchAsync(control.decreasequantity));                     
router.post('/create-order',catchAsync(control2.payment));                     

module.exports=router;
const mongoose=require('mongoose');
const comments=require('./comments');
const Schema=mongoose.Schema;
const { object } = require('joi');

const CartSchema=new Schema({
    productid:{
        type:Schema.Types.ObjectId,
        ref:'Product',
    },
    userid:String,
    count:{type:Number,default:1}
});
module.exports=mongoose.model('Cart',CartSchema);
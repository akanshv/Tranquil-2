const mongoose=require('mongoose');
const comments=require('./comments');
const Schema=mongoose.Schema;
const { object } = require('joi');

const SoldSchema=new Schema({
    productarr:[{
        type:Schema.Types.ObjectId,
        ref:'Product'
    }],
    countarr:[Number],
    userid:String,
    amount:Number,
    buydate:{type:Date,default:Date.now()}
});
module.exports=mongoose.model('Sold',SoldSchema);
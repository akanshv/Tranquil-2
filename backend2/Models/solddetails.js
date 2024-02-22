const mongoose=require('mongoose');
const Schema=mongoose.Schema;

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
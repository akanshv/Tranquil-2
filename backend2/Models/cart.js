const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const CartSchema=new Schema({
    products:[{
        productId: {type:  Schema.Types.ObjectId, ref: "Product" },
        count: {type:Number, default: 0}
    }],
    
    userid:String
});
module.exports=mongoose.model('Cart',CartSchema);
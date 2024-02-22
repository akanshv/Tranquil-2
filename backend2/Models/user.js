const { object } = require('joi');
const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const UserSchema=new Schema({
    email:{
        type:String,
        required:true,
        unique:true,
        sparse:true, /// Koi bhi errror aage aya to yahim se aayega to remove E110000
    },
    username:{
        type:String,
        required:true,
        unique:true
    },
    hash:String,
    Signupdate:{type:Date,default:Date.now()},
    SmileCount:{type:Number,default:0},
    commentlike:{type:Number,default:0},
    pfp:String,
    cart:[String]   
});
module.exports=mongoose.model('User',UserSchema);

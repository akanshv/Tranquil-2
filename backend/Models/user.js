const { object } = require('joi');
const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const passportLocalMongoose=require('passport-local-mongoose');
const UserSchema=new Schema({
    email:{
        type:String,
        required:true,
        unique:true,
        sparse:true, /// Koi bhi errror aage aya to yahim se aayega to remove E110000
    },
    Signupdate:{type:Date,default:Date.now()},
    SmileCount:{type:Number,default:0},
    commentlike:{type:Number,default:0},
    pfp:String,
    cart:[String]   
});
UserSchema.plugin(passportLocalMongoose);
module.exports=mongoose.model('User',UserSchema);

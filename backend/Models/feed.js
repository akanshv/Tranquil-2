const mongoose=require('mongoose');
const comments=require('./comments');
const Schema=mongoose.Schema;
const { object, boolean } = require('joi');

const FeedSchema=new Schema({
    title:String,
    likes:{type:Number,default:0},
    reallikes:[String],
    topic:String,
    image:String,
    caption:String,
    descriptions:String,
    uploaddate:{type:Date,default:Date.now()},
    reportarr:[String],
    author:{
        type:Schema.Types.ObjectId,
        ref:'User',
    }
    ,
    comments:[
        {
            type:Schema.Types.ObjectId,
            ref:'Comment'
        } 
        
    ],
    checked:{type:Boolean, default:false}
});
module.exports=mongoose.model('Feed',FeedSchema);
const mongoose=require('mongoose');
const comments=require('./comments');
const Schema=mongoose.Schema;
const CommentSchema=new Schema({
    comlikes:{type:Number,default:0},
    body:String,
    authorname:String,
    authorpfp:String,
    author:{
        type:Schema.Types.ObjectId,
        ref:'User',
        // populate:true
    },
    date:{type:Date,default:Date.now()}
});

CommentSchema.pre('save',function(next){
    this.populate('author');
    next()
})
module.exports=mongoose.model('Comment',CommentSchema);




const { object } = require('joi');
const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const DoctorSchema=new Schema({
    email:{
        type:String,
        required:true,
        unique:true,
        sparse:true, /// Koi bhi errror aage aya to yahim se aayega to remove E110000
    },
    Name:String,
    Joindate:{type:Date,default:Date.now()},
    ExpertsIn:[String],
    Charge:{type:Number,default:0},
    Sessionno:{type:Number,default:0},
    Happyno:{type:Number,default:0},
    Experience:{type:Number,default:0},
    pfp:String,
    hash:String,
    document:String,
    pendingstatus:{type:Boolean,default:false}
});
module.exports=mongoose.model('Doctor',DoctorSchema);

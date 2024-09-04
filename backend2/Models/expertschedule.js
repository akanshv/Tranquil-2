const mongoose=require('mongoose');
const comments=require('./comments');
const Schema=mongoose.Schema;
const { object } = require('joi');

const ExpertScheduleSchema=new Schema({
    doctorid:{
        type:Schema.Types.ObjectId,
        ref:'Doctor',
    },
    DoctorName:String,
    UserName:String,
    Charge:{type:Number,default:0},
    Userid:{
        type:Schema.Types.ObjectId,
        ref:'User',
    },
    Link:{type:String,default:""},
    Date:String,
    Time:String,
    status:{type:String,enum:['pending','accept','happened','reviewed']}
})
module.exports=mongoose.model('Slot',ExpertScheduleSchema);
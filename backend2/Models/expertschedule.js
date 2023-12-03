const mongoose=require('mongoose');
const comments=require('./comments');
const Schema=mongoose.Schema;
const { object } = require('joi');

const ExpertScheduleSchema=new Schema({
    doctorid:{
        type:Schema.Types.ObjectId,
        ref:'Doctor',
    },
    Userid:{
        type:Schema.Types.ObjectId,
        ref:'User',
    },
    Date:String,
    Time:String,
    status:{type:String,enum:['pending','accept','happened','reviewed']}
})
module.exports=mongoose.model('Slot',ExpertScheduleSchema);
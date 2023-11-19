const { object } = require('joi');
const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const AdminSchema=new Schema({
    email:{
        type:String,
        required:true,
        unique:true,
        sparse:true, /// Koi bhi errror aage aya to yahim se aayega to remove E110000
    },
    name:String,
    hash:String
    
});
module.exports=mongoose.model('Admin',AdminSchema);

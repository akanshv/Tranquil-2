// const bcrypt = require('bcrypt');

const multer = require('multer');
const uploads = multer({ dest: 'routes/uploads' });

//imagur
const imgurUploader = require('imgur-uploader');



var { navactive } = require('../navactive')
navactive = [0, 0, 0, 0, 1, 0]

//middleware
const { isLoggedIn,isDoctorloggedin} = require('../Middlewares/authomiddleware')

//model
const experts = require('../Models/doctors');
const tempdoct = require('../Models/temp-doctors');
const User=require('../Models/temp-doctors');
const Slot=require('../Models/expertschedule');


//Functions :

module.exports.getlogin=(req, res) => {
    navactive=[1,0,0,0,0,0];
    res.render('therapy/doctorlogin',{navactive:navactive})
}

module.exports.postlogin=async (req,res)=>{
    navactive=[1,0,0,0,0,0];
    email=req.body.email;
    password=req.body.password;
    if (!(password&&email)) {
        req.flash('error','All fields are necessary');
        return res.redirect('/expert/expertlogin');
    }
    
    // Validate if user exist in our database
    const doctor = await experts.findOne({ email });
    if (doctor && (await bcrypt.compare(password, doctor.hash))){
        req.session.doctorid=doctor._id;
        if(req.session.passport){
            delete req.session.passport;
        }
        if(req.session.adminid){
            delete req.session.adminid;
        }
        res.redirect('/expert/expertprofile');
    }
    else{
        req.flash('error','Mismatched Credential');
        return res.redirect('/expert/expertlogin');
    } 
}

module.exports.getnewtherapist=async (req, res, next) => {
    navactive = [0, 0, 0, 1, 0, 0];
    res.render('therapy/therapists', {navactive: navactive});
}

module.exports.postnewtherapist=async (req, res, next) => {
    password = req.body.doctor.password;
    arr = [];
    if (req.body.doctor.Sub) {
        arr.push('Substance Abuse')
    }
    if (req.body.doctor.rel) {
        arr.push('Relationship')
    }
    if (req.body.doctor.Wor) {
        arr.push('Work Stress')
    }
    if (req.body.doctor.Teen) {
        arr.push('Teen Problems')
    }
    if (req.body.doctor.Sex) {
        arr.push('Sexual Abuse')
    }
    if (req.body.doctor.Harr) {
        arr.push('Harrassment')
    }
    if (req.body.doctor.Lon) {
        arr.push('Loneliness')
    }
    if (req.body.doctor.Anxiety) {
        arr.push('Anxiety')
    }
    console.log(req.body.doctor.password);
    email = req.body.doctor.email
    console.log(email);
    console.log(arr);
    Name=req.body.doctor.Name;
    yoe=req.body.doctor.yoe;
    document=req.body.doctor.document;
    pfp=req.body.doctor.image;
    charge=req.body.doctor.charge;

    // check if user already exist
    // Validate if user exist in our database
    const tempdoc = await tempdoct.findOne({ email });
    const expert = await experts.findOne({ email });
    if (tempdoc) {
        req.flash('error', 'Your Request is due with Admin, please wait');
        return res.redirect('/expert/newtherapists');
    }
    if (expert) {
        req.flash('error', 'Your Account Already Exists.....Please Login');
        return res.redirect('/expert/expertlogin');
    }




    // // //Encrypt user password
    encryptedPassword = await bcrypt.hash(password, 10);
    // const tempdoctor = new tempdoct({
    //     email: email,
    //     Name: Name,
    //     hash: encryptedPassword,
    //     ExpertsIn: arr,
    //     Charge: charge,
    //     Experience: yoe,
    //     pfp: pfp,
    //     document: document
    // });
    // console.log(tempdoctor);
    const experter = new experts({
        email: email,
        Name: Name,
        hash: encryptedPassword,
        ExpertsIn: arr,
        Charge: charge,
        Experience: yoe,
        pfp: pfp,
        document: document,
        pendingstatus:true
    });
    console.log(experter);
    await experter.save();
    const doctor = await experts.findOne({ email });
    if(req.session.passport){
        delete req.session.passport;
    }
    if(req.session.adminid){
        delete req.session.adminid;
    }
    req.session.doctorid=doctor._id;
    res.redirect('/expert/expertprofile');

}

module.exports.slotmaker=async (req,res)=>{
    
    if(req.session.doctorid){
        navactive=[1,0,0,0,0,0];
        date=req.body.slot.date;
        date=new Date(date);
        if(date<Date.now()){
        res.redirect('/expert/expertprofile');
        }
         else{
        
        }
        console.log(doc);
         res.render('doctorprofile',{navactive:navactive, doc:doc}) 
     }
     else{
         req.flash('error','You need to first login');
         return res.redirect('/expert/expertlogin');
     }



}

module.exports.updateprofile=async(req,res)=>{
    if(req.session.doctorid){
       console.log(req.body);
       if(req.body.name && req.body.Charge && req.body.pfp){
           await experts.updateOne({_id:req.session.doctorid},{Name:req.body.name,Charge:req.body.Charge,pfp:req.body.pfp});
       }
       res.redirect('/expert/expertprofile');   
    }
    else{
        req.flash('error','You need to first login');
        return res.redirect('/expert/expertlogin');
    }
}

module.exports.getexpertprofile=async (req,res)=>{


    if(req.session.doctorid){
        navactive=[1,0,0,0,0,0];
        const doc = await experts.findById(req.session.doctorid);
        const slotter = await Slot.find({}).populate('Userid');
        console.log(slotter);

        res.render('doctorprofile',{navactive:navactive, doc:doc, slotter:slotter})
     }
     else{
         req.flash('error','You need to first login');
         return res.redirect('/expert/expertlogin');
     }
    
}

module.exports.acceptslot=async(req,res)=>{
    if(req.session.doctorid){
        await Slot.updateOne({_id:req.params.sid},{status:"accept"})
        res.redirect('/expert/expertprofile')
     }
     else{
         req.flash('error','You need to first login');
         return res.redirect('/expert/expertlogin');
     }
}

module.exports.rejectslot=async(req,res)=>{
    if(req.session.doctorid){
        await Slot.deleteOne({_id:req.params.sid})
        res.redirect('/expert/expertprofile')
     }
     else{
         req.flash('error','You need to first login');
         return res.redirect('/expert/expertlogin');
     }
}
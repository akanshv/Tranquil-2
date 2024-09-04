// const {isLoggedIn}=require('')

//models
const experts = require('../Models/doctors');
const Slot=require('../Models/expertschedule');
const User = require('../Models/user');


module.exports.gettherapy=async (req, res, next) => {
  try {
        // navactive=[0,0,0,1,0,0];
        console.log("gettherapy");
        expertarray= await experts.find({pendingstatus:false});
        //   console.log(expertarray);
        res.status(200).json({expertarray:expertarray})
          // res.render('therapy/therapyentry',{,navactive:navactive})      
  } catch (error) {
    res.status(500).json({message:"Error",error:error})
  }

}

module.exports.askslot=async (req, res, next) => {
  try {
    console.log(req.body);
    const date = req.body.date;
    const time = req.body.time;
    dtime=new Date(`${date}T${time}`);
    if(dtime>Date.now()){
         var slot=new Slot({
           Date:req.body.date,
           Time:req.body.time,
           status:'pending'
         })
         slot.doctorid=req.params.did;
         slot.Userid=req.user._id;
         console.log(slot)
         await slot.save();
         res.redirect('/userprofile');
       
   }
   else{
     res.redirect('/therapy');
   }
  } catch (error) {
    res.status(500).json({message:"Error",error:error})
  }
  
 
 }

module.exports.filter =  async(req,res)=>{
  try {
    navactive=[0,0,0,1,0,0]
    type=req.params.no;
    console.log(typeof(type));
    doctor = await experts.find({});
    let expertarray=[];
    if(type ==='1'){
      for (let doc of doctor) {
        if(doc.ExpertsIn.includes("Relationship")){
          expertarray.push(doc);
        }
      }
      res.status(200).json(expertarray) //For Ajax
    }
    else if(type==='2'){
      for (let doc of doctor) {
        if(doc.ExpertsIn.includes("Work Stress")){
          expertarray.push(doc);
        }
      }  
      res.status(200).json(expertarray) //For Ajax
    }
    else if(type==='3'){
      for (let doc of doctor) {
        if(doc.ExpertsIn.includes("Teen Problems")){
          expertarray.push(doc);
        }
      }
      res.status(200).json(expertarray) //For Ajax  
    }
    else if(type==='4'){
      for (let doc of doctor) {
        if(doc.ExpertsIn.includes("Substance Abuse")){
          expertarray.push(doc);
        }
      }  
      res.status(200).json(expertarray) //For Ajax
    }
    else if(type==='5'){
      for (let doc of doctor) {
        if(doc.ExpertsIn.includes("Sexual Abuse")){
          expertarray.push(doc);
        }
      }
      res.status(200).json(expertarray)  
    }
    else if(type==='6'){
      for (let doc of doctor) {
        if(doc.ExpertsIn.includes("Harrassment")){
          expertarray.push(doc);
        }

      }
      res.status(200).json(expertarray) //For Ajax  
    }
    else if(type==='7'){
      for (let doc of doctor) {
        if(doc.ExpertsIn.includes("Loneliness")){
          expertarray.push(doc);
        }
      }
      res.status(200).json(expertarray) //For Ajax  
    }
    else if(type==='8'){
      for (let doc of doctor) {
        if(doc.ExpertsIn.includes("Anxiety")){
          expertarray.push(doc);
        }
      }
      res.status(200).json(expertarray) //For Ajax  
    }
    else{
      res.status(500).json({message:"Error",error:error})
    }
  
    // res.render('therapy/therapyentry', {expertarray:expertarray,navactive:navactive});
  
  } catch (error) {
    res.status(500).json({message:"Error",error:error})
  }

  }
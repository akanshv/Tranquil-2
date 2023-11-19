//model from model dir
const Feed = require('../Models/feed');// dp dots cause going to seeds to models
const User = require('../Models/user');
const admin = require('../Models/admin');
const Product = require('../Models/products');
const bcrypt=require('bcrypt');
const {arr,userdata,products,admineri}=require('./dataseeding');
const {config}=require('dotenv');
config();



//Database
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
mongoose.connect(url, {
    useNewUrlParser: true,//you have to specify the portno...mongoose changed this so by making false user can go to previous version where port no. is not required
    //useCreateIndex:true,//avoid depracation warnings(warnings that notify us that a specific feature (e.g. a method) will be removed soon (usually in the next minor or major version) and should be replaced with something else.)
    useUnifiedTopology: true// to use new connnection manager of mongoose
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Tranquil Database connected");
});


//console.log(arr);

const seedDb = async () => {
    
    
    // await User.deleteMany({});
    // for (let index = 0; index <userdata.length; index++) {
    //     const user = new User(userdata[index]);
    //     //console.log(feed);
    //     await user.save();

    // }
    await admin.deleteMany({});
    for (let index = 0; index < 5; index++) {
        obj={
            email:admineri[index].email,
            name:admineri[index].name,
            hash:await bcrypt.hash(admineri[index].password, 10)
        }

        const adminer = new admin(obj);
        //console.log(feed);
        await adminer.save();
    }
    
    console.log(await admin.find({}));
}
seedDb().then(() => {
    mongoose.connection.close();
});

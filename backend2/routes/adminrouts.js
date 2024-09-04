const express = require('express');
const app = express();
router = express.Router();
const administer = require('../Models/admin');
// error class
const ExpressError = require('../utils/ExpressError')
// wrapper err function
const catchAsync = require('../utils/catchAsync');
const bcrypt = require('bcryptjs');
const generateToken = require('../Middlewares/generateToken');

//middleware
// const {isLoggedIn}=require('../Middlewares/authomiddleware')

//model


const control = require('../Controllers/admincontroller');
const { adminprotect } = require('../Middlewares/authMiddleware');



// router.get('/adminlogin',control.getlogin);

// router.post('/adminlogin',catchAsync(control.postlogin));

router.post('/adminlogin', catchAsync(
    async (req, res) => {
        const { email, password } = req.body;
        console.log('admin : ', req.body);
        const admin = await administer.findOne({ email: email });
        console.log(admin);
        if(!admin){
            console.log("check")
            res.status(401);
            
        }

        if (admin && (await bcrypt.compare(password, admin.hash))) {
            console.log("Log In Successfull");
            res.json({
                _id: admin._id,
                name: admin.name,
                email: admin.email,
                token: generateToken(admin._id,res),
            }).status(201);
        } else {
            res.status(401);
            throw new Error('Invalid Email or Password');
        }
    }
));

router.get('/expertinfo', catchAsync(control.expertinfo));


router.get('/adminprofile/:id', catchAsync(control.getadminprofile));

router.get('/adminproductsmanage/', catchAsync(control.getadminproductmanage));

router.put('/adminproductupdate/:pid', catchAsync(control.productupdate));

router.get('/adminexpertaccept/:tid', catchAsync(control.expertaccept));

router.get('/adminexpertdelete/:tid', catchAsync(control.expertdelete));

router.delete('/adminproductdelete/:pid', catchAsync(control.productdelete));

router.get('/adminfeedok/:fid', catchAsync(control.feedaccept));

router.get('/adminfeeddelete/:fid', catchAsync(control.feeddelete));

router.post('/adminproductadd', catchAsync(control.productadd));

router.use(adminprotect);

module.exports = router;
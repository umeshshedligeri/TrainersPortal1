const express=require('express');
const router=express.Router();
const Trainer=require('../models/traineruser');
const Student=require('../models/studentuser');
const config=require('../config/database');
const jwt=require('jsonwebtoken');
const passport=require('passport');

router.post('/register/trainer',(req,res,next)=>{
    let newTrainer= new Trainer({
        tname:req.body.tname,
        temail:req.body.temail,
        tmobile:req.body.tmobile,
        taddress:req.body.taddress,
        tskills:req.body.tskills,
        texperience:req.body.texperience,
        tprofile:req.body.tprofile,
        tdemovideo:req.body.tdemovideo,
        tpassword:req.body.tpassword,
    });

    Trainer.addTrainer(newTrainer,(err,user)=>{
        if(err)
        {
            res.json({success:false, msg:'failed to register Trainer'});
        }
        else{
            res.json({success:true,msg:'Trainer Registered '})
        }
    });
    
});

router.post('/register/student',(req,res,next)=>{
let newStudent=new Student({
    sname:req.body.sname,
    semail:req.body.semail,
    smobile:req.body.smobile,
    saddress:req.body.saddress,
    sdob:req.body.sdob,
    squalification:req.body.squalification,
    sbranch:req.body.sbranch,
    sgender:req.body.sgender,
    sprofile:req.body.sprofile,
    spassword:req.body.spassword
});

Student.addStudent(newStudent,(err,studentuser)=>{
    if(err)
    {
        res.json({success:false, msg:'failed to register Student'});
    }
    else{
        res.json({success:true,msg:'Student Registered '})
    }
});
});








router.get('/authenticate',(req,res,next)=>{

    const temail=req.body.temail;
    const tpassword=req.body.tpassword;

    Trainer.getUserByUsername(temail,(err,user)=>{
        if(err) throw err;
        if(!user)
        {
            return res.json({success:false,msg:'User not found'});
        }

        Trainer.comparePassword(tpassword,user.tpassword,(err,isMatch)=>
        {
            if(err) throw err;
            if(isMatch)
            {
                const token=jwt.sign(user.toJSON(),config.secret,{
                    expiresIn:604800
            });
            
            res.json({
                success:true,
                token:'Jwt'+token,
                user:{
                    id:user._id,
                    tname:user.tname,
                    temail:user.temail
                }
            });

            }
            else{
                return res.json({success:false,msg:'Wrong Password'});
            }

         })
    })

    // const semail=req.body.semail;
    // const spassword=req.body.spassword;

    // Student.getUserByUsername(semail,(err,studentuser)=>{
    //     if(err) throw err;
    //     if(!studentuser)
    //     {
    //         return res.json({success:false,msg:'User not found'});
    //     }

    //     Student.comparePassword(spassword,studentuser.spassword,(err,isMatch)=>
    //     {
    //         if(err) throw err;
    //         if(isMatch)
    //         {
    //             const token=jwt.sign(studentuser.toJSON(),config.secret,{
    //                 expiresIn:604800
    //         });
            
    //         res.json({
    //             success:true,
    //             token:'Jwt'+token,
    //             studentuser:{
    //                 id:studentuser._id,
    //                 sname:studentuser.sname,
    //                 semail:studentuser.semail
    //             }
    //         });

    //         }
    //         else{
    //             return res.json({success:false,msg:'Wrong Password'});
    //         }

    //      })
    // })






});

router.get('/profile',passport.authenticate('jwt',{session:false}),(req,res,next)=>{
    console.log(req.user);
    res.json({user:req.user});

    // console.log(req.studentuser);
    // res.json({studentuser:req.studentuser});
});


router.get('/validate',(req,res,next)=>{
    res.send('Validate');
});

module.exports=router; 